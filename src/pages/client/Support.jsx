import { Box } from 'components/Box';
import { Footer } from 'components/Footer/Footer';
import { Card } from 'components/Support/Card';
import {
  Container,
  WrapList,
  WrapItem,
} from 'components/Support/Support.styled';
import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { SectionTitle } from 'components/Templates/SectionTitle/SectionTitle';
import { Title } from 'components/Templates/Title/Title';
import { Wrap } from 'components/Templates/Wrap/Wrap';
import { Article } from 'components/Templates/Article/Article';
import { HtmlParser } from 'cms/components/HtmlParser';
import { domToReact } from 'html-react-parser';
import { ContentImg } from 'components/Templates/ContentImg/ContentImg';
import { List } from 'components/common/PagesDetail/PagesDetail.styled';
import { useSupport } from 'client/hooks/support';
import { Loader } from 'components/Loader';
import { AnimatePresence } from 'framer-motion';
import { MotionWrap } from 'components/MotionWrap/MotionWrap';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
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

export const Support = () => {
  const { data,isError,isLoading } = useSupport();
  return (
    <>
      <MotionWrap key={3432343445}>
        <main>
          <SectionTitle>
            <Wrap>
              <Title variant="h1" textAlign={[null, 'center']}>
                Навчально-методичне_
                <Box display="inline-block">забезпечення</Box>
              </Title>
            </Wrap>
          </SectionTitle>

          <SectionContent>
            <Container>
              <AnimatePresence mode="wait">
                {!!data && (
                  <>
                    <MotionWrap key={90304983}>
                      <Box mb={[16, 12]}>
                        <HtmlParser
                          html={data.support.data.content}
                          options={options}
                        />
                      </Box>
                      <Box mb={[16, 12]}>
                        <Title variant="h2" mb={[9, 10]}>
                          Підручники і навчальні посібники викладачів кафедри
                          АСУ
                        </Title>
                        <WrapList>
                          {data.support.data.books.map(book => {
                            return (
                              <WrapItem key={book._id}>
                                <Card {...book} />
                              </WrapItem>
                            );
                          })}
                        </WrapList>
                      </Box>
                    </MotionWrap>
                  </>
                )}
                {isLoading && (
                  <MotionWrap key={34345345}>
                    <Loader />
                  </MotionWrap>
                )}
                {isError && (
                  <MotionWrap key={3434536645}>
                    <ErrorRequest/>
                  </MotionWrap>
                )}
              </AnimatePresence>
              <AdditionalInfo />
            </Container>
          </SectionContent>
        </main>
      </MotionWrap>
      <Footer />
    </>
  );
};
