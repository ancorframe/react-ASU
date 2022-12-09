import { Box } from 'components/Box';
import { Footer } from 'components/Footer/Footer';
import { PageDescription } from 'components/Templates/PageDescription/PageDescription';
import { PageTitle } from 'components/Templates/PageTitle/PageTitle';
import { BookCard } from 'components/Literature/BookCard';

export const Literature = () => {
  return (
    <>
      <Box mt="80px" mb="12px" >
        <PageTitle>Корисна_література</PageTitle>
      </Box>
      <PageDescription>
        Набір літератури та ресурсів. Тут є все, що тобі пригодиться у навчанні
        😉
      </PageDescription>
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
      <Footer />
    </>
  );
};
