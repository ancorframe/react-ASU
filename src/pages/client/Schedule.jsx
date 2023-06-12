import { Box } from 'components/Box';
import { Footer } from 'components/Footer/Footer';
import {
  FieldContainer,
  Fieldset,
  Form,
  InfoAltContainer,
  InfoContainer,
  InfoImg,
  Infolink,
  InfoTeacher,
  InfoTitle,
  RadioInput,
  RadioLable,
  RadioWrap,
  ScheduleItem,
  Time,
  TimeContainer,
} from 'components/Schedule/Schedule.styled';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { SectionTitle } from 'components/Templates/SectionTitle/SectionTitle';
import { Title } from 'components/Templates/Title/Title';
import { Wrap } from 'components/Templates/Wrap/Wrap';
import { TitleDescription } from 'components/Templates/TitleDescription/TitleDescription';
import { useSchedule } from 'client/hooks/schedule';
import { AnimatePresence } from 'framer-motion';
import { MotionWrap } from 'components/MotionWrap/MotionWrap';
import { useScheduleFilter } from 'client/hooks/schedule';
import { InputSelects } from 'components/Schedule/InputSelect';
import { useState } from 'react';
import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { ErrorRequest } from 'components/ErrorRequest';

const radio = [
  {
    value: 'mon',
    checked: true,
    label: 'ПН',
  },
  { value: 'tue', label: 'ВТ' },
  { value: 'wed', label: 'СР' },
  { value: 'thu', label: 'ЧТ' },
  { value: 'fri', label: 'ПТ' },
];
export const Schedule = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedSubgroup, setSelectedSubgroup] = useState('');
  const [selectedDay, setSelectedDay] = useState('mon');
  const [schedule, setSchedule] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();

  const searchParam = {
    course: selectedCourse,
    group: selectedGroup,
    subgroup: selectedSubgroup,
  };
  const {
    data: filter,
    isError: filterError,
    isSuccess,
    isLoading: filterIsLoading,
  } = useScheduleFilter();
  const {
    data,
    refetch,
    isError: scheduleError,
    isLoading: scheduleIsLoading,
  } = useSchedule(searchParam);

  useEffect(() => {
    if (selectedCourse && selectedGroup && selectedSubgroup) {
      refetch();
      const param = {
        course: selectedCourse,
        group: selectedGroup,
        subgroup: selectedSubgroup,
      };
      localStorage.setItem('filter', JSON.stringify(param));
      setSearchParams(param);
    }
  }, [
    selectedCourse,
    selectedGroup,
    selectedSubgroup,
    refetch,
    setSearchParams,
  ]);

  useEffect(() => {
    if (data && selectedDay) {
      setSchedule(data.schedules.data[selectedDay]);
    }
  }, [data, selectedDay]);

  useEffect(() => {
    if (!isSuccess) {
      return;
    }
    
    const newArray = filter.schedules.map(item => ({
      data: {
        course: item.data.course.value,
        group: item.data.group.value,
        subgroup: item.data.subgroup.value,
      },
    }));

    const param = Object.fromEntries([...searchParams]);
    if (param.hasOwnProperty('subgroup')) {
      const check = newArray.find(
        item => JSON.stringify(item.data) === JSON.stringify(param)
      );
      if (!check) {
        setSearchParams({});
        return;
      }
      setSelectedCourse(param.course);
      setSelectedGroup(param.group);
      setSelectedSubgroup(param.subgroup);
      return;
    }

    const local = JSON.parse(localStorage.getItem('filter'));
    if (local && local.hasOwnProperty('subgroup')) {
      const check = newArray.find(
        item => JSON.stringify(item.data) === JSON.stringify(local)
      );
      if (!check) {
        localStorage.removeItem('filter');
        return;
      }
      setSelectedCourse(local.course);
      setSelectedGroup(local.group);
      setSelectedSubgroup(local.subgroup);
    }
  }, [filter, isSuccess, searchParams, setSearchParams]);

  useEffect(() => {
    if (filterError || scheduleError) {
      setSearchParams({});
      localStorage.removeItem('filter');
    }
  }, [filterError, scheduleError, setSearchParams]);

  const uniqueCourses =
    filter && Array.from(new Set(filter.schedules.map(obj => obj.data.course)));
  const uniqueGroups =
    filter &&
    Array.from(
      new Set(
        filter.schedules
          .filter(obj => obj.data.course.value === selectedCourse)
          .map(obj => obj.data.group)
      )
    );
  const uniqueSubgroups =
    filter &&
    Array.from(
      new Set(
        filter.schedules
          .filter(
            obj =>
              obj.data.course.value === selectedCourse &&
              obj.data.group.value === selectedGroup
          )
          .map(obj => obj.data.subgroup)
      )
    );

  const handleCourseChange = e => {
    setSelectedCourse(e.target.value);
    setSelectedGroup('');
    setSelectedSubgroup('');
  };

  const handleGroupChange = e => {
    setSelectedGroup(e.target.value);
    setSelectedSubgroup('');
  };

  const handleSubgroupChange = e => {
    setSelectedSubgroup(e.target.value);
  };

  const onChangeDay = e => {
    setSelectedDay(e.target.value);
  };

  return (
    <>
      <MotionWrap key={'schedule'}>
        <main>
          <SectionTitle>
            <Wrap>
              <Title variant="h1" textAlign={[null, 'center']}>
                Розклад_занять
              </Title>
              <TitleDescription textAlign={[null, 'center']}>
                Простий та зручний помічник, який покаже і розкаже що і де 🙂
              </TitleDescription>
            </Wrap>
          </SectionTitle>
          <SectionContent>
            <Wrap>
              <AnimatePresence mode="wait">
                {!(filterError || scheduleError) ? (
                  <MotionWrap key="data">
                    <Form>
                      <AnimatePresence mode="wait">
                        {!!filter && (
                          <FieldContainer
                            as={motion.div}
                            key={45345636}
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
                            <InputSelects
                              placeholder={'Обери курс ...'}
                              option={uniqueCourses}
                              icon={<EmojiFlagsOutlinedIcon />}
                              name={'course'}
                              label={'Курс'}
                              state={selectedCourse}
                              handleChange={handleCourseChange}
                            />
                            <InputSelects
                              placeholder={'Обери групу ...'}
                              option={uniqueGroups}
                              icon={<PeopleOutlineOutlinedIcon />}
                              name={'group'}
                              label={'Група'}
                              state={selectedGroup}
                              disabled={!selectedCourse}
                              handleChange={handleGroupChange}
                            />
                            <InputSelects
                              placeholder={'Обери підгрупу ...'}
                              option={uniqueSubgroups}
                              icon={<PermIdentityOutlinedIcon />}
                              name={'subgroup'}
                              label={'Підгрупа'}
                              state={selectedSubgroup}
                              disabled={!selectedGroup}
                              handleChange={handleSubgroupChange}
                            />
                          </FieldContainer>
                        )}
                        {filterIsLoading && (
                          <FieldContainer
                            as={motion.div}
                            key={34335535}
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
                            <Box width={'100%'}>
                              <Skeleton height={'75px'} width={'100%'} />
                            </Box>
                            <Box width={'100%'}>
                              <Skeleton height={'75px'} width={'100%'} />
                            </Box>
                            <Box width={'100%'}>
                              <Skeleton height={'75px'} width={'100%'} />
                            </Box>
                          </FieldContainer>
                        )}
                      </AnimatePresence>
                      <Fieldset
                        onChange={onChangeDay}
                        value={selectedDay}
                        id="RadioGroup"
                      >
                        {radio.map(({ value, checked, label }, index) => {
                          return (
                            <RadioWrap key={index}>
                              <RadioInput
                                type="radio"
                                value={value}
                                id={index}
                                name="RadioGroup"
                                defaultChecked={checked}
                              />
                              <RadioLable htmlFor={index}>{label}</RadioLable>
                            </RadioWrap>
                          );
                        })}
                      </Fieldset>
                    </Form>
                    <AnimatePresence mode="wait">
                      {!!schedule && (
                        <MotionWrap key={schedule[0]._id}>
                          <ul>
                            {schedule.map(
                              ({ _id, discipline, time, teacher, tag }) => {
                                return (
                                  <ScheduleItem key={_id}>
                                    <TimeContainer>
                                      <Time>{time}</Time>
                                    </TimeContainer>

                                    <InfoContainer>
                                      <InfoTitle>
                                        {discipline.data.disciplines}
                                      </InfoTitle>
                                      <Infolink src={tag}>{tag}</Infolink>
                                      <Box
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="space-between"
                                      >
                                        <InfoTeacher>
                                          {teacher.data.fullName}
                                        </InfoTeacher>
                                        <InfoImg src={teacher.data.image} />
                                      </Box>
                                    </InfoContainer>
                                  </ScheduleItem>
                                );
                              }
                            )}
                          </ul>
                        </MotionWrap>
                      )}
                      {scheduleIsLoading && (
                        <MotionWrap key={34323434343443534545}>
                          <ul>
                            {Array(4)
                              .fill()
                              .map((item, index) => {
                                return (
                                  <li key={index}>
                                    <InfoAltContainer />
                                  </li>
                                );
                              })}
                          </ul>
                        </MotionWrap>
                      )}
                    </AnimatePresence>
                  </MotionWrap>
                ) : (
                  <MotionWrap key="error">
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
