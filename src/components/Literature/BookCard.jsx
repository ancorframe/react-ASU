import { BookAuthor, BookTitle, Card, Description, Img } from "./BookCard.styled"
import book from '../../image/altBook/book.png'
import { Box } from "components/Box";



export const BookCard = ({to, img=book, title,author}) => {
    return (
      <>
        <Card href={to} target="_blank">
          <Img src={img} alt="Book" />
          <Box position="absolute" left="0" bottom="12px" width="100%">
            <Description>
              <BookTitle>{title}</BookTitle>
              <BookAuthor>{author}</BookAuthor>
            </Description>
          </Box>
        </Card>
      </>
    );
}