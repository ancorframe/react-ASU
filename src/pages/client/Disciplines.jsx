import { Box } from 'components/Box';
import {
  CardTitle,
  Form,
  InputSelect,
  InputWrap,
  Item,
  Label,
  Link,
  List,
} from 'components/Desciplines/Desciplines.styled';
import { Footer } from 'components/Footer/Footer';
import { useForm, Controller } from 'react-hook-form';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';
import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { SectionTitle } from 'components/Templates/SectionTitle/SectionTitle';
import { Title } from 'components/Templates/Title/Title';
import { Wrap } from 'components/Templates/Wrap/Wrap';
import { TitleDescription } from 'components/Templates/TitleDescription/TitleDescription';
import { useState } from 'react';
import { useEffect } from 'react';
import { debounce } from 'debounce';
import { useDiscipline, useDisciplineFilter } from 'client/hooks/disciplines';
import { MotionWrap } from 'components/MotionWrap/MotionWrap';
import { AnimatePresence, motion } from 'framer-motion';
import { ErrorRequest } from 'components/ErrorRequest';
import Skeleton from 'react-loading-skeleton';

export const Disciplines = () => {
  const [query, setQuery] = useState(null);
  const { control, watch, handleSubmit } = useForm({
    defaultValues: {
      specialty: '',
      course: '',
    },
  });
  const { data, isError, isLoading, refetch } = useDiscipline(query);
  const {
    data: filter,
    isError: isErrorFilter,
    isLoading: isLoadingFilter,
  } = useDisciplineFilter();

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
    setQuery(values);
  };

  return (
    <>
      <MotionWrap key={'discipline'}>
        <main>
          <SectionTitle>
            <Wrap>
              <Title variant="h1" textAlign={[null, 'center']} mb={[3, 6]}>
                Перелік_дисциплін
              </Title>
              <TitleDescription textAlign={[null, 'center']}>
                Кафедра АСУ готує фахівців освітньо-кваліфікаційного рівнів
                “бакалавр” та “магістр” за спеціальностями 122 “Комп’ютерні
                науки”, 124 “Системний аналіз”, 126 “Інформаційні системи та
                технології”
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
                              <Label htmlFor="specialty">Спеціальність</Label>
                              <Box position="relative">
                                <Controller
                                  render={({ field }) => (
                                    <InputSelect {...field}>
                                      <option value="" disabled hidden>
                                        Обери спеціальність ...
                                      </option>
                                      {filter.specialty.map(item => (
                                        <option
                                          value={item.value}
                                          key={item.value}
                                        >
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
                                  <BusinessCenterOutlinedIcon />
                                </Box>
                              </Box>
                            </InputWrap>
                            <InputWrap>
                              <Label htmlFor="course">Курс</Label>
                              <Box position="relative">
                                <Controller
                                  render={({ field }) => (
                                    <InputSelect {...field}>
                                      <option value="" disabled hidden>
                                        Обери курс ...
                                      </option>
                                      {filter.course.map(item => (
                                        <option
                                          value={item.value}
                                          key={item.value}
                                        >
                                          {item.label}
                                        </option>
                                      ))}
                                    </InputSelect>
                                  )}
                                  name="course"
                                  control={control}
                                  defaultValue=""
                                />
                                <Box
                                  position="absolute"
                                  right="16px"
                                  top="16px"
                                >
                                  <EmojiFlagsOutlinedIcon />
                                </Box>
                              </Box>
                            </InputWrap>
                          </Form>
                        </MotionWrap>
                      )}
                      {isLoadingFilter && (
                        <MotionWrap key={444333}>
                          <Form>
                            <InputWrap>
                              <Skeleton width={'100%'} height={'77px'} />
                            </InputWrap>
                            <InputWrap width={['100%', '100%']}>
                              <Skeleton width={'100%'} height={'77px'} />
                            </InputWrap>
                          </Form>
                        </MotionWrap>
                      )}
                      {data && (
                        <AnimatePresence mode="wait" key={23424}>
                          {data.disciplines.length !== 0 && (
                            <List key={55533}>
                              <AnimatePresence mode="wait">
                                {data.disciplines.map(item => (
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
                                    <Link>
                                      <CardTitle>
                                        {item.data.disciplines}
                                      </CardTitle>
                                    </Link>
                                  </Item>
                                ))}
                              </AnimatePresence>
                            </List>
                          )}
                          {(data.disciplines.length === 0 || isError) && (
                            <MotionWrap key={3434}>
                              <Title variant="h2" textAlign="center">
                                Вибачте, але на ваш запит нічого не знайдено.
                              </Title>
                            </MotionWrap>
                          )}
                        </AnimatePresence>
                      )}
                      {isLoading && (
                        <List mb={[7, 8]} key={6655543}>
                          {Array(6)
                            .fill()
                            .map((item, index) => {
                              return (
                                <Item key={index}>
                                  <Link>
                                    <CardTitle>
                                      <Skeleton />
                                    </CardTitle>
                                  </Link>
                                </Item>
                              );
                            })}
                        </List>
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
      </MotionWrap>
      <Footer />
    </>
  );
};
