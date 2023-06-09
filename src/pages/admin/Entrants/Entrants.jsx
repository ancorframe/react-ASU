import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { FormProvider, useForm } from 'react-hook-form';
import { TextEditor } from '../../../cms/components/TextEditor';
import { Box } from 'components/Box';
import { useEntrants, useUpdateEntrants } from 'cms/hooks/entrants';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const defaultValues = {
  content: EditorState.createEmpty(),
};
export const Entrants = () => {
  const { degree } = useParams();
  const methods = useForm({
    defaultValues,
  });
  const { data } = useEntrants(degree);
  const update = useUpdateEntrants(data?.entrants.id);

  useEffect(() => {
    if (data) {
      methods.reset({
        content: EditorState.createWithContent(
          ContentState.createFromBlockArray(
            htmlToDraft(data.entrants.data.content).contentBlocks
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
                  <label>Content</label>
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
