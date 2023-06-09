import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import draftToHtml from 'draftjs-to-html';
import { FormProvider, useForm } from 'react-hook-form';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Box } from 'components/Box';
import htmlToDraft from 'html-to-draftjs';
import { useEffect } from 'react';
import { useResearch, useUpdateResearch } from 'cms/hooks/research';
import { TextEditor } from 'cms/components/TextEditor';

const defaultValues = {
  content: EditorState.createEmpty(),
};
export const Research = () => {
  const methods = useForm({
    defaultValues,
  });
  const { data } = useResearch();
  const update = useUpdateResearch(data?.research.id);
  useEffect(() => {
    if (data) {
      const research = {
        ...data.research.data,
        content: EditorState.createWithContent(
          ContentState.createFromBlockArray(
            htmlToDraft(data.research.data.content).contentBlocks
          )
        ),
      };
      methods.reset({
        ...research,
      });
    }
  }, [methods, data]);

  const onSubmit = data => {
    const convertedData = {
      ...data,
      content: draftToHtml(convertToRaw(data.content.getCurrentContent())),
    };
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
                <button type="submit">submit</button>
              </form>
            </FormProvider>
          </Box>
        </Box>
      </SectionContent>
    </main>
  );
};
