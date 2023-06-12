import { ErrorMessage } from '@hookform/error-message';
import { InputSelect } from 'components/Schedule/Schedule.styled';
import { Controller, useFormContext } from 'react-hook-form';
import { Article } from '../Article/Article';
export const InputSelects = ({
  name,
  option,
  placeholder = 'Select',
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        render={({ field }) => (
          <InputSelect {...field}>
            <option value="" disabled hidden>
              {placeholder}
            </option>
            {option.map(({ id, data }) => (
              <option key={id} value={id}>
                {data?.fullName}
                {data?.disciplines}
              </option>
            ))}
          </InputSelect>
        )}
        name={name}
        control={control}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <Article color="red">{message}</Article>}
      />
    </>
  );
};
