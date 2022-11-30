import { Box } from 'components/Box';
import { Hero } from 'components/Home/Hero';
import { News } from 'components/Home/News';
import { Promo } from 'components/Home/Promo';
import { FooterHome } from 'components/Footer/FooterHome';

export const Home = () => {
  return (
    <>
      <Box maxWidth="1440px" gridGap="24px" display="flex" m="0 auto">
        <Box pl="96px" maxWidth="824px">
          <Box as="main" mb="64px">
            <Hero />
            <News />
          </Box>
          <FooterHome />
        </Box>
        <Box pr="24px">
          <Promo />
        </Box>
      </Box>
    </>
  );
};
