import { Footer } from 'components/Footer/Footer';
import { MotionWrap } from 'components/MotionWrap/MotionWrap';
import {
  ImgContainer,
  Rank,
  Section,
  Title,
  Wrap,
} from 'components/Teachers/TeacherDetail.styled';
import { AnimatePresence } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';
import { Img } from 'components/Teachers/Teachers.styled';
import 'react-loading-skeleton/dist/skeleton.css';
import { Loader } from 'components/Loader';
import { HtmlParser } from 'cms/components/HtmlParser';
import { domToReact } from 'html-react-parser';
import { Article } from 'components/Templates/Article/Article';
import { ContentImg } from 'components/Templates/ContentImg/ContentImg';
import { List } from 'components/common/PagesDetail/PagesDetail.styled';
import { ErrorRequest } from 'components/ErrorRequest';
import { useTeachersDetail } from 'client/hooks/teachers';

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

export const TeacherDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useTeachersDetail(id);
  return (
    <>
      <MotionWrap key={903043434983}>
        <main>
          <AnimatePresence mode="wait">
            {data && (
              <MotionWrap key={9030434344334983}>
                <Wrap>
                  <ImgContainer>
                    <Img src={data.teacher.data.image} />
                  </ImgContainer>
                  <Section>
                    <Title>{data.teacher.data.fullName}</Title>
                    <Rank>{data.teacher.data.degree}</Rank>
                    <HtmlParser
                      html={data.teacher.data.content}
                      options={options}
                    />
                  </Section>
                </Wrap>
              </MotionWrap>
            )}
            {isLoading && (
              <MotionWrap key={90304343442333434983}>
                <Wrap>
                  <ImgContainer>
                    <Skeleton width={'100%'} height={'100%'} />
                  </ImgContainer>
                  <Section>
                    <Title>
                      <Skeleton width={'100%'} height={'100%'} />
                    </Title>
                    <Rank>
                      <Skeleton width={'100%'} height={'100%'} />
                    </Rank>
                    <Loader />
                  </Section>
                </Wrap>
              </MotionWrap>
            )}
            {isError && (
              <MotionWrap key={90304343433434983}>
                <Wrap>
                  <ErrorRequest />
                </Wrap>
              </MotionWrap>
            )}
          </AnimatePresence>
        </main>
      </MotionWrap>
      <Footer />
    </>
  );
};
