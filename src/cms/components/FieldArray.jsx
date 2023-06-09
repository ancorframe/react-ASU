import { Input } from 'components/Templates/Input/Input';
// import { InputField } from 'components/Templates/Input/Input.styled';
import {
  // Controller,
  useFieldArray, useFormContext
} from 'react-hook-form';

export const FieldArray = props => {
  const { name } = props;
  const { control } = useFormContext();
    const { fields, append,
        // prepend ,
        remove } = useFieldArray({
    control,
    name: name,
  });
  return (
    <>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <section>
              <label>title</label>
              <Input name={`${name}.${index}.title`} />
            </section>
            <section>
              <label>author</label>
              <Input name={`${name}.${index}.author`} />
            </section>
            <section>
              <label>source</label>
              <Input name={`${name}.${index}.source`} />
            </section>
            <section>
              <label>content</label>
              <Input name={`${name}.${index}.content`} />
            </section>
            {/* <Controller
              render={({ field }) => <InputField {...field} />}
              name={`${name}.${index}.title`}
              control={control}
            /> */}
            {/* <Controller
              render={({ field }) => <InputField {...field} />}
              name={`${name}.${index}.author`}
              control={control}
            /> */}
            {/* <Controller
              render={({ field }) => <InputField {...field} />}
              name={`${name}.${index}.source`}
              control={control}
            /> */}
            {/* <Controller
              render={({ field }) => <InputField {...field} />}
              name={`${name}.${index}.content`}
              control={control}
            /> */}
            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() =>
          append({ title: '', author: '', source: '', content: '' })
        }
      >
        append
      </button>
    </>
  );
};
