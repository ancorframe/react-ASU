import { Box } from 'components/Box';
import { SingUp } from 'components/SingUp/SingUp';

export const SingUpPage = () => {
  return (
    <Box
      as="main"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gridGap={3}
      pt={5}
    >
      <SingUp />
    </Box>
  );
};
