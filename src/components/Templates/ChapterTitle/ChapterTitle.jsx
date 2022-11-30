import { Title } from "./ChapterTitle.styled"


export const ChapterTitle = ({ children , border}) => {
  return (
    <>
      <Title border={border}>{children}</Title>
    </>
  );
};