import { Box } from "components/Box";
import {
  SecondTitle,
  Title,
  TitleAligh,
  Text,
  LinkGraduates,
  LinkAbout,
} from './Hero.styled';


export const Hero = () => {
    return (
      <Box as="section" mt="32px" mb="80px" maxWidth="824px">
        <SecondTitle>КАФЕДРА</SecondTitle>
        <Title>
          <TitleAligh>Автоматизованих</TitleAligh>
          <TitleAligh>Систем Управління_</TitleAligh>
        </Title>
        <Text>
          Cтворена в 1974 році на основі групи викладачів кафедри
          «Інформаційно-вимірювальна техніка» та розміщена на 8-му поверсі 5-го
          навчального корпусу.
        </Text>
        <Box display="flex" gridGap="24px">
          <LinkGraduates to="Introduction">Вступникам</LinkGraduates>
          <LinkAbout to="#">Про_нас</LinkAbout>
        </Box>
      </Box>
    );
}