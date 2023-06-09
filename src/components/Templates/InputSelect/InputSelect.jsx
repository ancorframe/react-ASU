

import { InputSelect } from 'components/Schedule/Schedule.styled';
import { Controller, useFormContext } from 'react-hook-form';
export const InputSelects = ({ name,option,placeholder='Select', ...props }) => {

    const { control } = useFormContext();
    console.log(option);
  return (
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
      //   defaultValue={defaultValue ? `${defaultValue}` : ''}
    />
  );
};
