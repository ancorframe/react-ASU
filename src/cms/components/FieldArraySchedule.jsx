import { ErrorMessage } from '@hookform/error-message';
import { useDisciplines } from 'cms/hooks/disciplines';
import { useTeachers } from 'cms/hooks/teachers';
import { Article } from 'components/Templates/Article/Article';
import { Input } from 'components/Templates/Input/Input';
import { InputSelects } from 'components/Templates/InputSelect/InputSelect';
import { useFieldArray, useFormContext } from 'react-hook-form';

export const FieldArraySchedule = props => {
  const { data: teacherData } = useTeachers();
  const { data: disciplinesData } = useDisciplines();
  const { name } = props;
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });

  return (
    <>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <section>
              <label>time</label>
              <Input name={`${name}.${index}.time`} />
            </section>
            <section>
              <label>tag</label>
              <Input name={`${name}.${index}.tag`} />
            </section>
            {teacherData && (
              <section>
                <label>teacher</label>
                <InputSelects
                  option={teacherData.teachers}
                  name={`${name}.${index}.teacher`}
                />
              </section>
            )}
            {disciplinesData && (
              <section>
                <label>discipline</label>
                <InputSelects
                  option={disciplinesData.disciplines}
                  name={`${name}.${index}.discipline`}
                />
              </section>
            )}
            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <Article color="red">{message}</Article>}
      />
      <button
        type="button"
        onClick={() =>
          append({
            time: '',
            tag: '',
            teacher: '',
            discipline: '',
          })
        }
      >
        append
      </button>
    </>
  );
};
