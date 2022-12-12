// import { Box } from 'components/Box';
import { Footer } from 'components/Footer/Footer';
// import { PageTitle } from 'components/Templates/PageTitle/PageTitle';
import { About } from 'components/Inroduction/About';
import { Title, TitleWrap } from 'components/Inroduction/Inroduction.styled';
// import { Title } from 'components/Inroduction/Inroduction.styled';

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
