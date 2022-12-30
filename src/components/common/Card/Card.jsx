import { Box } from 'components/Box';
import {
  Cards,
  CardImg,
  CardText,
  ImgContainer,
  TextContainer,
  Time,
} from './Card.styled';

export const Card = ({ data, to }) => {
  return (
    <>
      <Cards to={to}>
        <ImgContainer>
          <CardImg src={data.img} />
          <Box position="absolute" top={3} left={3} p={4} bg="white">
            <Time>{data.time ? data.time : '--.--.20-- / --:--'}</Time>
          </Box>
        </ImgContainer>
        <TextContainer>
          <CardText>{data.text}</CardText>
        </TextContainer>
      </Cards>
    </>
  );
};
