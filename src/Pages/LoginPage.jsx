import { Box } from 'components/Box';
import { Login } from 'components/Login/Login';

export const LoginPage = () => {
  return (
    <Box
      as="main"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gridGap={3}
      pt={5}
    >
      <Login />
    </Box>
  );
};
