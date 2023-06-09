import { Grid } from './ListWrap.styled';
import { motion } from 'framer-motion';
export const ListWrap = props => {
  return (
      <Grid
      as={motion.ul}
      initial={{
          opacity: 0,
        }}
        animate={{
            opacity: 1,
            transition: { duration: 0.2 },
        }}
        exit={{
            opacity: 0,
            transition: { duration: 0.15 },
        }}
        {...props}
    />
  );
};
