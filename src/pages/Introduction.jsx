import { Footer } from 'components/Footer/Footer';
import { About } from 'components/Inroduction/About';
import { Title, TitleWrap } from 'components/Inroduction/Inroduction.styled';


export const Introduction = () => {
  return (
    <>
      <main>
        <TitleWrap>
          <Title>Вступникам</Title>
        </TitleWrap>
        <About />
      </main>
      <Footer />
    </>
  );
};
