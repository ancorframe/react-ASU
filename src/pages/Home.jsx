import { Box } from 'components/Box';
import { Hero } from 'components/Home/Hero';
import { News } from 'components/Home/News';
import { Promo } from 'components/Home/Promo';
import { FooterHome } from 'components/Footer/FooterHome';
import { Wrap, Container, PromoContainer } from 'components/Home/Home.styled';

export const Home = () => {
  return (
    <>
      <Wrap>
        <Container>
          <Box as="main">
            <Hero />
            <News />
          </Box>
          <FooterHome />
        </Container>
        <PromoContainer>
          <Promo />
        </PromoContainer>
      </Wrap>
    </>
  );
};
