import { Footer } from 'components/Footer/Footer';
import {
  TitleContainer,
  Img,
  ImgContainer,
  Container,
  List,
  // ContainerItem,
  // List,
} from 'components/common/PagesDetail/PagesDetail.styled';

import { NewsRecommendations } from 'components/NewsRecommendations/NewsRecommendations';
// import {
//   InfoDescription,
//   InfoImg,
// } from 'components/ConferencesDetail/ConferencesDetail.styled';
import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { SectionTitle } from 'components/Templates/SectionTitle/SectionTitle';
import { Title } from 'components/Templates/Title/Title';
import { Wrap } from 'components/Templates/Wrap/Wrap';
import { Box } from 'components/Box';
import { MotionWrap } from 'components/MotionWrap/MotionWrap';
import { AnimatePresence } from 'framer-motion';
import { HtmlParser } from 'cms/components/HtmlParser';
import { LoaderNews } from 'components/LoaderNews';
import { useConferenceDetail } from 'client/conference';
import { domToReact } from 'html-react-parser';
import { Article } from 'components/Templates/Article/Article';
import { ContentImg } from 'components/Templates/ContentImg/ContentImg';
import { useParams } from 'react-router-dom';
import { ErrorRequest } from 'components/ErrorRequest';
// import { Article } from 'components/Templates/Article/Article';

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

export const ConferencesDetail = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useConferenceDetail(id);

  const formattedDate = () => {
    if (data) {
      const dateObj = new Date(data.conference.conference.data.date);
      const year = dateObj.getFullYear();
      const month = String(dateObj.getMonth() + 1).padStart(2, '0');
      const day = String(dateObj.getDate()).padStart(2, '0');
      const hours = String(dateObj.getHours()).padStart(2, '0');
      const minutes = String(dateObj.getMinutes()).padStart(2, '0');
      const formattedDate = `${day}.${month}.${year} / ${hours}:${minutes}`;

      return formattedDate;
    }
  };

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
                        <Img src={data.conference.conference.data.image} />
                        <TitleContainer>
                          <Box px={[6, 9]} py={[20, 8]}>
                            <Title variant="h2" mb={[5, 2]}>
                              {data.conference.conference.data.title}
                            </Title>
                            <Title variant="h5">{formattedDate()}</Title>
                          </Box>
                        </TitleContainer>
                      </ImgContainer>
                    </Wrap>
                  </SectionTitle>
                  <SectionContent>
                    <Container>
                      <Box mb={[16, 19]}>
                        <HtmlParser
                          html={data.conference.conference.data.content}
                          options={options}
                        />
                      </Box>
                    </Container>
                  </SectionContent>
                  {data.conference.recommendation[0] && (
                    <NewsRecommendations
                      news={data.conference.recommendation}
                    />
                  )}
                </MotionWrap>
              </>
            )}
            {isError && (
              <MotionWrap key={'error'}>
                <ErrorRequest />
              </MotionWrap>
            )}
            {isLoading && (
              <MotionWrap key={34345345}>
                <LoaderNews />
              </MotionWrap>
            )}
          </AnimatePresence>
        </main>
      </MotionWrap>

      <Footer />
    </>
  );
};
