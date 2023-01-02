import { Footer } from 'components/Footer/Footer';
import { About } from 'components/Inroduction/About';
import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { SectionTitle } from 'components/Templates/SectionTitle/SectionTitle';
import { Title } from 'components/Templates/Title/Title';
import { Wrap } from 'components/Templates/Wrap/Wrap';
import { motion } from 'framer-motion';

export const Introduction = () => {
  return (
    <motion.div
      key={1}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, y: 40, transition: { duration: 0.1 } }}>
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
    </motion.div>
  );
};
