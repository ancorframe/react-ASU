import { Box } from 'components/Box';

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import test from '../image/Rectangle.png';
import promo from '../image/pexels.png';

const dataNews = [
  { id: 1, img: test, text: 'test text' },
  { id: 2, img: test, text: 'test text' },
  { id: 3, img: test, text: 'test text' },
  { id: 4, img: test, text: 'test text' },
];

export const Home = () => {
  return (
    <>
      <Box
        as="main"
        pl="96px"
        pr="24px"
        display="flex"
        gridGap="24px"
        mb="64px"
      >
        <Box mr="auto"maxWidth="824px">
          <Box mt="32px"  mb="80px">
            <SecondTitle>КАФЕДРА</SecondTitle>
            <Title>
              <TitleAligh>Автоматизованих</TitleAligh>
              <TitleAligh>Систем Управління_</TitleAligh>
            </Title>
            <Text>
              Cтворена в 1974 році на основі групи викладачів кафедри
              «Інформаційно-вимірювальна техніка» та розміщена на 8-му поверсі
              5-го навчального корпусу.
            </Text>
            <Box display="flex" gridGap="24px">
              <LinkGraduates to="#">Вступникам</LinkGraduates>
              <LinkAbout to="#">Про_нас</LinkAbout>
            </Box>
          </Box>
          <Box>
            <NewsTitle>Новини</NewsTitle>
            <Box
              as="ul"
              display="flex"
              flexWrap="wrap"
              gridGap="24px"
            //   maxWidth="824px"
              mb="24px"
            >
              {dataNews.map(data => (
                <Item key={data.id}>
                  <Card data={data} />
                </Item>
              ))}
            </Box>
            <LinkAllNews>Всі_новини</LinkAllNews>
          </Box>
        </Box>

        <PromoWrap>
          <img src={promo} alt="" />
        </PromoWrap>
      </Box>
      <Box as="footer" maxWidth="824px" pl="96px">
        <Wrap>
          <FooterDes>
            © 2022 Department of automated management systems. All Rigths
            Reserved.
          </FooterDes>
          <FooterDes>Sokolov Design</FooterDes>
        </Wrap>
      </Box>
    </>
  );
};

export const ImgPromo = styled.img`
    width: 100%;
    height: 100%;
`
export const PromoWrap = styled.div`
  top: 96px;
  width: 472px;
  height: 840px;
  position: sticky;
  border-radius: 4px;
  background: #f2f3f5;
`;

export const Title = styled.h1`
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 60px;
  /* or 107% */

  letter-spacing: -0.05em;

  /* Black */

  color: #161b1f;
  margin-bottom: 16px;
`;
export const SecondTitle = styled.h2`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 48px;
  /* identical to box height, or 150% */

  /* Black */

  color: #161b1f;

  opacity: 0.1;
  margin-bottom: 16px;
`;

export const TitleAligh = styled.span`
  display: block;
`;

export const Text = styled.p`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  /* or 140% */

  /* Black */

  color: #161b1f;
  margin-bottom: 48px;
`;

export const LinkGraduates = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 202px;
  height: 64px;
  background: #0f1f2c;
  border-radius: 2px;
  /* padding: 16px 32px; */
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  letter-spacing: -0.05em;

  color: #ffffff;
`;

export const LinkAbout = styled(NavLink)`
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  letter-spacing: -0.05em;

  color: #161b1f;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 177px;
  height: 64px;
  background: #f8f9fb;
  border-radius: 1px;
  /* padding: 16px 40px; */
`;

export const NewsTitle = styled.h2`
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  /* identical to box height, or 109% */

  letter-spacing: -0.05em;

  /* Black */

  color: #161b1f;

  opacity: 0.4;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(15, 31, 44, 0.1);
  margin-bottom: 38px;
`;

export const Card = ({ data }) => {
  return (
    <>
      <CardImg src={data.img} />
      <CardText>{data.text}</CardText>
    </>
  );
};

export const Item = styled.li`
  width: 400px;
  height: 340px;
  background: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 0px 4px 128px rgba(188, 196, 211, 0.5);
`;

export const CardImg = styled.img`
  margin-top: 4px;
  height: 240px;
  width: 392px;

  border: 2px solid #161b1f;
  border-radius: 1px;
`;
export const CardText = styled.p`
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  /* or 130% */

  letter-spacing: -0.06em;

  /* Black */

  color: #161b1f;
  width: 352px;
  height: 52px;
`;

export const LinkAllNews = styled(NavLink)`
  display: flex;

  justify-content: center;
  align-items: center;
  max-width: 824px;
  height: 64px;
  

  background: #ffffff;
  border-radius: 1px;
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  letter-spacing: -0.05em;

  color: #161b1f;

  box-shadow: 0px 4px 128px rgba(188, 196, 211, 0.5);
`;

export const FooterDes = styled.p`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 28px;
  /* identical to box height, or 200% */

  /* Black */

  color: #161b1f;

  opacity: 0.4;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-top: 1px solid rgba(15, 31, 44, 0.1);
  padding-top: 12px;
`;
