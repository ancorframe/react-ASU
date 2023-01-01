import { LinkAllNews } from './News.styled';
import { Card } from '../common/Card/Card';
import test from '../../image/newstest/Rectangle.png';
import { Title } from 'components/Templates/Title/Title';
import { Box } from 'components/Box';
import { ListWrap } from 'components/Templates/ListWrap/ListWrap';

const dataNews = [
  { id: 1, img: test, text: 'test text' },
  { id: 2, img: test, text: 'test text' },
  { id: 3, img: test, text: 'test text' },
  { id: 4, img: test, text: 'test text' },
];

export const News = () => {
  return (
    <Box as="section" pb={[16, 12]}>
      <Title
        variant="h2"
        pb={[2, 6]}
        mb={[8, 22]}
        borderBottom="titles"
        opacity="0.4"
      >
        Новини
      </Title>
      <ListWrap mb={[7, 8]}>
        {dataNews.map(data => (
          <li key={data.id}>
            <Card data={data} />
          </li>
        ))}
      </ListWrap>
      <LinkAllNews to="/about/news">Всі_новини</LinkAllNews>
    </Box>
  );
};
