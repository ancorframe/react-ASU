import { Input } from 'components/Templates/Input/Input';
import { FormProvider, useForm } from 'react-hook-form';
import { useSignIn } from 'cms/hooks/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from 'cms/validationSchemas/loginSchemas';

const defaultValues = {
  email: '',
  password: '',
};
export const Login = () => {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(loginSchema),
  });
  const mutation = useSignIn();


  const onSubmit = data => {
    mutation.mutate(data);
  };

  return (
    <>
      <p>login page</p>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <section>
            <label>email</label>
            <Input name="email" />
          </section>
          <section>
            <label>password</label>
            <Input name="password" type="password" />
          </section>
          <button type="submit">submit</button>
        </form>
      </FormProvider>
    </>
  );
};
