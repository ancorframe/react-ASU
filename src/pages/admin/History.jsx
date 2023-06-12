import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import draftToHtml from 'draftjs-to-html';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { FormProvider, useForm } from 'react-hook-form';
import { TextEditor } from '../../cms/components/TextEditor';
import { Box } from 'components/Box';
import { useHistory, useUpdateHistory } from 'cms/hooks/history';
import htmlToDraft from 'html-to-draftjs';
import { useEffect } from 'react';

const defaultValues = {
  content: EditorState.createEmpty(),
};
export const History = () => {
  const methods = useForm({
    defaultValues,
  });
  const { data } = useHistory();
  const update = useUpdateHistory(data?.history.id);

  useEffect(() => {
    if (data) {
      methods.reset({
        content: EditorState.createWithContent(
          ContentState.createFromBlockArray(
            htmlToDraft(data.history.data.content).contentBlocks
          )
        ),
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
                <button type="submit">submit</button>
              </form>
            </FormProvider>
          </Box>
        </Box>
      </SectionContent>
    </main>
  );
};
