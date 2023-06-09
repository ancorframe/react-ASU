import { Controller, useFormContext } from 'react-hook-form';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
export const DatePicker = props => {
  const { name } = props;
  const { control } = useFormContext();
  return (
    <>
      <Controller
        render={({ field }) => (
          <DateTimePicker
            // className="input"
            // placeholderText="Select date"
            onChange={e => field.onChange(e)}
            value={field.value}
            format="dd-MM-y h:mm"
            locale='uk-UK'
          />
        )}
        name={name}
        control={control}
        // defaultValue={new Date()}
      />
    </>
  );
};