import { Hero } from 'components/Home/Hero';
import { News } from 'components/Home/News';
import { Promo } from 'components/Home/Promo';
import { FooterHome } from 'components/Footer/FooterHome';
import { Wrap, Container, PromoContainer } from 'components/Home/Home.styled';
import { MotionWrap } from 'components/MotionWrap/MotionWrap';

export const Home = () => {
  return (
    <>
      <MotionWrap key={2}>
        <Wrap>
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
      </MotionWrap>
    </>
  );
};
