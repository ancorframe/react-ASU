import { Box } from 'components/Box';
import {
  Cards,
  CardImg,
  CardText,
  ImgContainer,
  TextContainer,
  Time,
} from './Card.styled';
import Skeleton from 'react-loading-skeleton';
export const Card = ({ news, home}) => {
  if (!news) {
    return (
      <>
        <Cards>
          <ImgContainer>
            <Skeleton height={'100%'} width={'100%'} />
          </ImgContainer>
          <TextContainer>
            <Skeleton height={'26px'} width={'100%'} />
          </TextContainer>
        </Cards>
      </>
    );
}
  const { data, id } = news
  const dateObj = new Date(data.date);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  const hours = String(dateObj.getHours()).padStart(2, '0');
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');
  const formattedDate = `${day}.${month}.${year} / ${hours}:${minutes}`;

  return (
    <>
      <Cards to={home ? `/about/news/${id}` : `${id}`}>
        <ImgContainer>
          <CardImg src={data.image} alt="image" loading="lazy" />
          <Box position="absolute" top={3} left={3} p={4} bg="white">
            <Time>{formattedDate}</Time>
          </Box>
        </ImgContainer>
        <TextContainer>
          <CardText>{data.title}</CardText>
        </TextContainer>
      </Cards>
    </>
  );
};
