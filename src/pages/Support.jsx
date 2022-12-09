import { AditionalInfo } from 'components/AditionalInfo/AditionalInfo';
import { Box } from 'components/Box';
import { Footer } from 'components/Footer/Footer';
import { Text } from 'components/Templates/Article/Text';
import { ChapterTitle } from 'components/Templates/ChapterTitle/ChapterTitle';
import { PageTitle } from 'components/Templates/PageTitle/PageTitle';
import { Card } from 'components/Support/Card';

export const Support = () => {
  return (
    <>
      <Box as="main" m="0 auto" mt="80px" maxWidth="1248px" zIndex="1">
        <Box mb="40px">
          <PageTitle>Навчально-методичне_забезпечення</PageTitle>
        </Box>
        <Box maxWidth="960px" p="48px" m="0 auto" mb="128px">
          <Box mb="64px">
            <ChapterTitle border>Загальна інформація</ChapterTitle>
            <Text margin>
              Від часу створення кафедри АСУ навчально-методична робота завжди
              була і залишається одним із важливих напрямів її діяльності,
              оскільки організація інформаційного та методичного забезпечення
              безпосередньо визначає рівень і якість підготовки спеціалістів. На
              кафедрі регулярно проводилися засідання методичного семінару, на
              яких розглядалися актуальні проблеми вдосконалення навчального
              процесу для студентів різних форм навчання. Особливу увагу завжди
              звертали на розроблення навчальних планів і робочих програм
              навчальних дисциплін, склад яких періодично змінювався відповідно
              до вимог часу та науково-технічного прогресу.
            </Text>
            <Text>
              Викладачами кафедри підготовано, написано та опубліковано декілька
              сотень методичних розробок до навчальних дисциплін, серед яких
              підручники й навчальні посібники, зокрема з грифом Міністерства
              освіти і науки України, конспекти лекцій, термінологічні словники,
              методичні матеріали до поглибленого вивчення окремих розділів
              дисциплін, методичні вказівки до виконання дипломного проекту,
              магістерських та бакалаврських кваліфікаційних робіт, програми
              навчальних і технологічних практик, методичні вказівки до курсових
              робіт і проектів, вказівки та інструкції до лабораторних робіт,
              методичні матеріали та завдання до практичних занять і самостійної
              роботи студентів та багато іншого.
            </Text>
          </Box>
          <Box mb="64px">
            <ChapterTitle>
              Підручники і навчальні посібники викладачів кафедри АСУ
            </ChapterTitle>
            <Box as="ul" display="flex" flexDirection="column" gridGap="12px">
              <li>
                <Card
                  Title="Комбінаторні моделі та методи оптимізації в задачах інформатики"
                  Author="Lorem ipsum"
                  Description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio impedit enim dolores, eum, amet et dolorum omnis accusantium, quidem nulla non ad maiores minus quisquam sequi reiciendis! Deserunt, tempore repellendus."
                />
              </li>
              <li>
                <Card
                  Title="Схемотехніка логічних та послідовнісних схем"
                  Author="Лукащук Л. О."
                  Description="Навч. посібник. – К.: НМК ВО, 1992. – 88 с. Гриф МОН України.
У посібнику подано основні поняття з алгебри логіки, детально розглянуто методи мінімізації логічних функцій, перегонові завади, способи їх виявлення та компенсації. Описано способи синтезу послідовнісних схем, зокрема тригерів, регістрів, лічильників та інтерфейсів. На прикладі розробки інтерфейсу для мікропроцесора показано всі етапи такого синтезу. Призначено для студентів Інституту компютерних наук та інформаційних технологій та інженернотехнічних працівників відповідного профілю."
                />
              </li>
              <li>
                <Card
                  Title="Елементи теорії впорядкованих комбінаторних наборів"
                  Author="Lorem ipsum"
                  Description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio impedit enim dolores, eum, amet et dolorum omnis accusantium, quidem nulla non ad maiores minus quisquam sequi reiciendis! Deserunt, tempore repellendus."
                />
              </li>
            </Box>
          </Box>
          <AditionalInfo />
        </Box>
      </Box>
      <Footer />
    </>
  );
};
