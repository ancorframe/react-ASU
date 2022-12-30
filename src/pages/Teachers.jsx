// import { Box } from 'components/Box';
import { CardTeacher } from 'components/Teachers/CardTeacher';
import { Item } from 'components/Teachers/Teachers.styled';

import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { SectionTitle } from 'components/Templates/SectionTitle/SectionTitle';
import { Title } from 'components/Templates/Title/Title';
import { Wrap } from 'components/Templates/Wrap/Wrap';
import { TitleDescription } from 'components/Templates/TitleDescription/TitleDescription';
import { ListWrap } from 'components/Templates/ListWrap/ListWrap';

import img from '../image/teacherstest/Rectangle 19.png';
import img1 from '../image/teacherstest/Rectangle 19-1.png';
import img2 from '../image/teacherstest/Rectangle 19-2.png';
import img3 from '../image/teacherstest/Rectangle 19-3.png';
import img4 from '../image/teacherstest/Rectangle 19-4.png';
import img5 from '../image/teacherstest/Rectangle 19-5.png';
import img6 from '../image/teacherstest/Rectangle 19-6.png';
import img7 from '../image/teacherstest/Rectangle 19-7.png';
import { Footer } from 'components/Footer/Footer';

const data = [
  {
    id: 1,
    fullname: 'Батюк Анатолій Євгенович',
    rank: 'Доцент, кандидат технічних наук',
    src: img,
  },
  {
    id: 2,
    fullname: 'Дубук Василь Іванович',
    rank: 'Доцент, кандидат технічних наук',
    src: img1,
  },
  {
    id: 3,
    fullname: 'Бегота Радислав Васильович',
    rank: 'Старший викладач',
    src: img2,
  },
  {
    id: 4,
    fullname: 'Зербіно Дмитро Дмитрович',
    rank: 'Доцент, кандидат технічних наук',
    src: img3,
  },
  {
    id: 5,
    fullname: 'Павлюк Олена Миколаївна',
    rank: 'Кандидат технічних наук, старший викладач',
    src: img4,
  },
  {
    id: 6,
    fullname: 'Скорохода Олекса Володимирович',
    rank: 'Кандидат технічних наук, асистент',
    src: img5,
  },
  {
    id: 7,
    fullname: 'Стрямець Сергій Петрович',
    rank: 'Доцент, ст. наук. співр., кандидат технічних наук',
    src: img6,
  },
  {
    id: 8,
    fullname: 'Шпак Зореслава Ярославівна',
    rank: 'Доцент, кандидат технічних наук',
    src: img7,
  },
];

export const Teachers = () => {
  return (
    <>
      <main>
        <SectionTitle>
          <Wrap>
            <Title variant="h1" textAlign={[null, 'center']}>
              Викладацький_склад
            </Title>
            <TitleDescription textAlign={[null, 'center']}>
              Історія кафедри автоматизованих систем управління
            </TitleDescription>
          </Wrap>
        </SectionTitle>
        <SectionContent>
          <Wrap>
            <ListWrap gridTemplateColumns="repeat(auto-fit, minmax(360px, 1fr))">
              {data.map(({ id, fullname, rank, src }) => (
                <Item key={id}>
                  <CardTeacher
                    to={`${id}`}
                    src={src}
                    fullname={fullname}
                    rank={rank}
                  />
                </Item>
              ))}
            </ListWrap>
          </Wrap>
        </SectionContent>
      </main>
      <Footer />
    </>
  );
};
