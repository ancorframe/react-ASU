import { Box } from 'components/Box';
import { Footer } from 'components/Footer/Footer';
import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { SectionTitle } from 'components/Templates/SectionTitle/SectionTitle';
import { Title } from 'components/Templates/Title/Title';
import { Wrap } from 'components/Templates/Wrap/Wrap';
import { Article } from 'components/Templates/Article/Article';
import { useResearch } from 'client/hooks/research';
import { MotionWrap } from 'components/MotionWrap/MotionWrap';
import { HtmlParser } from 'cms/components/HtmlParser';
import { Loader } from 'components/Loader';
import { domToReact } from 'html-react-parser';
import { ContentImg } from 'components/Templates/ContentImg/ContentImg';
import { List } from 'components/common/PagesDetail/PagesDetail.styled';
import { AnimatePresence } from 'framer-motion';
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

export const ResearchAndAcquisitions = () => {
  const { data, isLoading, isError } = useResearch();

  return (
    <>
      <MotionWrap key={34334543434345}>
        <main>
          <SectionTitle>
            <Wrap>
              <Title variant="h1" textAlign={[null, 'center']}>
                Дослідження_
                <Box display="inline-block">та_здобутки</Box>
              </Title>
            </Wrap>
          </SectionTitle>
          <SectionContent>
            <Wrap
              p={[null, 11]}
              px={[6, null]}
              maxWidth={[null, '980px']}
              boxShadow="regular"
            >
              <AnimatePresence mode="wait">
                {data && (
                  <MotionWrap key={34334545}>
                    <HtmlParser
                      html={data.research.data.content}
                      options={options}
                    />
                  </MotionWrap>
                )}
                {isLoading && (
                  <MotionWrap key={343345443245}>
                    <Loader />
                  </MotionWrap>
                )}
                {isError && (
                  <MotionWrap key={'error'}>
                    <ErrorRequest />
                  </MotionWrap>
                )}
              </AnimatePresence>
            </Wrap>
          </SectionContent>
        </main>
      </MotionWrap>
      <Footer />
    </>
  );
};
