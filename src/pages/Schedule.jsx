import { Box } from 'components/Box';
import { Footer } from 'components/Footer/Footer';
import {
  FieldContainer,
  Fieldset,
  Form,
  InfoAltConteiner,
  InfoContainer,
  InfoImg,
  Infolink,
  InfoTeacher,
  InfoTitle,
  InputSelect,
  InputWrap,
  Label,
  RadioInput,
  RadioLable,
  RadioWrap,
  ScheduleItem,
  Time,
  TimeContainer,
} from 'components/Schedule/Schedule.styled';
import { useForm, Controller } from 'react-hook-form';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import img from '../image/teacher.png';

import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { SectionTitle } from 'components/Templates/SectionTitle/SectionTitle';
import { Title } from 'components/Templates/Title/Title';
import { Wrap } from 'components/Templates/Wrap/Wrap';
import { TitleDescription } from 'components/Templates/TitleDescription/TitleDescription';




const radio = [
  { value: 'mon', checked: true, label: 'ПН' },
  { value: 'tue', label: 'ВТ' },
  { value: 'wed', label: 'СР' },
  { value: 'thu', label: 'ЧТ' },
  { value: 'fri', label: 'ПТ' },
];



const selects = [
  {
    name: 'course',
    label: 'Курс',
    option: [
      { value: 1, name: 1 },
      { value: 2, name: 2 },
      { value: 3, name: 3 },
      { value: 4, name: 4 },
    ],
    placeholder: ' Обери курс ...',
    icon: <EmojiFlagsOutlinedIcon />,
  },
  {
    name: 'group',
    label: 'група',
    option: [
      { value: 1, name: 1 },
      { value: 2, name: 2 },
      { value: 3, name: 3 },
      { value: 4, name: 4 },
    ],
    placeholder: ' Обери групу ...',
    icon: <PeopleOutlineOutlinedIcon />,
  },
  {
    name: 'subgroup',
    label: 'Підгрупа',
    option: [
      { value: 1, name: 'перша' },
      { value: 2, name: 'друга' },
      { value: 3, name: 'третя' },
      { value: 4, name: 'четверта' },
    ],
    placeholder: ' Перша',
    defaultValue: '1',
    icon: <PermIdentityOutlinedIcon />,
  },
];






const data = [
  {
    id: 1,
    time: '8:30',
    info: [],
  },
  {
    id: 2,
    time: '10:20',
    info: [
      {
        title: 'Логічне програмування',
        link: '#',
        teacher: 'Чкалов О.В.',
        img: img,
      },
    ],
  },
  {
    id: 3,
    time: '8:30',
    info: [],
  },
  {
    id: 4,
    time: '12:10',
    info: [
      {
        title:
          'Математичне та програмне забезпечення багатопроцесорних обчислювальних систем',
        link: '#',
        teacher: 'Чкалов О.В.',
        img: img,
      },
    ],
  },
  {
    id: 5,
    time: '14',
    info: [
      {
        title:
          'Математичне та програмне забезпечення багатопроцесорних обчислювальних систем',
        link: '#',
        teacher: 'Чкалов О.В.',
        img: img,
      },
    ],
  },
  {
    id: 6,
    time: '8:30',
    info: [
      {
        title:
          'Математичне та програмне забезпечення багатопроцесорних обчислювальних систем',
        link: '#',
        teacher: 'Чкалов О.В.',
        img: img,
      },
    ],
  },
  {
    id: 7,
    time: '8:30',
    info: [
      {
        title:
          'Математичне та програмне забезпечення багатопроцесорних обчислювальних систем',
        link: '#',
        teacher: 'Чкалов О.В.',
        img: img,
      },
    ],
  },
];

export const Schedule = () => {
  const { control, watch } = useForm();

  const watchFields = watch();
  console.log('watchFields', watchFields);
  return (
    <>
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
            <Form>
              <FieldContainer>
                {selects.map(
                  (
                    { name, label, option, placeholder, defaultValue, icon },
                    index
                  ) => {
                    return (
                      <InputWrap key={index}>
                        <Label htmlFor={name}>{label}</Label>
                        <Box position="relative">
                          <Controller
                            render={({ field }) => (
                              <InputSelect {...field}>
                                <option value="" disabled hidden>
                                  {placeholder}
                                </option>
                                {option.map((option, index) => (
                                  <option key={index} value={option.value}>
                                    {option.name}
                                  </option>
                                ))}
                              </InputSelect>
                            )}
                            name={name}
                            control={control}
                            defaultValue={defaultValue ? `${defaultValue}` : ''}
                          />
                          <Box position="absolute" right="16px" top="16px">
                            {icon}
                          </Box>
                        </Box>
                      </InputWrap>
                    );
                  }
                )}
              </FieldContainer>

              <Controller
                render={({ field: { onChange, value } }) => (
                  <Fieldset onChange={onChange} value={value} id="RadioGroup">
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
                )}
                name="RadioGroup"
                control={control}
                defaultValue="mon"
              />
            </Form>

            <ul>
              {data.map(({ id, time, info }) => {
                return (
                  <ScheduleItem key={id}>
                    <TimeContainer>
                      <Time>{time}</Time>
                    </TimeContainer>

                    {info.length !== 0 ? (
                      <InfoContainer>
                        <InfoTitle>{info[0].title}</InfoTitle>
                        <Infolink src={info[0].link}>Link</Infolink>
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <InfoTeacher>{info[0].teacher}</InfoTeacher>
                          <InfoImg src={info[0].img} />
                        </Box>
                      </InfoContainer>
                    ) : (
                      <InfoAltConteiner />
                    )}
                  </ScheduleItem>
                );
              })}
            </ul>
          </Wrap>
        </SectionContent>
      </main>
      <Footer />
    </>
  );
};
