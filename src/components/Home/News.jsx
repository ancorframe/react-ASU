import { LinkAllNews, List } from './News.styled';
import { Card } from '../common/Card/Card';
import { Title } from 'components/Templates/Title/Title';
import { Box } from 'components/Box';
import { useNews } from 'client/hooks/news';
import { AnimatePresence } from 'framer-motion';

export const News = () => {
  const filter = { page: 1, limit: 4 };
  const { data } = useNews(filter);

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
      <AnimatePresence mode="wait">
        {data && (
          <>
            <List
              key={9847938759} >
              {data.news.map(news => (
                <li key={news.id}>
                  <Card news={news} home />
                </li>
              ))}
            </List>
          </>
        )}
        {!data && (
          <List key={984798789938759} >
            {Array(4)
              .fill()
              .map((item, index) => {
                return (
                  <li key={index}>
                    <Card />
                  </li>
                );
              })}
          </List>
        )}
      </AnimatePresence>
      <LinkAllNews to="/about/news">Всі_новини</LinkAllNews>
    </Box>
  );
};
