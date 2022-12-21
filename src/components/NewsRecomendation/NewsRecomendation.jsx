import { Item, Section, Title, Wrap } from './NewsRecomendation.styled';

import { NewsCard } from 'components/NewsCard/NewsCard';
import test from '../../image/Rectangle.png';

const dataNews = [
  { id: 2, img: test, text: 'test texttest texttest texttest text' },
  { id: 3, img: test, text: 'test text' },
  { id: 4, img: test, text: 'test text' },
];

export const NewsRecomendation = ({title='Рекомендовані новини:'}) => {
  return (
    <Section>
      <Title>{title}</Title>
      <Wrap>
        {dataNews.map(data => (
          <Item key={data.id}>
            <NewsCard data={data} />
          </Item>
        ))}
      </Wrap>
    </Section>
  );
};
