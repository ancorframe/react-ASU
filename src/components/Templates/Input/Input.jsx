import { InputField } from './Input.styled';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Article } from '../Article/Article';

export const Input = ({ name, ...props }) => {
      const {
        control,
        formState: { errors },
      } = useFormContext();
  return (
    <>
      <Controller
        render={({ field }) => <InputField {...field} {...props} />}
        name={name}
        control={control}
        defaultValue=""
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <Article color='red'>{message}</Article>}
      />
    </>
  );
};
