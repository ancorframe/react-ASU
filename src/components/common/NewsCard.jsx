import { Box } from 'components/Box';
import { Card, CardImg, CardText } from './NewsCard.styled';

export const NewsCard = ({ data ,to}) => {
  return (
    <>
      <Card to={to}>
        <CardImg src={data.img} />
        <Box width='100%' mb='24px' >
        <CardText>{data.text}</CardText></Box>
      </Card>
    </>
  );
};
 