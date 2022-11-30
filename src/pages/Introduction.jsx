import { Box } from 'components/Box';
import { Footer } from 'components/Footer/Footer';
import { PageTitle } from 'components/Templates/PageTitle/PageTitle';
import { About } from 'components/Inroduction/About';
// import { Title } from 'components/Inroduction/Inroduction.styled';

export const Introduction = () => {
  return (
    <>
      <Box mt="80px" mb="40px">
        <PageTitle>Вступникам</PageTitle>
      </Box>
      <About />
      <Footer />
    </>
  );
};
