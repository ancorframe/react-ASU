import { ErrorMessage } from '@hookform/error-message';
import { Article } from 'components/Templates/Article/Article';
import { Input } from 'components/Templates/Input/Input';
import { useFieldArray, useFormContext } from 'react-hook-form';

export const FieldArray = props => {
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
          append({ title: '', author: '', source: '', content: '' })
        }
      >
        append
      </button>
    </>
  );
};
