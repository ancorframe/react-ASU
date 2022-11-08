import { Box } from 'components/Box';
import { Register } from 'components/Register/Register';

export const RegisterPage = () => {
  return (
    <Box
      as="main"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gridGap={3}
      pt={5}
    >
      <Register />
    </Box>
  );
};
