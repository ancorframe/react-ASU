import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { FormProvider, useForm } from 'react-hook-form';
// import { FieldArrayPartnership } from 'cms/components/FieldArrayPartnership';
import { InputFile } from 'cms/components/InputFile';
import { Box } from 'components/Box';
import { Input } from 'components/Templates/Input/Input';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  usePartnershipById,
  useUpdatePartnership,
} from 'cms/hooks/partnership';

const defaultValues = {
  title: '',
  image: '',
};
export const Partnership = () => {
  const { id } = useParams();
  const methods = useForm({
    defaultValues,
  });
  const { data } = usePartnershipById(id);

  const update = useUpdatePartnership(id);
  useEffect(() => {
    if (data) {
      methods.reset({
        ...data.partnership.data,
      });
    }
  }, [data, methods]);

  const onSubmit = data => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    update.mutate(formData);
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
