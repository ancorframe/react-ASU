import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { FormProvider, useForm } from 'react-hook-form';
import { InputFile } from 'cms/components/InputFile';
import { Box } from 'components/Box';
import { Input } from 'components/Templates/Input/Input';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useDeletePartnership,
  usePartnershipById,
  useUpdatePartnership,
} from 'cms/hooks/partnership';
import { yupResolver } from '@hookform/resolvers/yup';
import { partnershipSchema } from 'cms/validationSchemas/partnershipSchemas';

const defaultValues = {
  title: '',
  image: '',
};
export const Partnership = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(partnershipSchema),
  });
  const { data } = usePartnershipById(id);
  const mutate = useDeletePartnership(id);

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
  const onDelete = () => {
    mutate.mutate();
    navigate('/admin/partnership');
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
            <button type="button" onClick={onDelete}>
              delete
            </button>
          </Box>
        </Box>
      </SectionContent>
    </main>
  );
};
