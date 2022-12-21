// import { Box } from 'components/Box';
import { Item, LinkAllNews, NewsTitle, Section, ListWrap } from './News.styled';
import { NewsCard } from '../NewsCard/NewsCard';

import test from '../../image/Rectangle.png';

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
            <NewsCard data={data} />
          </Item>
        ))}
      </ListWrap>
      <LinkAllNews to="/news">Всі_новини</LinkAllNews>
    </Section>
  );
};
