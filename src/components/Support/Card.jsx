// import { Box } from 'components/Box';
import {
  CardAuthor,
  CardButton,
  CardDescription,
  CardWrap,
  CardTitle,
  CardContainer,
  Icon,
} from './Support.styled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
// import { Text } from 'components/Templates/Article/Text';
import { useState } from 'react';

export const Card = ({ ...props }) => {
  const {title,content,author,source}=props
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <CardWrap>
        <CardButton type="button" onClick={handleToggle} open={isOpen}>
          {/* {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />} */}
          <Icon>
            <ArrowDropDownIcon />
          </Icon>
        </CardButton>
        <CardContainer>
          {!isOpen && <CardTitle close>{title}</CardTitle>}
          {isOpen && (
            <>
              <CardTitle>{title}</CardTitle>
              <CardAuthor>{author}</CardAuthor>
              <CardDescription>{source}</CardDescription>
              <CardDescription>{content}</CardDescription>
            </>
          )}
        </CardContainer>
      </CardWrap>
    </>
  );
};
