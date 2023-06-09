import { InputFile } from 'cms/components/InputFile';
import { useHome, useUpdateHome } from 'cms/hooks/home';
import { Box } from 'components/Box';
import { Input } from 'components/Templates/Input/Input';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const initialState = {
  description: '',
  image: '',
  promoUrl: '',
  promoAlt:''
};
export const Home = () => {
  const methods = useForm({ initialState });
  const { data } = useHome();

  const updateHome = useUpdateHome(data?._id);

  useEffect(() => {
    if (data) {
      methods.reset(data.home.data);
    }
  }, [data, methods]);

  const onSubmit = data => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    updateHome.mutate(formData);
  };

  return (
    <Box maxWidth="960px" m="0 auto" boxShadow={'regular'}>
      <Box p={[null, 11]} px={[6, null]} py={[8, null]}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <section>
              <label>description</label>
              <Input name="description" />
            </section>
            <section>
              <label>promo image</label>
              <InputFile name="image" />
            </section>
            <section>
              <label>promo alt</label>
              <Input name="promoAlt" />
            </section>
            <section>
              <label>promo url</label>
              <Input name="promoUrl" type="url" />
            </section>
            <button type="submit">submit</button>
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
};
