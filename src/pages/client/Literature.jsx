import { Box } from 'components/Box';
import { Footer } from 'components/Footer/Footer';
import { BookCard } from 'components/Literature/BookCard';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import {
  Form,
  InputField,
  InputSelect,
  InputWrap,
  Item,
  Label,
  ResetButton,
} from 'components/Literature/Literaturte.styled';
import { useForm, Controller } from 'react-hook-form';
import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { SectionTitle } from 'components/Templates/SectionTitle/SectionTitle';
import { Title } from 'components/Templates/Title/Title';
import { Wrap } from 'components/Templates/Wrap/Wrap';
import { TitleDescription } from 'components/Templates/TitleDescription/TitleDescription';
import { ListWrap } from 'components/Templates/ListWrap/ListWrap';
import { LoadMore } from 'components/common/LoadMore/LoadMore';
import { MotionWrap } from 'components/MotionWrap/MotionWrap';
import {
  useInfiniteLiterature,
  useLiteratureFilter,
} from 'client/hooks/literature';
import debounce from 'debounce';
import { useEffect } from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ErrorRequest } from 'components/ErrorRequest';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import React from 'react';

export const Literature = () => {
  const [query, setQuery] = useState(null);
  const { control, watch, resetField, handleSubmit } = useForm({
    defaultValues: {
      searchQuery: '',
      specialty: '',
    },
  });
  
  const { data, isError, isLoading, hasNextPage, fetchNextPage, refetch } =
    useInfiniteLiterature(query);
  const {
    data: filter,
    isError: isErrorFilter,
    isLoading: isLoadingFilter,
  } = useLiteratureFilter();

  useEffect(() => {
    const subscription = watch(debounce(handleSubmit(onSubmit), 500));
    return () => subscription.unsubscribe();
  }, [handleSubmit, watch]);

  useEffect(() => {
    if (query) {
      refetch();
    }
  }, [query, refetch]);

  const onSubmit = values => {
    const trimmed = { ...values, searchQuery: values.searchQuery.trim() };
      setQuery(trimmed);
  };

  return (
    <>
      <MotionWrap key={'literature'}>
        <main>
          <SectionTitle>
            <Wrap>
              <Title variant="h1" textAlign={[null, 'center']} mb={[3, 6]}>
                Корисна_література
              </Title>
              <TitleDescription textAlign={[null, 'center']}>
                Набір літератури та ресурсів. Тут є все, що тобі пригодиться у
                навчанні 😉
              </TitleDescription>
            </Wrap>
          </SectionTitle>
          <SectionContent>
            <Wrap>
              <AnimatePresence mode="wait">
                {!isErrorFilter ? (
                  <MotionWrap key="data">
                    <AnimatePresence mode="wait">
                      {filter && (
                        <MotionWrap key={4444}>
                          <Form>
                            <InputWrap>
                              <Label htmlFor="searchQuery">Пошук</Label>
                              <Box position="relative">
                                <Controller
                                  render={({ field }) => (
                                    <InputField
                                      {...field}
                                      placeholder="Назва книги або ресурсу ..."
                                      autoComplete="off"
                                    />
                                  )}
                                  name="searchQuery"
                                  control={control}
                                  defaultValue=""
                                />
                                <Box
                                  position="absolute"
                                  right="16px"
                                  top="16px"
                                >
                                  <SearchIcon />
                                </Box>
                              </Box>
                            </InputWrap>
                            <InputWrap>
                              <Label htmlFor="specialty">Напрям</Label>
                              <Box position="relative">
                                <Controller
                                  render={({ field }) => (
                                    <InputSelect {...field}>
                                      <option value="" disabled hidden>
                                        Обери фільтр ...
                                      </option>
                                      {filter.filter.map((item, index) => (
                                        <option value={item.value} key={index}>
                                          {item.label}
                                        </option>
                                      ))}
                                    </InputSelect>
                                  )}
                                  name="specialty"
                                  control={control}
                                  defaultValue=""
                                />
                                <Box
                                  position="absolute"
                                  right="16px"
                                  top="16px"
                                >
                                  <FilterAltOutlinedIcon />
                                </Box>
                              </Box>
                            </InputWrap>

                            <ResetButton
                              type="button"
                              onClick={() => resetField('specialty')}
                            >
                              {window.innerWidth < 849 ? (
                                'Оновити'
                              ) : (
                                <RefreshRoundedIcon />
                              )}
                            </ResetButton>
                          </Form>
                        </MotionWrap>
                      )}
                      {isLoadingFilter && (
                        <MotionWrap key={444333}>
                          <Form>
                            <InputWrap>
                              <Skeleton width={'100%'} height={'77px'} />
                            </InputWrap>
                            <InputWrap width={['100%', '320px']}>
                              <Skeleton width={'100%'} height={'77px'} />
                            </InputWrap>
                            <ResetButton type="button">
                              {window.innerWidth < 849 ? (
                                'Оновити'
                              ) : (
                                <RefreshRoundedIcon />
                              )}
                            </ResetButton>
                          </Form>
                        </MotionWrap>
                      )}

                      {data && (
                        <AnimatePresence mode="wait" key={23424}>
                          {data.pages[0].literature.length !== 0 && (
                            <ListWrap mb={[7, 8]} key={55533}>
                              {data.pages.map((data, index) => (
                                <React.Fragment key={index}>
                                  <AnimatePresence mode="wait">
                                    {data.literature.map(item => (
                                      <Item
                                        key={item.id}
                                        as={motion.li}
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
                                        <BookCard data={item.data} />
                                      </Item>
                                    ))}
                                  </AnimatePresence>
                                </React.Fragment>
                              ))}
                            </ListWrap>
                          )}
                          {(data.pages[0].literature.length === 0 ||
                            isError) && (
                            <MotionWrap key={3434}>
                              <Title variant="h2" textAlign="center">
                                Вибачте, але на ваш запит нічого не знайдено.
                              </Title>
                            </MotionWrap>
                          )}
                        </AnimatePresence>
                      )}
                      {isLoading && (
                        <ListWrap mb={[7, 8]} key={6655543}>
                          {Array(6)
                            .fill()
                            .map((item, index) => {
                              return (
                                <Item key={index}>
                                  <BookCard />
                                </Item>
                              );
                            })}
                        </ListWrap>
                      )}
                      {hasNextPage && (
                        <LoadMore
                          type="button"
                          onClick={fetchNextPage}
                          disabled={!hasNextPage}
                        >
                          Завантажити_більше
                        </LoadMore>
                      )}
                    </AnimatePresence>
                  </MotionWrap>
                ) : (
                  <MotionWrap key={335353}>
                    <ErrorRequest />
                  </MotionWrap>
                )}
              </AnimatePresence>
            </Wrap>
          </SectionContent>
        </main>
        <Footer />
      </MotionWrap>
    </>
  );
};
