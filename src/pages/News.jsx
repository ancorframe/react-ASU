import { Box } from "components/Box"
import { Footer } from "components/common/Footer";
import { LoadMoreBtn } from "components/common/LoadMoreBtn";

import { PageDescription } from "components/common/PageDescription"
import { TitlePage } from "components/common/TitlePage"
import { AllNews } from "components/News/News";




export const News = ()=> {
    return (
      <>
        <Box as="main" maxWidth="1248px" m='0 auto' mb='128px'>
          <Box mt="80px" mb="12px">
            <TitlePage>Новини_кафедри</TitlePage>
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
}