import { BookAuthor, BookTitle, Card, Description, Img } from "./BookCard.styled"
import book from '../../image/book.png'



export const BookCard = () => {
    return (
      <>
        <Card >
          <Img src={book} alt="Book" />
          <Description>
            <BookTitle>Atomic Design</BookTitle>
            <BookAuthor>Brad Frost, 2017</BookAuthor>
          </Description>
        </Card>
      </>
    );
}