import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from 'components/Box';
import { Input } from 'components/Templates/Input/Input';
import { useNavigate } from 'react-router-dom';
import { useCreateLiterature } from 'cms/hooks/literature';
import { InputFile } from 'cms/components/InputFile';


const defaultValues = {
  title: '',
  image: '',
  author: '',
  specialty: '',
  url: '',
};
export const CreateLiterature = () => {
  const methods = useForm({
    defaultValues,
  });
  const create = useCreateLiterature();
  const navigate = useNavigate();
  
  const onSubmit = data => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    create.mutate(formData);
    navigate('/admin/literature');
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
                  <label>specialty</label>
                  <Input name="specialty" />
                </section>
                <section>
                  <label>author</label>
                  <Input name="author" />
                </section>
                <section>
                  <label>url</label>
                  <Input name="url" />
                </section>
                <section>
                  <label>image</label>
                  <InputFile name="image" />
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
