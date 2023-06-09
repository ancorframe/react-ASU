import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { FormProvider, useForm } from 'react-hook-form';
// import { FieldArrayPartnership } from 'cms/components/FieldArrayPartnership';
import { InputFile } from 'cms/components/InputFile';
import { Box } from 'components/Box';
import { Input } from 'components/Templates/Input/Input';
import {
  EditorState,
  convertToRaw, ContentState
} from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
// import { TextEditor } from '../../cms/components/TextEditor';

// import { useEntrants, useUpdateEntrants } from 'cms/hooks/entrants';
// import { useEffect } from 'react';
// import { useNewsDetail, useUpdateNews } from 'cms/hooks/news';
import { useParams } from 'react-router-dom';
import {
  usePartnershipDetailById,
  useUpdatePartnershipDetail,
} from 'cms/hooks/partnership';
import { useEffect } from 'react';
import { TextEditor } from 'cms/components/TextEditor';
// import { DatePicker } from 'cms/components/DatePicker';

const defaultValues = {
  title: '',
  image: '',
  logo: '',
  url: '',
  content: EditorState.createEmpty(),
};
export const PartnershipDetail = () => {
  const { detailId } = useParams();
  const methods = useForm({
    defaultValues,
  });
  const { data } = usePartnershipDetailById(detailId);
  const update = useUpdatePartnershipDetail(detailId);

  useEffect(() => {
    if (data) {
    const prevData = {
      ...data.partnership.data,
      content: EditorState.createWithContent(
        ContentState.createFromBlockArray(
          htmlToDraft(data.partnership.data.content).contentBlocks
        )
      ),
    };
      methods.reset({
        ...prevData,
      });
    }
  }, [data, methods]);

  const onSubmit = data => {
    const convertedData = {
      ...data,
      content: draftToHtml(convertToRaw(data.content.getCurrentContent())),
    };
    const formData = new FormData();
    for (const key in convertedData) {
      formData.append(key, convertedData[key]);
    }
    update.mutate(formData);
  };

  return (
    <main>
      <SectionContent>
        <Box maxWidth="960px" m="0 auto" boxShadow={'regular'}>
          <Box p={[null, 11]} px={[6, null]} py={[8, null]}>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <section>
                  <label>title</label>
                  <Input name="title" />
                </section>
                <section>
                  <label>image</label>
                  <InputFile name="image" />
                </section>
                <section>
                  <label>logo</label>
                  <InputFile name="logo" />
                </section>
                <section>
                  <label>url</label>
                  <Input name="url" type="url" />
                </section>
                <section>
                  <label>DraftJS</label>
                  <TextEditor name="content" />
                </section>
                <button type="submit">submit</button>
              </form>
            </FormProvider>
          </Box>
        </Box>
      </SectionContent>
    </main>
  );
};
