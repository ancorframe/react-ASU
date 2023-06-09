import { Footer } from 'components/Footer/Footer';
import { Card } from 'components/common/Card/Card';
import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { SectionTitle } from 'components/Templates/SectionTitle/SectionTitle';
import { Title } from 'components/Templates/Title/Title';
import { Wrap } from 'components/Templates/Wrap/Wrap';
import { TitleDescription } from 'components/Templates/TitleDescription/TitleDescription';
import { ListWrap } from 'components/Templates/ListWrap/ListWrap';
import { Box } from 'components/Box';
import { LoadMore } from 'components/common/LoadMore/LoadMore';
import React from 'react';
import { useInfiniteNews } from 'client/hooks/news';
import { MotionWrap } from 'components/MotionWrap/MotionWrap';
import { AnimatePresence } from 'framer-motion';
import { ErrorRequest } from 'components/ErrorRequest';

export const News = () => {
  const { data, isError, isLoading, hasNextPage, fetchNextPage } =
    useInfiniteNews();

  return (
    <>
      <MotionWrap key={3434343345}>
        <main>
          <SectionTitle pb={[16, 12]}>
            <Wrap>
              <Title variant="h1" textAlign={[null, 'center']} mb={[3, 6]}>
                Новини_кафедри
              </Title>
              <TitleDescription textAlign={[null, 'center']}>
                Стрічка з останніми публікаціями про культурні заходи та
                здобутки кафедри АСУ
              </TitleDescription>
            </Wrap>
          </SectionTitle>
          <SectionContent>
            <Wrap>
              <AnimatePresence mode="wait">
                {data && (
                  <ListWrap key={98867576509}>
                    {data.pages.map((data, index) => (
                      <React.Fragment key={index}>
                        {data.news.map(news => (
                          <Box
                            as="li"
                            minWidth="250px"
                            maxWidth={['100%', '400px']}
                            key={news.id}
                          >
                            <Card news={news} />
                          </Box>
                        ))}
                      </React.Fragment>
                    ))}
                  </ListWrap>
                )}
                {isLoading && (
                  <ListWrap key={898498348030938043948}>
                    {Array(9)
                      .fill()
                      .map((item, index) => {
                        return (
                          <Box
                            as="li"
                            minWidth="250px"
                            maxWidth={['100%', '400px']}
                            key={index}
                          >
                            <Card />
                          </Box>
                        );
                      })}
                  </ListWrap>
                )}
                {isError && (
                  <MotionWrap key={'error'}>
                    <ErrorRequest />
                  </MotionWrap>
                )}
              {data && (
                  <LoadMore
                    type='button'
                  mt={['16px', '24px']}
                  onClick={fetchNextPage}
                  disabled={!hasNextPage}
                >
                  Завантажити_більше
                </LoadMore>
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
