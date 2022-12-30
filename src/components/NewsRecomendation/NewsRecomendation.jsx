import { Item, Section, Title, Wrap } from './NewsRecomendation.styled';

import { Card } from 'components/common/Card/Card';
import test from '../../image/newstest/Rectangle.png';

const dataNews = [
  { id: 2, img: test, text: 'test texttest texttest texttest text' },
  { id: 3, img: test, text: 'test text' },
  { id: 4, img: test, text: 'test text' },
];

export const NewsRecomendation = ({ title = 'Рекомендовані новини:' }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <Wrap>
        {dataNews.map(data => (
          <Item key={data.id}>
            <Card data={data} />
          </Item>
        ))}
      </Wrap>
    </Section>
  );
};
