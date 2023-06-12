import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import draftToHtml from 'draftjs-to-html';
import { FormProvider, useForm } from 'react-hook-form';
import { TextEditor } from '../../cms/components/TextEditor';
import { FieldArray } from 'cms/components/FieldArray';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Box } from 'components/Box';
import { Title } from 'components/Templates/Title/Title';
import { useSupport, useUpdateSupport } from 'cms/hooks/support';
import htmlToDraft from 'html-to-draftjs';
import { useEffect } from 'react';

const defaultValues = {
  content: EditorState.createEmpty(),
  books: [
    {
      title: '',
      author: '',
      source: '',
      content: '',
    },
  ],
};
export const Support = () => {
  const methods = useForm({
    defaultValues,
  });
  const { data } = useSupport();

  const update = useUpdateSupport(data?.support.id);
  useEffect(() => {
    if (data) {
      const support = {
        ...data.support.data,
        content: EditorState.createWithContent(
          ContentState.createFromBlockArray(
            htmlToDraft(data.support.data.content).contentBlocks
          )
        ),
      };
      methods.reset({
        ...support,
      });
    }
  }, [methods, data]);

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

    update.mutate(convertedData);
  };

  return (
    <main>
      <SectionContent>
        <Box maxWidth="960px" m="0 auto" boxShadow={'regular'}>
          <Box p={[null, 11]} px={[6, null]} py={[8, null]}>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <section>
                  <label>DraftJS</label>
                  <TextEditor name="content" />
                </section>
                <Title variant="h2" mb={[9, 10]}>
                  Підручники і навчальні посібники викладачів кафедри АСУ
                </Title>
                <section>
                  <label>books</label>
                  <FieldArray name="books" />
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
