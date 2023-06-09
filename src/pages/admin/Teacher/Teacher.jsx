import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import draftToHtml from 'draftjs-to-html';
import { FormProvider, useForm } from 'react-hook-form';
import { TextEditor } from '../../../cms/components/TextEditor';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Box } from 'components/Box';
import { Input } from 'components/Templates/Input/Input';
import { InputFile } from 'cms/components/InputFile';
import {
  useDeleteTeacher,
  useTeachersDetail,
  useUpdateTeacher,
} from 'cms/hooks/teachers';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const defaultValues = {
  fullName: '',
  image: '',
  academicTitle: '',
  content: EditorState.createEmpty(),
};
export const Teacher = () => {
  const { id } = useParams();
  const methods = useForm({
    defaultValues,
  });
  const { data } = useTeachersDetail(id);
  const update = useUpdateTeacher(id);
  const mutate = useDeleteTeacher(id);
  const navigate = useNavigate();
  useEffect(() => {
    if (data) {
      const teacher = {
        ...data.teacher.data,
        content: EditorState.createWithContent(
          ContentState.createFromBlockArray(
            htmlToDraft(data.teacher.data.content).contentBlocks
          )
        ),
      };

      methods.reset({
        ...teacher,
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
  const onDelete = () => {
    mutate.mutate();
    navigate('/admin/teachers');
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
            <button type="button" onClick={onDelete}>
              delete
            </button>
          </Box>
        </Box>
      </SectionContent>
    </main>
  );
};
