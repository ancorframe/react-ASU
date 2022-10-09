import { Phonebook } from './Phonebook/Phonebook';
import { Box } from './Box';

export const App = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gridGap={3}
      pt={5}
    >
      <Phonebook />
    </Box>
  );
};
