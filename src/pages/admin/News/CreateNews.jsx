import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import draftToHtml from 'draftjs-to-html';
import { EditorState, convertToRaw } from 'draft-js';
import { FormProvider, useForm } from 'react-hook-form';
import { TextEditor } from '../../../cms/components/TextEditor';
import { Box } from 'components/Box';
import { useCreateNews } from 'cms/hooks/news';
import { InputFile } from 'cms/components/InputFile';
import { DatePicker } from 'cms/components/DatePicker';
import { Input } from 'components/Templates/Input/Input';
import { useNavigate } from 'react-router-dom';

const defaultValues = {
  title: '',
  image: '',
  date: new Date(),
  content: EditorState.createEmpty(),
};
export const CreateNews = () => {
  const methods = useForm({
    defaultValues,
  });
  const create = useCreateNews();
  const navigate = useNavigate();

  const onSubmit = data => {
    const convertedData = {
      ...data,
      content: draftToHtml(convertToRaw(data.content.getCurrentContent())),
    };
    const formData = new FormData();
    for (const key in convertedData) {
      formData.append(key, convertedData[key]);
    }
    create.mutate(formData);
    navigate('/admin/news');
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
                  <label>date</label>

                  <DatePicker name="date" />
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
