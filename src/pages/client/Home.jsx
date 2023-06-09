import { Hero } from 'components/Home/Hero';
import { News } from 'components/Home/News';
import { Promo } from 'components/Home/Promo';
import { FooterHome } from 'components/Footer/FooterHome';
import { Wrap, Container, PromoContainer } from 'components/Home/Home.styled';
import { MotionWrap } from 'components/MotionWrap/MotionWrap';
import { useHome } from 'client/hooks/home';

export const Home = () => {
  useHome();
  return (
    <>
      <MotionWrap key={'home'}>
        <Wrap bg="white">
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
