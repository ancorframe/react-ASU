import { Item } from './News.styled';
import { NewsCard } from 'components/common/NewsCard';

import test from '../../image/Rectangle.png';
import { Box } from 'components/Box';
const dataNews = [
  { id: 1, img: test, text: 'test text' },
  { id: 2, img: test, text: 'test text' },
  { id: 3, img: test, text: 'test text' },
  { id: 4, img: test, text: 'test text' },
  { id: 5, img: test, text: 'test text' },
  { id: 6, img: test, text: 'test text' },
  { id: 7, img: test, text: 'test text' },
];

export const AllNews = () => {
  return (
    <>
      <Box
        as="ul"
        display="flex"
       
        gridGap="24px"
        flexWrap="wrap"
        m="0 auto"
        mb="24px"
      >
        {dataNews.map(data => (
          <Item key={data.id}>
            <NewsCard to={`${data.id}`} data={data} />
          </Item>
        ))}
      </Box>
    </>
  );
};
