import { Card, Img, Text, TextContainer } from "./ImgCard.styled"

export const ImgCard = ({src}) => {
    return (
      <>
        
          <Img src={src} />
          <TextContainer>
            <Text>День відкритих дверей - 5 корпус, 114 ауд.</Text>
          </TextContainer>
        
      </>
    );
}