import { useEntrants } from 'client/hooks/entrants';
import { Box } from 'components/Box';
import { ErrorRequest } from 'components/ErrorRequest';
import { Footer } from 'components/Footer/Footer';
import { Button, ButtonWrap } from 'components/Entrants/Entrants.styled';
import { Loader } from 'components/Loader';
import { MotionWrap } from 'components/MotionWrap/MotionWrap';
import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { SectionTitle } from 'components/Templates/SectionTitle/SectionTitle';
import { Title } from 'components/Templates/Title/Title';
import { Wrap } from 'components/Templates/Wrap/Wrap';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { HtmlParser } from 'cms/components/HtmlParser';
import { useLocation } from 'react-router-dom';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { domToReact } from 'html-react-parser';
import { ContentImg } from 'components/Templates/ContentImg/ContentImg';
import { Article } from 'components/Templates/Article/Article';
import { List } from 'components/common/PagesDetail/PagesDetail.styled';

const degrees = [
  { d: 'bachelor', name: 'Бакалаврат' },
  { d: 'magistracy', name: 'Магістратура' },
  { d: 'postgraduate', name: 'Аспірантура' },
];

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
            <Article>{domToReact(el.children, options)}</Article>
          </li>
        );
      default:
        break;
    }
  },
};

export const Entrants = () => {
  const { data, isLoading, isError } = useEntrants();

  const [degree, setDegree] = useState('bachelor');
  const [degreeData, setDegreeData] = useState(null);

  const useScrollToLocation = () => {
    const scrolledRef = useRef(false);
    const { hash } = useLocation();
    const hashRef = useRef(hash);

    useEffect(() => {
      if (hash) {
        // We want to reset if the hash has changed
        if (hashRef.current !== hash) {
          hashRef.current = hash;
          scrolledRef.current = false;
        }

        // only attempt to scroll if we haven't yet (this could have just reset above if hash changed)
        if (!scrolledRef.current) {
          const degree = hash.replace('#', '');
          if (!data) {
            return;
          }
          const element = data.entrants.find(
            item => item.data.degree === degree
          );
          if (element) {
            setDegree(degree);
            scrolledRef.current = true;
          }
        }
      }
    });
  };

  useScrollToLocation();
  useEffect(() => {
    if (data && degree) {
      const item = data.entrants.find(item => item.data.degree === degree);
      setDegreeData(item);
    }
  }, [data, degree]);

  const onHandleChange = degree => {
    setDegree(degree);
    window.location.href = `#${degree}`;
  };

  return (
    <MotionWrap key={3}>
      <main>
        <SectionTitle>
          <Wrap>
            <Title variant="h1" textAlign={[null, 'center']}>
              Вступникам
            </Title>
          </Wrap>
        </SectionTitle>
        <SectionContent>
          <>
            <Box maxWidth="960px" m="0 auto" boxShadow={'regular'}>
              <AnimatePresence mode="wait">
                {!!data && (
                  <Box
                    key={'data'}
                    as={motion.div}
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.2 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15 },
                    }}
                  >
                    <Box p="8px 8px 0">
                      <ButtonWrap>
                        {degrees.map(({ d, name }, index) => (
                          <Button
                            key={index}
                            isActive={d === degree}
                            onClick={() => onHandleChange(d)}
                          >
                            {name}
                          </Button>
                        ))}
                      </ButtonWrap>
                    </Box>
                    <AnimatePresence mode="wait">
                      {degreeData && (
                        <motion.div
                          key={degree}
                          initial={{
                            opacity: 0,
                          }}
                          animate={{
                            opacity: 1,
                            transition: { duration: 0.2 },
                          }}
                          exit={{
                            opacity: 0,
                            transition: { duration: 0.15 },
                          }}
                        >
                          <Box p={[null, 11]} px={[6, null]} py={[8, null]}>
                            <HtmlParser
                              html={degreeData.data.content}
                              options={options}
                            />
                            <AdditionalInfo />
                          </Box>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Box>
                )}
                {isError && (
                  <Box
                    key={'error'}
                    as={motion.div}
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.2 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15 },
                    }}
                  >
                    <ErrorRequest />
                  </Box>
                )}
                {isLoading && (
                  <Box
                    key={'loading'}
                    as={motion.div}
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.2 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15 },
                    }}
                  >
                    <Loader />
                  </Box>
                )}
              </AnimatePresence>
            </Box>
          </>
        </SectionContent>
      </main>
      <Footer />
    </MotionWrap>
  );
};
