import { FeedbackIn } from './Feedback/Feedbacked';
import { Box } from './Box';

export const App = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gridGap={5}
      pt={5}
    >
      <FeedbackIn />
    </Box>
  );
};
