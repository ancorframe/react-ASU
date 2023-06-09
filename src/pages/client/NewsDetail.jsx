import { Footer } from 'components/Footer/Footer';
import {
  TitleContainer,
  Img,
  ImgContainer,
  Container,
  List,
} from 'components/common/PagesDetail/PagesDetail.styled';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { NewsRecommendations } from 'components/NewsRecommendations/NewsRecommendations';
import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { SectionTitle } from 'components/Templates/SectionTitle/SectionTitle';
import { Title } from 'components/Templates/Title/Title';
import { Wrap } from 'components/Templates/Wrap/Wrap';
import { Box } from 'components/Box';
import { Article } from 'components/Templates/Article/Article';
import { useParams } from 'react-router-dom';
import { domToReact } from 'html-react-parser';
import { ContentImg } from 'components/Templates/ContentImg/ContentImg';
import { HtmlParser } from 'cms/components/HtmlParser';
import { useNewsDetail } from 'client/hooks/news';
import { MotionWrap } from 'components/MotionWrap/MotionWrap';
import { AnimatePresence } from 'framer-motion';
import { LoaderNews } from 'components/LoaderNews';
import { ErrorRequest } from 'components/ErrorRequest';

const options = {
  replace: el => {
    switch (el.name) {
      case 'h1':
        return (
          <Title variant="h1" pb={[2, 6]} mb={8} borderBottom={'titles'}>
            {domToReact(el.children, options)}
          </Title>
        );
      case 'h2':
        return (
          <Title variant="h2" pb={[2, 6]} mb={8} borderBottom={'titles'}>
            {domToReact(el.children, options)}
          </Title>
        );
      case 'h3':
        return (
          <Title variant="h3" pb={[2, 6]} mb={8} borderBottom={'titles'}>
            {domToReact(el.children, options)}
          </Title>
        );
      case 'h4':
        return (
          <Title variant="h4" pb={[2, 6]} mb={8} borderBottom={'titles'}>
            {domToReact(el.children, options)}
          </Title>
        );
      case 'h5':
        return (
          <Title variant="h5" pb={[2, 6]} mb={8} borderBottom={'titles'}>
            {domToReact(el.children, options)}
          </Title>
        );
      case 'p':
        return <Article>{domToReact(el.children, options)}</Article>;
      case 'img':
        return <ContentImg src={el.attribs.src} alt={el.attribs.alt} />;
      case 'ul':
        return <List> {domToReact(el.children, options)}</List>;
      case 'li':
        return (
          <li>
            <Article>{domToReact(el.children, options)}</Article>{' '}
          </li>
        );
      default:
        break;
    }
  },
};
export const NewsDetail = () => {
  const { id } = useParams();
  const { data,isLoading,isError } = useNewsDetail(id);

  return (
    <>
      <MotionWrap key={34323343443445}>
        <main>
          <AnimatePresence mode="wait">
            {!!data && (
              <>
                <MotionWrap key={90304983}>
                  <SectionTitle pt={[17, 18]} pb={[21, 19]}>
                    <Wrap>
                      <ImgContainer>
                        <Img src={data.news.news.data.image} />
                        <TitleContainer>
                          <Box px={[6, 9]} py={[20, 8]}>
                            <Title variant="h2">
                              {data.news.news.data.title}
                            </Title>
                          </Box>
                        </TitleContainer>
                      </ImgContainer>
                    </Wrap>
                  </SectionTitle>
                  <SectionContent>
                    <Container>
                      <Box mb={[16, 19]}>
                        <HtmlParser
                          html={data.news.news.data.content}
                          options={options}
                        />
                      </Box>
                      <AdditionalInfo />
                    </Container>
                  </SectionContent>
                  <NewsRecommendations data={data.news.recommendation} />
                </MotionWrap>
              </>
            )}
            {isLoading && (
              <MotionWrap key={34345345}>
                <LoaderNews />
              </MotionWrap>
            )}
            {isError && (
              <MotionWrap key={34345345}>
                <ErrorRequest />
              </MotionWrap>
            )}
          </AnimatePresence>
        </main>
      </MotionWrap>
      <Footer />
    </>
  );
};
