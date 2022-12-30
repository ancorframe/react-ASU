import { Footer } from 'components/Footer/Footer';
import { About } from 'components/Inroduction/About';
import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { SectionTitle } from 'components/Templates/SectionTitle/SectionTitle';
import { Title } from 'components/Templates/Title/Title';
import { Wrap } from 'components/Templates/Wrap/Wrap';

export const Introduction = () => {
  return (
    <>
      <main>
        <SectionTitle>
          <Wrap>
            <Title variant="h1" textAlign={[null, 'center']}>
              Вступникам
            </Title>
          </Wrap>
        </SectionTitle>
        <SectionContent>
          <About />
        </SectionContent>
      </main>
      <Footer />
    </>
  );
};
