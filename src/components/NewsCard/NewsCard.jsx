// import { Box } from 'components/Box';
import {
  Card,
  CardImg,
  CardText,
  ImgContainer,
  TextContainer,
} from './NewsCard.styled';

export const NewsCard = ({ data, to }) => {
  return (
    <>
      <Card to={to}>
        <ImgContainer>
          <CardImg src={data.img} />
        </ImgContainer>

        <TextContainer>
          <CardText>{data.text}</CardText>
        </TextContainer>
      </Card>
    </>
  );
};
