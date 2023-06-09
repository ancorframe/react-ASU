import {
  BookAuthor,
  BookTitle,
  Card,
  Description,
  Img,
} from './BookCard.styled';
// import book from '../../image/altBook/book.png';
import { Box } from 'components/Box';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const BookCard = ({ data }) => {
  if (!data) {
    return (
      <>
        <Card href="#">
          <Skeleton width={'100%'} height={'100%'} />
          <Box position="absolute" left="0" bottom="12px" width="100%">
            <Description>
              <BookTitle>
                <Skeleton />
              </BookTitle>
              <BookAuthor>
                <Skeleton />
              </BookAuthor>
            </Description>
          </Box>
        </Card>
      </>
    );
  }
  const {title,image,author,url}=data
  return (
    <>
      <Card href={url} target="_blank">
        <Img src={image} alt="Book" />
        <Box position="absolute" left="0" bottom="12px" width="100%">
          <Description>
            <BookTitle>{title}</BookTitle>
            <BookAuthor>{author}</BookAuthor>
          </Description>
        </Box>
      </Card>
    </>
  );
};
