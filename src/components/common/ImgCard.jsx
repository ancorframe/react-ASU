import {  Img, Text, TextContainer } from "./ImgCard.styled"

export const ImgCard = ({src , text}) => {
    return (
      <>
        
          <Img src={src} />
          <TextContainer>
          <Text>{ text}</Text>
          </TextContainer>
        
      </>
    );
}