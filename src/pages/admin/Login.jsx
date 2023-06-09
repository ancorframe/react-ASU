import { Input } from 'components/Templates/Input/Input';
import { FormProvider, useForm } from 'react-hook-form';
import { useSignIn } from 'cms/hooks/auth';

const defaultValues = {
  email: '',
  password: '',
};
export const Login = () => {
  const methods = useForm({ defaultValues });
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
