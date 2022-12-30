import { Footer } from 'components/Footer/Footer';

import { Card } from 'components/common/Card/Card';
import test from '../image/newstest/Rectangle.png';

import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { SectionTitle } from 'components/Templates/SectionTitle/SectionTitle';
import { Title } from 'components/Templates/Title/Title';
import { Wrap } from 'components/Templates/Wrap/Wrap';
import { TitleDescription } from 'components/Templates/TitleDescription/TitleDescription';
import { ListWrap } from 'components/Templates/ListWrap/ListWrap';
import { Box } from 'components/Box';
import { LoadMore } from 'components/common/LoadMore/LoadMore';

const dataNews = [
  {
    id: 1,
    img: test,
    text: 'test texttest texttest texttest texttest texttest texttest text',
  },
  { id: 2, img: test, text: 'test text' },
  { id: 3, img: test, text: 'test text' },
  { id: 4, img: test, text: 'test text' },
  { id: 5, img: test, text: 'test text' },
  { id: 6, img: test, text: 'test text' },
  { id: 7, img: test, text: 'test text' },
];

export const News = () => {
  return (
    <>
      <main>
        <SectionTitle pb={[16, 12]}>
          <Wrap>
            <Title variant="h1" textAlign={[null, 'center']} mb={[3, 6]}>
              Новини_кафедри
            </Title>
            <TitleDescription textAlign={[null, 'center']}>
              Стрічка з останніми публікаціями про культурні заходи та здобутки
              кафедри АСУ
            </TitleDescription>
          </Wrap>
        </SectionTitle>

        <SectionContent>
          <Wrap>
            <ListWrap mb={[7, 9]}>
              {dataNews.map(data => (
                <Box as="li" minWidth="250px" width="100%" key={data.id}>
                  <Card to={`${data.id}`} data={data} />
                </Box>
              ))}
            </ListWrap>
            <LoadMore>Завантажити_більше</LoadMore>
          </Wrap>
        </SectionContent>
      </main>
      <Footer />
    </>
  );
};
