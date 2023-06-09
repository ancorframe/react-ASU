import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
// import {
//   EditorState,
//   // convertToRaw, ContentState
// } from 'draft-js';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from 'components/Box';
import { Input } from 'components/Templates/Input/Input';
// import { FieldArrayPartnership } from 'cms/components/FieldArrayPartnership';
import { InputFile } from 'cms/components/InputFile';
import { useCreatePartnership } from 'cms/hooks/partnership';
// import { TextEditor } from '../../cms/components/TextEditor';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
// import { useEntrants, useUpdateEntrants } from 'cms/hooks/entrants';
// import { useEffect } from 'react';
// import { useNewsDetail, useUpdateNews } from 'cms/hooks/news';
// import { useParams } from 'react-router-dom';
// import { DatePicker } from 'cms/components/DatePicker';

const defaultValues = {
  title: '',
  image: '',
};
export const CreatePartnership = () => {
  const create = useCreatePartnership();
  const methods = useForm({
    defaultValues,
  });

  const onSubmit = data => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
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
                  <label>title</label>
                  <Input name="title" />
                </section>
                <section>
                  <label>image</label>

                  <InputFile name="image" />
                </section>

                {/* <FieldArrayPartnership name="content" /> */}

                <button type="submit">submit</button>
              </form>
            </FormProvider>
          </Box>
        </Box>
      </SectionContent>
    </main>
  );
};
