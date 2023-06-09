import Skeleton from 'react-loading-skeleton';
import { Box } from './Box';
import {
  Container,
  ImgContainer,
  TitleContainer,
} from './common/PagesDetail/PagesDetail.styled';
import { Loader } from './Loader';
import { NewsRecommendations } from './NewsRecommendations/NewsRecommendations';
import { SectionContent } from './Templates/SectionContent/SectionContent';
import { SectionTitle } from './Templates/SectionTitle/SectionTitle';
import { Title } from './Templates/Title/Title';
import { Wrap } from './Templates/Wrap/Wrap';
import 'react-loading-skeleton/dist/skeleton.css';

export const LoaderNews = () => {
  return (
    <>
      <SectionTitle pt={[17, 18]} pb={[21, 19]}>
        <Wrap>
          <ImgContainer>
            <Skeleton height={'100%'} width={'100%'} />
            <TitleContainer>
              <Box px={[6, 9]} py={[20, 8]}>
                <Title variant="h2">
                  <Skeleton />
                </Title>
              </Box>
            </TitleContainer>
          </ImgContainer>
        </Wrap>
      </SectionTitle>
      <SectionContent>
        <Container>
          <Loader />
        </Container>
      </SectionContent>
      <NewsRecommendations />
    </>
  );
};
