import { Controller, useFormContext } from 'react-hook-form';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { ErrorMessage } from '@hookform/error-message';
import { Article } from 'components/Templates/Article/Article';
export const DatePicker = props => {
  const { name } = props;
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        render={({ field }) => (
          <DateTimePicker
            onChange={e => field.onChange(e)}
            value={field.value}
            format="dd-MM-y h:mm"
            locale="uk-UK"
          />
        )}
        name={name}
        control={control}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <Article color="red">{message}</Article>}
      />
    </>
  );
};