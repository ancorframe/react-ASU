import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from 'components/Box';
import { Input } from 'components/Templates/Input/Input';
import { InputFile } from 'cms/components/InputFile';
import { useCreatePartnership } from 'cms/hooks/partnership';
import { yupResolver } from '@hookform/resolvers/yup';
import { partnershipSchema } from 'cms/validationSchemas/partnershipSchemas';

const defaultValues = {
  title: '',
  image: '',
};
export const CreatePartnership = () => {
  const create = useCreatePartnership();
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(partnershipSchema),
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
                <button type="submit">submit</button>
              </form>
            </FormProvider>
          </Box>
        </Box>
      </SectionContent>
    </main>
  );
};
