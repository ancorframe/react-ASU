import { CardImg, CardText } from "./News.styled";



export const NewsCard = ({ data }) => {
  return (
    <>
      <CardImg src={data.img} />
      <CardText>{data.text}</CardText>
    </>
  );
};