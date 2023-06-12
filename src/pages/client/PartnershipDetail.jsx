import { usePartnershipById } from 'client/hooks/partnership';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { Footer } from 'components/Footer/Footer';
import {
  About,
  Button,
  ImgContainer,
  ButtonList,
  Img,
  LogoContainer,
  Logo,
  DescriptionContainer,
  ImgLink,
  InfoContainer,
} from 'components/Partnership/PartnershipDetail.styled';
import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { SectionTitle } from 'components/Templates/SectionTitle/SectionTitle';
import { Title } from 'components/Templates/Title/Title';
import { Wrap } from 'components/Templates/Wrap/Wrap';
import { useParams } from 'react-router-dom';
import { Article } from 'components/Templates/Article/Article';
import { Box } from 'components/Box';
import { domToReact } from 'html-react-parser';
import { ContentImg } from 'components/Templates/ContentImg/ContentImg';
import { List } from 'components/common/PagesDetail/PagesDetail.styled';
import { HtmlParser } from 'cms/components/HtmlParser';
import Skeleton from 'react-loading-skeleton';
import { Loader } from 'components/Loader';
import { MotionWrap } from 'components/MotionWrap/MotionWrap';
import { AnimatePresence } from 'framer-motion';
import { ErrorRequest } from 'components/ErrorRequest';
import { useScrollToLocation } from 'client/hooks/useScrollToLocation';

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

export const PartnershipDetail = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = usePartnershipById(id);

  const onClick = link => {
    window.location.href = `#${link}`;
  };
  useScrollToLocation();

  return (
    <>
      <MotionWrap key={3432343445}>
        <AnimatePresence mode="wait">
          <main>
            <MotionWrap key={9030423983}>
              {!!data && (
                <>
                  <SectionTitle>
                    <Wrap>
                      <Title
                        variant="h1"
                        mb={[8, 6]}
                        textAlign={[null, 'center']}
                      >
                        {data.partnership.data.title}
                      </Title>
                      <ButtonList>
                        {data.detail.map(({ data, id }) => {
                          return (
                            <li key={id}>
                              <Button
                                type="button"
                                onClick={() => {
                                  onClick(data.title);
                                }}
                              >
                                {data.title}
                              </Button>
                            </li>
                          );
                        })}
                      </ButtonList>
                    </Wrap>
                  </SectionTitle>
                  <SectionContent>
                    <Wrap p={[0, 0]} maxWidth={[null, '1248px']}>
                      {data.detail.map(({ id, data }) => {
                        return (
                          <About key={id} id={`${data.title}`}>
                            <ImgContainer>
                              <Img src={data.image} alt="image" />
                              <LogoContainer>
                                <Logo src={data.logo} alt="logo" />
                              </LogoContainer>
                              <DescriptionContainer>
                                <Box py={8} px={[7, 9]}>
                                  <Title variant="h2" mb={2}>
                                    {data.title}
                                  </Title>
                                  <ImgLink href={data.url}>{data.url}</ImgLink>
                                </Box>
                              </DescriptionContainer>
                            </ImgContainer>
                            <InfoContainer>
                              <HtmlParser
                                html={data.content}
                                options={options}
                              />
                            </InfoContainer>
                            <AdditionalInfo />
                          </About>
                        );
                      })}
                    </Wrap>
                  </SectionContent>
                </>
              )}
            </MotionWrap>
            <MotionWrap key={903033423983}>
              {isLoading && (
                <>
                  <SectionTitle>
                    <Wrap>
                      <Title
                        variant="h1"
                        mb={[8, 6]}
                        textAlign={[null, 'center']}
                      >
                        <Skeleton />
                      </Title>
                      <ButtonList>
                        {Array(2)
                          .fill()
                          .map((item, index) => {
                            return (
                              <li key={index}>
                                <Button type="button">
                                  <Skeleton width={'80px'} height={'20px'} />
                                </Button>
                              </li>
                            );
                          })}
                      </ButtonList>
                    </Wrap>
                  </SectionTitle>
                  <SectionContent>
                    <Wrap p={[0, 0]} maxWidth={[null, '1248px']}>
                      <About>
                        <ImgContainer>
                          <Skeleton width={'100%'} height={'100%'} />
                          <LogoContainer>
                            <Skeleton width={'50px'} height={'50px'} />
                          </LogoContainer>
                          <DescriptionContainer>
                            <Box py={8} px={[7, 9]}>
                              <Title variant="h2" mb={2}>
                                <Skeleton />
                              </Title>
                              <ImgLink href="#">
                                <Skeleton />
                              </ImgLink>
                            </Box>
                          </DescriptionContainer>
                        </ImgContainer>
                        <InfoContainer>
                          <Loader />
                        </InfoContainer>
                        <AdditionalInfo />
                      </About>
                    </Wrap>
                  </SectionContent>
                </>
              )}
            </MotionWrap>
            {isError && (
              <MotionWrap key={'error'}>
                <ErrorRequest />
              </MotionWrap>
            )}
          </main>
        </AnimatePresence>
      </MotionWrap>
      <Footer />
    </>
  );
};
