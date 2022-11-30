import { Box } from 'components/Box';
import { CardAuthor, CardButton, CardDescription } from './Support.styled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Text } from 'components/Templates/Article/Text';
import { useState } from 'react';

export const Card = ({ Title, Author, Description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Box
        p="8px 20px  8px 8px"
        display="flex"
        gridGap="20px"
        alignItems="center"
      >
        <CardButton type="button" onClick={handleToggle}>
          {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </CardButton>
        <Box>
          <Text>{Title}</Text>
          {isOpen && (
            <>
              <CardAuthor>{Author}</CardAuthor>
              <CardDescription>{Description}</CardDescription>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};
