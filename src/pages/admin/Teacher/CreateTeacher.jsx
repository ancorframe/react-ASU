import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import draftToHtml from 'draftjs-to-html';
import { FormProvider, useForm } from 'react-hook-form';
import { TextEditor } from '../../../cms/components/TextEditor';
import { EditorState, convertToRaw } from 'draft-js';
import { Box } from 'components/Box';
import { Input } from 'components/Templates/Input/Input';
import { InputFile } from 'cms/components/InputFile';
import { useCreateTeacher } from 'cms/hooks/teachers';

const defaultValues = {
  fullName: '',
  image: '',
  degree: '',
  content: EditorState.createEmpty(),
};
export const CreateTeacher = () => {
  const create = useCreateTeacher();
  const methods = useForm({
    defaultValues,
  });

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
  };

  return (
    <main>
      <SectionContent>
        <Box maxWidth="960px" m="0 auto" boxShadow={'regular'}>
          <Box p={[null, 11]} px={[6, null]} py={[8, null]}>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <section>
                  <label>fullName</label>
                  <Input name="fullName" />
                </section>
                <section>
                  <label>degree</label>
                  <Input name="degree" />
                </section>
                <section>
                  <label> image</label>
                  <InputFile name="image" />
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
