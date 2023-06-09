import { Controller, useFormContext } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import { useCallback } from 'react';

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}
export const InputFile = props => {
  const { name } = props;
  const { control } = useFormContext();
  return (
    <>
      <Controller
        render={({ field: { value, onChange } }) => (
          <Dropzone value={value} onChange={onChange} />
        )}
        name={name}
        control={control}
        defaultValue=""
      />
    </>
  );
};

const Dropzone = ({ value, onChange}) => {
  const onDrop = useCallback(
    droppedFiles => {
      onChange(droppedFiles?.[0], { shouldValidate: true });
    },
    [onChange]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'image/*': ['.png', '.jpeg', '.jpg'],
    },
  });
  // console.log(isValidUrl(value));
  // console.log(value);
  return (
    <div {...getRootProps()}>
      <input {...getInputProps({ onChange })} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
      {value &&
        (isValidUrl(value) ? (
          <img src={value} alt="promo img" width="300px" />
        ) : (
          <img src={URL.createObjectURL(value)} alt="promo img" width="300px" />
        ))}
    </div>
  );
};
