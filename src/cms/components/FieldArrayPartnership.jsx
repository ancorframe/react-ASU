import { InputField } from 'components/Templates/Input/Input.styled';
import {
  EditorState,
  // convertToRaw, ContentState
} from 'draft-js';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { InputFile } from './InputFile';
import { TextEditor } from './TextEditor';

export const FieldArrayPartnership = props => {
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
            <Controller
              render={({ field }) => <InputField {...field} />}
              name={`${name}.${index}.title`}
              control={control}
            />
            <Controller
              render={({ field }) => <InputField {...field} />}
              name={`${name}.${index}.url`}
              control={control}
            />
            <InputFile name={`${name}.${index}.image`} />
            <Controller
              render={({ field }) => <InputField {...field} />}
              name={`${name}.${index}.logo`}
              control={control}
            />
            <TextEditor name={`${name}.${index}.content`} />
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
            title: '',
            url: '',
            image: '',
            logo: '',
            content: EditorState.createEmpty(),
          })
        }
      >
        append
      </button>
    </>
  );
};
