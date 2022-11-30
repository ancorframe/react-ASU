import { Box } from 'components/Box';
import { Footer } from 'components/Footer/Footer';
import { LoadMoreBtn } from 'components/common/LoadMoreBtn';

import { PageDescription } from 'components/Templates/PageDescription/PageDescription';
import { PageTitle } from 'components/Templates/PageTitle/PageTitle';
import { AllNews } from 'components/News/News';

export const News = () => {
  return (
    <>
      <Box as="main" maxWidth="1248px" m="0 auto"mt="80px" mb="128px">
        <Box  mb="12px">
          <PageTitle>Новини_кафедри</PageTitle>
        </Box>
        <PageDescription>
          Стрічка з останніми публікаціями про культурні заходи та здобутки
          кафедри АСУ
        </PageDescription>
        <AllNews />
        <LoadMoreBtn />
      </Box>
      <Footer />
    </>
  );
};
