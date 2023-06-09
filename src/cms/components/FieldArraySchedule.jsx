
import { useDisciplines } from 'cms/hooks/disciplines';
import { useTeachers } from 'cms/hooks/teachers';
import { Input } from 'components/Templates/Input/Input';
import { InputSelects } from 'components/Templates/InputSelect/InputSelect';
import {
  useFieldArray,
  useFormContext,
} from 'react-hook-form';

export const FieldArraySchedule = props => {
  const { data: teacherData } = useTeachers()
  const { data: disciplinesData } = useDisciplines()
  // console.log(data);
  const { name } = props;
  const { control } = useFormContext();
  const {
    fields,
    append,
    // prepend ,
    remove,
  } = useFieldArray({
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
