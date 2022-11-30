import { Box } from 'components/Box';
import { Footer } from 'components/common/Footer';
import { TitlePage } from 'components/common/TitlePage';
import { About } from 'components/Inroduction/About';
// import { Title } from 'components/Inroduction/Inroduction.styled';


export const Introduction = () => {
  return (
    <>
      <Box mt='80px' mb='40px'>
        <TitlePage>Вступникам</TitlePage>
      </Box>
      <About />
      <Footer />
    </>
  );
};
