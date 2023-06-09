import { Box } from 'components/Box';
import { InputSelect, InputWrap, Label } from './Schedule.styled';

export const InputSelects = ({
  placeholder,
  option,
  icon,
  name,
  label,
  state,
  handleChange,
  disabled,
}) => {
  return (
    <InputWrap>
      <Label htmlFor={name}>{label}</Label>
      <Box position="relative">
        <InputSelect
          name={name}
          value={state}
          onChange={e => handleChange(e)}
          disabled={disabled}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {option.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </InputSelect>
        <Box position="absolute" right="16px" top="16px">
          {icon}
        </Box>
      </Box>
    </InputWrap>
  );
};
