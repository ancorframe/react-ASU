
import { Hero } from 'components/Home/Hero';
import { News } from 'components/Home/News';
import { Promo } from 'components/Home/Promo';
import { FooterHome } from 'components/Footer/FooterHome';
import { Wrap, Container, PromoContainer } from 'components/Home/Home.styled';

export const Home = () => {
  return (
    <>
      <Wrap
        key={2}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, y: 40, transition: { duration: 0.1 } }}
      >
        <Container>
          <main>
            <Hero />
            <News />
          </main>
          <FooterHome />
        </Container>
        <PromoContainer>
          <Promo />
        </PromoContainer>
      </Wrap>
    </>
  );
};
