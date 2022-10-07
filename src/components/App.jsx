import { Feedback } from './Feedback/Feedback';
import { Box } from "./Box";

export const App = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gridGap={5}
      pt={5}
    >
      <Feedback/>
    </Box>
  );
};
