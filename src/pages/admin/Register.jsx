import { Input } from 'components/Templates/Input/Input';
import { FormProvider, useForm } from 'react-hook-form';
import { useSignUp } from 'cms/hooks/auth';

const defaultValues = {
  email: '',
  password: '',
  fullName: '',
};
export const Register = () => {
  const methods = useForm({ defaultValues });
  const mutation = useSignUp()
  
  const onSubmit = data => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <>
      <p>register page</p>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <section>
            <label>fullName</label>
            <Input name="fullName" />
          </section>
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
