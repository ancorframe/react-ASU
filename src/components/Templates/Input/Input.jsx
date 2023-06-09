import { InputField } from './Input.styled';
import { Controller, useFormContext } from 'react-hook-form';
export const Input = ({ name, ...props }) => {
      const { control } = useFormContext();
  return (
    <Controller
      render={({ field }) => <InputField {...field} {...props}/>}
      name={name}
      control={control}
      defaultValue=""
    />
  );
};
