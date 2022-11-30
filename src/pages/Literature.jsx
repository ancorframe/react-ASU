import { Box } from "components/Box"
import { Footer } from "components/common/Footer"
import { PageDescription } from "components/common/PageDescription";
import { TitlePage } from "components/common/TitlePage"
import { BookCard } from "Literature/BookCard";


export const Literature = () => {
    return (
      <>
        <Box mt="80px" mb="12px">
          <TitlePage>Корисна_література</TitlePage>
        </Box>
        <PageDescription>
          Набір літератури та ресурсів. Тут є все, що тобі пригодиться у
          навчанні 😉
        </PageDescription>
        <Box display="flex" maxWidth="1260px" gridGap="24px" flexWrap='wrap' m='0 auto' mb='128px'>
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </Box>
        <Footer />
      </>
    );
}