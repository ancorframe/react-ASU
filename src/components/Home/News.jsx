// import { Box } from 'components/Box';
import { Item, LinkAllNews, NewsTitle, Section, ListWrap } from './News.styled';
import { Card } from '../common/Card/Card';

import test from '../../image/newstest/Rectangle.png';

const dataNews = [
  { id: 1, img: test, text: 'test text' },
  { id: 2, img: test, text: 'test text' },
  { id: 3, img: test, text: 'test text' },
  { id: 4, img: test, text: 'test text' },
];

export const News = () => {
  return (
    <Section>
      <NewsTitle>Новини</NewsTitle>
      <ListWrap>
        {dataNews.map(data => (
          <Item key={data.id}>
            <Card data={data} />
          </Item>
        ))}
      </ListWrap>
      <LinkAllNews to="/about/news">Всі_новини</LinkAllNews>
    </Section>
  );
};
