import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { FormProvider, useForm } from 'react-hook-form';
import { InputFile } from 'cms/components/InputFile';
import { Box } from 'components/Box';
import { Input } from 'components/Templates/Input/Input';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useDeletePartnershipDetail,
  usePartnershipDetailById,
  useUpdatePartnershipDetail,
} from 'cms/hooks/partnership';
import { useEffect } from 'react';
import { TextEditor } from 'cms/components/TextEditor';
import { yupResolver } from '@hookform/resolvers/yup';
import { partnershipDetailSchema } from 'cms/validationSchemas/partnershipSchemas';

const defaultValues = {
  title: '',
  image: '',
  logo: '',
  url: '',
  content: EditorState.createEmpty(),
};
export const PartnershipDetail = () => {
    const navigate = useNavigate();
  const { detailId } = useParams();
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(partnershipDetailSchema),
  });
  const { data } = usePartnershipDetailById(detailId);
  const update = useUpdatePartnershipDetail(detailId);
  const mutate = useDeletePartnershipDetail(detailId);

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

    update.mutate(formData);
  };

    const onDelete = () => {
      mutate.mutate();
      navigate('/admin/partnership');
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
            <button type="button" onClick={onDelete}>
              delete
            </button>
          </Box>
        </Box>
      </SectionContent>
    </main>
  );
};
