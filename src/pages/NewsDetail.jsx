import { Box } from 'components/Box';

import { Footer } from 'components/Footer/Footer';
import { ImgCard } from 'components/common/ImgCard';

import { Item} from 'components/NewsDetail/NewsDetail.styled';

import img from '../image/Rectangl.png';
import { About } from 'components/NewsDetail/About';
import { AdditionalTitle } from 'components/Templates/AdditionalTitle/AdditionalTitle';


import test from '../image/Rectangle.png';
import { NewsCard } from 'components/NewsCard/NewsCard';

const dataNews = [
  { id: 1, img: test, text: 'test text' },
  { id: 2, img: test, text: 'test text' },
  { id: 3, img: test, text: 'test text' },
];

export const NewsDetail = () => {
  return (
    <>
      <Box as="main" maxWidth="1248px" m="0 auto" mt="30px" mb='128px'>
        <Box position="relative" maxHeight="480px" mb="92px">
          <ImgCard
            src={img}
            text={'День відкритих дверей - 5 корпус, 114 ауд.'}
          />
        </Box>
        <About />
      
      <AdditionalTitle>Рекомендовані новини:</AdditionalTitle>
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
        ))}</Box>
      </Box>
      <Footer />
    </>
  );
};
