import { Box } from 'components/Box';
import { Item, LinkAllNews, NewsTitle, Section } from './News.styled';
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
      <Box
        as="ul"
        display="flex"
        flexWrap="wrap"
        gridGap="24px"
        mb="24px"
        justifyContent="center"
        
      >
        {dataNews.map(data => (
          <Item key={data.id}>
            <NewsCard data={data} />
          </Item>
        ))}
      </Box>
      <LinkAllNews to="/news">Всі_новини</LinkAllNews>
    </Section>
  );
};
