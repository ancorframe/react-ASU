import { useCourse, useUpdateCourse } from 'cms/hooks/course';
import { nanoid } from 'nanoid';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select/creatable';
import { ErrorMessage } from '@hookform/error-message';
import { Article } from '../Article/Article';

export const CourseSelect = ({ name, placeholder = 'Select', ...props }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { data, isLoading } = useCourse();
  const update = useUpdateCourse(data?.course.id);

  const createOption = label => ({
    label,
    value: nanoid(3),
  });

  const handleCreate = inputValue => {
    const data = createOption(inputValue);
    update.mutate(data);
  };

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            isClearable
            // isMulti
            options={data?.course.data.course}
            placeholder={placeholder}
            isDisabled={isLoading}
            isLoading={isLoading}
            onCreateOption={handleCreate}
            {...field}
            {...props}
          />
        )}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <Article color="red">{message}</Article>}
      />
    </>
  );
};
