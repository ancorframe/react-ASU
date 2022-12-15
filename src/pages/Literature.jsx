import { Box } from 'components/Box';
import { Footer } from 'components/Footer/Footer';
// import { PageDescription } from 'components/Templates/PageDescription/PageDescription';
// import { PageTitle } from 'components/Templates/PageTitle/PageTitle';
import { BookCard } from 'components/Literature/BookCard';
import { SectionTitle, Title, TitleDescription } from 'components/Literature/Literaturte.styled';

export const Literature = () => {
  return (
    <>
      <main>
        <SectionTitle>
          <Title>Корисна_література</Title>
          <TitleDescription>
            Набір літератури та ресурсів. Тут є все, що тобі пригодиться у
            навчанні 😉
          </TitleDescription>
        </SectionTitle>

        <Box
          display="flex"
          maxWidth="1260px"
          gridGap="24px"
          flexWrap="wrap"
          m="0 auto"
          mb="128px"
        >
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </Box>
      </main>
      <Footer />
    </>
  );
};
