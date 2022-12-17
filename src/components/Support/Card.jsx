// import { Box } from 'components/Box';
import {
  CardAuthor,
  CardButton,
  CardDescription,
  CardWrap,
  CardTitle,
  CardContainer,
} from './Support.styled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
// import { Text } from 'components/Templates/Article/Text';
import { useState } from 'react';

export const Card = ({ Title, Author, Description ,Book}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <CardWrap>
        <CardButton type="button" onClick={handleToggle}>
          {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </CardButton>
        <CardContainer>
          {!isOpen && <CardTitle close>{Title}</CardTitle>}
          {isOpen && (
            <>
              <CardTitle>{Title}</CardTitle>
              <CardAuthor>{Author}</CardAuthor>
              <CardDescription>{Book}</CardDescription>
              <CardDescription>{Description}</CardDescription>
            </>
          )}
        </CardContainer>
      </CardWrap>
    </>
  );
};
