import { Box } from "components/Box";
import { CardTitle, Item, Link } from "components/Desciplines/Desciplines.styled";
import { Footer } from "components/Footer/Footer";
import { PageDescription } from "components/Templates/PageDescription/PageDescription";
import { PageTitle } from "components/Templates/PageTitle/PageTitle"

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
        <Box as="main" m="0 auto" mt="80px" maxWidth="1248px" mb="128px">
          <Box mb="12px">
            <PageTitle>Перелік_дисциплін</PageTitle>
          </Box>
          <PageDescription>
            Кафедра АСУ готує фахівців освітньо-кваліфікаційного рівнів
            “бакалавр” та “магістр” за спеціальностями 122 “Комп’ютерні науки”,
            124 “Системний аналіз”, 126 “Інформаційні системи та технології”
          </PageDescription>
          <Box>
            <Box as="ul" display="flex" gridGap="24px" flexWrap="wrap">
              {data.map(data => (
                <Item key={data.id}>
                  <Link display="flex" minHeight="100px" p="0 24px">
                    <CardTitle>{data.text}</CardTitle>
                  </Link>
                </Item>
              ))}
            </Box>
          </Box>
        </Box>
        <Footer />
      </>
    );
}