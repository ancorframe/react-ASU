import { Box } from 'components/Box';
import { TitleAligh, LinkGraduates, LinkAbout } from './Hero.styled';
import { Title } from 'components/Templates/Title/Title';
import { Article } from 'components/Templates/Article/Article';

export const Hero = () => {
  return (
    <Box as="section" pb={[16, 12]} pt={[null, 10]}>
      <Title variant="h3" mb={[2, 4]} opacity="0.1">
        КАФЕДРА
      </Title>
      <Title variant="h1" mb={[4, 7]}>
        <TitleAligh>Автоматизованих</TitleAligh>
        <TitleAligh>Систем Управління_</TitleAligh>
      </Title>
      <Article mb={[8, 16]} textAlign="unset">
        Cтворена в 1974 році на основі групи викладачів кафедри
        «Інформаційно-вимірювальна техніка» та розміщена на 8-му поверсі 5-го
        навчального корпусу.
      </Article>
      <Box display="flex" gridGap="24px">
        <LinkGraduates to="/introduction">Вступникам</LinkGraduates>
        <LinkAbout to="/about/history">Про_нас</LinkAbout>
      </Box>
    </Box>
  );
};
