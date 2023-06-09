import { useSubgroup, useUpdateSubgroup } from 'cms/hooks/subgroup';
import { nanoid } from 'nanoid';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select/creatable';

export const GroupSelect = ({ name, placeholder = 'Select', ...props }) => {
  const { control } = useFormContext();
  const { data, isLoading } = useSubgroup();
  const update = useUpdateSubgroup(data?.subgroup.id);

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
          options={data?.subgroup.data.subgroup}
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
