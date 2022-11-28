import { Box } from 'components/Box'
import {  Item, LinkAllNews, NewsTitle } from './News.styled'
import { NewsCard } from './NewsCard';

import test from '../../image/Rectangle.png';

const dataNews = [
  { id: 1, img: test, text: 'test text' },
  { id: 2, img: test, text: 'test text' },
  { id: 3, img: test, text: 'test text' },
  { id: 4, img: test, text: 'test text' },
];



export const News = () => {
    return (
      <Box as="section" maxWidth="824px">
        <NewsTitle>Новини</NewsTitle>
        <Box as="ul" display="flex" flexWrap="wrap" gridGap="24px" mb="24px"     justifyContent='center'>
          {dataNews.map(data => (
            <Item key={data.id}>
              <NewsCard data={data} />
            </Item>
          ))}
        </Box>
        <LinkAllNews>Всі_новини</LinkAllNews>
      </Box>
    );
}