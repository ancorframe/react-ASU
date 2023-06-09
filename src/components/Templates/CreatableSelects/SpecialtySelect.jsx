import { useSpecialty, useUpdateSpecialty } from 'cms/hooks/specialty';
import { nanoid } from 'nanoid';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select/creatable';

export const SpecialtySelect = ({ name, placeholder = 'Select', ...props }) => {
  const { control } = useFormContext();
  const { data, isLoading } = useSpecialty();
  const update = useUpdateSpecialty(data?.specialty.id);

  const createOption = label => ({
    label,
    value: nanoid(3),
  });

  const handleCreate = inputValue => {
    const data = createOption(inputValue);
    update.mutate(data);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          isClearable
          // isMulti
          options={data?.specialty.data.specialty}
          placeholder={placeholder}
          isDisabled={isLoading}
          isLoading={isLoading}
          onCreateOption={handleCreate}
          {...field}
          {...props}
        />
      )}
    />
  );
};
