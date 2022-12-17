// import { Box } from 'components/Box';
import {
  CardTitle,
  Description,
  Item,
  Link,
  Section,
  SectionTitle,
  Title,
  Wrap,
} from 'components/Desciplines/Desciplines.styled';
import { Footer } from 'components/Footer/Footer';
// import { PageDescription } from 'components/Templates/PageDescription/PageDescription';
// import { PageTitle } from 'components/Templates/PageTitle/PageTitle';

const data = [
  { id: 1, text: 'Логічне програмування' },
  {
    id: 2,
    text: 'Математичне та програмне забезпечення багатопроцесорних обчислювальних систем',
  },
  { id: 3, text: 'Проблемно-орієнтовані обчислювальні комплекси та системи' },
  {
    id: 4,
    text: 'Інструментальні засоби проектування та розробки автоматизованих систем',
  },
  {
    id: 5,
    text: 'Математичне та програмне забезпечення багатопроцесорних обчислювальних систем',
  },
];

export const Disciplines = () => {
  return (
    <>
      <main>
        <SectionTitle>
          <Title>Перелік_дисциплін</Title>
          <Description>
            Кафедра АСУ готує фахівців освітньо-кваліфікаційного рівнів
            “бакалавр” та “магістр” за спеціальностями 122 “Комп’ютерні науки”,
            124 “Системний аналіз”, 126 “Інформаційні системи та технології”
          </Description>
        </SectionTitle>
        <Section>
          <Wrap>
            {data.map(data => (
              <Item key={data.id}>
                <Link >
                  <CardTitle>{data.text}</CardTitle>
                </Link>
              </Item>
            ))}
          </Wrap>
        </Section>
      </main>

      <Footer />
    </>
  );
};
