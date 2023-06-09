import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { Footer } from 'components/Footer/Footer';
import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { SectionTitle } from 'components/Templates/SectionTitle/SectionTitle';
import { Title } from 'components/Templates/Title/Title';
import { Wrap } from 'components/Templates/Wrap/Wrap';
import { TitleDescription } from 'components/Templates/TitleDescription/TitleDescription';
import { Article } from 'components/Templates/Article/Article';
import { HtmlParser } from 'cms/components/HtmlParser';
import { domToReact } from 'html-react-parser';
import { ContentImg } from 'components/Templates/ContentImg/ContentImg';
import { List } from 'components/common/PagesDetail/PagesDetail.styled';
import { MotionWrap } from 'components/MotionWrap/MotionWrap';
import { Loader } from 'components/Loader';
import { useHistory } from 'client/hooks/history';
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

export const History = () => {
  const { data,isLoading,isError } = useHistory();
  return (
    <>
      <MotionWrap key={34345}>
        <main>
          <SectionTitle>
            <Wrap>
              <Title variant="h1" textAlign={[null, 'center']} mb={[3, 6]}>
                Історія_кафедри
              </Title>
              <TitleDescription textAlign={[null, 'center']}>
                Історія кафедри автоматизованих систем управління
              </TitleDescription>
            </Wrap>
          </SectionTitle>
          <SectionContent>
            <Wrap
              p={[null, 11]}
              px={[6, null]}
              maxWidth={[null, '980px']}
              boxShadow="regular"
            >
              {!!data && (
                <MotionWrap key={34334545}>
                  <HtmlParser
                    html={data.history.data.content}
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
                <MotionWrap key={34334544763245}>
                  <ErrorRequest />
                </MotionWrap>
              )}
              <AdditionalInfo />
            </Wrap>
          </SectionContent>
        </main>
      </MotionWrap>
      <Footer />
    </>
  );
};
