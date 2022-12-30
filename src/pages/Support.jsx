import { AditionalInfo } from 'components/AditionalInfo/AditionalInfo';
import { Box } from 'components/Box';
import { Footer } from 'components/Footer/Footer';
import { Card } from 'components/Support/Card';
import {
  Container,
  WrapList,
  WrapItem,
} from 'components/Support/Support.styled';

import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { SectionTitle } from 'components/Templates/SectionTitle/SectionTitle';
import { Title } from 'components/Templates/Title/Title';
import { Wrap } from 'components/Templates/Wrap/Wrap';
import { Article } from 'components/Templates/Article/Article';

const data = [
  {
    id: 1,
    title: 'Комбінаторні моделі та методи оптимізації в задачах інформатики',
    author: 'Різник В. В.',
    book: 'Навч. посібник. – К.: НМК ВО, 1991. – 72 с. Гриф МОН України.',
    description:
      ' Відзначений премією Міносвіти УРСР на Всеукраїнському конкурсі навчально-методичних видань за 1991 р.',
  },
  {
    id: 2,
    title: 'Схемотехніка логічних та послідовнісних схем',
    author: 'Лукащук Л. О.',
    book: 'Навч. посібник. – К.: НМК ВО, 1992. – 88 с. Гриф МОН України.',
    description:
      'У посібнику подано основні поняття з алгебри логіки, детально розглянуто методи мінімізації логічних функцій, перегонові завади, способи їх виявлення та компенсації. Описано способи синтезу послідовнісних схем, зокрема тригерів, регістрів, лічильників та інтерфейсів. На прикладі розробки інтерфейсу для мікропроцесора показано всі етапи такого синтезу. Призначено для студентів Інституту компютерних наук та інформаційних технологій та інженернотехнічних працівників відповідного профілю.',
  },

  {
    id: 3,
    title: 'Елементи теорії впорядкованих комбінаторних наборів',
    author: 'Lorem ipsum',
    book: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    description:
      ' Optio impedit enim dolores, eum, amet et dolorum omnis accusantium, quidem nulla non ad maiores minus quisquam sequi reiciendis! Deserunt, tempore repellendus.',
  },
];

export const Support = () => {
  return (
    <>
      <main>
        <SectionTitle>
          <Wrap>
            <Title variant="h1" textAlign={[null, 'center']}>
              Навчально-методичне_<Box display="inline-block">забезпечення</Box>
            </Title>
          </Wrap>
        </SectionTitle>

        <SectionContent>
          <Container>
            <Box mb={[16, 12]}>
              <Title variant="h2" pb={[2, 6]} mb={8} borderBottom={'titles'}>
                Загальна інформація
              </Title>
              <Article mb={[9, 10]}>
                Від часу створення кафедри АСУ навчально-методична робота завжди
                була і залишається одним із важливих напрямів її діяльності,
                оскільки організація інформаційного та методичного забезпечення
                безпосередньо визначає рівень і якість підготовки спеціалістів.
                На кафедрі регулярно проводилися засідання методичного семінару,
                на яких розглядалися актуальні проблеми вдосконалення
                навчального процесу для студентів різних форм навчання. Особливу
                увагу завжди звертали на розроблення навчальних планів і робочих
                програм навчальних дисциплін, склад яких періодично змінювався
                відповідно до вимог часу та науково-технічного прогресу.
              </Article>
              <Article>
                Викладачами кафедри підготовано, написано та опубліковано
                декілька сотень методичних розробок до навчальних дисциплін,
                серед яких підручники й навчальні посібники, зокрема з грифом
                Міністерства освіти і науки України, конспекти лекцій,
                термінологічні словники, методичні матеріали до поглибленого
                вивчення окремих розділів дисциплін, методичні вказівки до
                виконання дипломного проекту, магістерських та бакалаврських
                кваліфікаційних робіт, програми навчальних і технологічних
                практик, методичні вказівки до курсових робіт і проектів,
                вказівки та інструкції до лабораторних робіт, методичні
                матеріали та завдання до практичних занять і самостійної роботи
                студентів та багато іншого.
              </Article>
            </Box>
            <Box mb={[16, 12]}>
              <Title variant="h2" mb={[9, 10]}>
                Підручники і навчальні посібники викладачів кафедри АСУ
              </Title>
              <WrapList>
                {data.map(({ id, title, author, description, book }) => {
                  return (
                    <WrapItem key={id}>
                      <Card
                        Title={title}
                        Author={author}
                        Description={description}
                        Book={book}
                      />
                    </WrapItem>
                  );
                })}
              </WrapList>
            </Box>
            <AditionalInfo />
          </Container>
        </SectionContent>
      </main>
      <Footer />
    </>
  );
};
