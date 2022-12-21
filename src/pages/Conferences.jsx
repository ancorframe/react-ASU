import { Footer } from 'components/Footer/Footer';
import {
  Item,
  LoadMore,
  Section,
  SectionTitle,
  Title,
//   TitleDescription,
  Wrap,
} from 'components/News/News.styled';
import { NewsCard } from 'components/NewsCard/NewsCard';
import test from '../image/Rectangle.png';

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

export const Conferences = () => {
  return (
    <>
      <main>
        <SectionTitle>
          <Title>Конференції</Title>
        </SectionTitle>

        <Section>
          <Wrap>
            {dataNews.map(data => (
              <Item key={data.id}>
                <NewsCard to={`${data.id}`} data={data} />
              </Item>
            ))}
          </Wrap>
          <LoadMore>Завантажити_більше</LoadMore>
        </Section>
      </main>
      <Footer />
    </>
  );
};
