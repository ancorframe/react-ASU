import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from 'components/Box';
import { Input } from 'components/Templates/Input/Input';
import { InputFile } from 'cms/components/InputFile';
import { useCreatePartnershipDetail } from 'cms/hooks/partnership';
import { TextEditor } from 'cms/components/TextEditor';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { partnershipDetailSchema } from 'cms/validationSchemas/partnershipSchemas';

const defaultValues = {
  title: '',
  image: '',
  logo: '',
  url: '',
  content: EditorState.createEmpty(),
};
export const CreatePartnershipDetail = () => {
  const { id } = useParams();
  const create = useCreatePartnershipDetail();
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(partnershipDetailSchema),
  });

  const onSubmit = data => {
    const convertedData = {
      ...data,
      content: draftToHtml(convertToRaw(data.content.getCurrentContent())),
    };

    if (convertedData.content.length <= 30) {
      methods.setError('content', {
        type: 'custom',
        message: 'Content must be more than 30 characters long',
      });
      return;
    }

    const formData = new FormData();
    for (const key in convertedData) {
      formData.append(key, convertedData[key]);
    }
    formData.append('refer', id);

    create.mutate(formData);
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
