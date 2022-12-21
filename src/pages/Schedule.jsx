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
  // RadioButtonWrap,
  RadioInput,
  RadioLable,
  RadioWrap,
  ScheduleItem,
  Section,
  SectionTitle,
  Time,
  TimeContainer,
  Title,
  TitleDescription,
} from 'components/Schedule/Schedule.styled';
import { useForm, Controller } from 'react-hook-form';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import img from '../image/teacher.png';

const radio = [
  { value: 'mon', checked: true, label: 'ПН' },
  { value: 'tue', label: 'ВТ' },
  { value: 'wed', label: 'СР' },
  { value: 'thu', label: 'ЧТ' },
  { value: 'fri', label: 'ПТ' },
];

const data = [
  {
    id: 1,
    time: '8:30',
    info: [
      
    ],
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
    info: [
      
    ],
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
          <Title>Розклад_занять</Title>
          <TitleDescription>
            Простий та зручний помічник, який покаже і розкаже що і де 🙂
          </TitleDescription>
        </SectionTitle>
        <Section>
          <Form>
            <FieldContainer>
              <InputWrap>
                <Label htmlFor="select">Курс</Label>
                <Box position="relative">
                  <Controller
                    render={({ field }) => (
                      <InputSelect {...field}>
                        <option value="" disabled hidden>
                          Обери спеціальність ...
                        </option>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                      </InputSelect>
                    )}
                    name="select"
                    control={control}
                    defaultValue=""
                  />
                  <Box position="absolute" right="16px" top="16px">
                    <EmojiFlagsOutlinedIcon />
                  </Box>
                </Box>
              </InputWrap>

              <InputWrap>
                <Label htmlFor="select1">група</Label>
                <Box position="relative">
                  <Controller
                    render={({ field }) => (
                      <InputSelect {...field}>
                        <option value="" disabled hidden>
                          Обери групу ...
                        </option>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                      </InputSelect>
                    )}
                    name="select1"
                    control={control}
                    defaultValue=""
                  />
                  <Box position="absolute" right="16px" top="16px">
                    <PeopleOutlineOutlinedIcon />
                  </Box>
                </Box>
              </InputWrap>

              <InputWrap>
                <Label htmlFor="select2">Підгрупа</Label>
                <Box position="relative">
                  <Controller
                    render={({ field }) => (
                      <InputSelect {...field}>
                        <option value="" disabled hidden>
                          Перша
                        </option>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                      </InputSelect>
                    )}
                    name="select2"
                    control={control}
                    defaultValue=""
                  />
                  <Box position="absolute" right="16px" top="16px">
                    <PermIdentityOutlinedIcon />
                  </Box>
                </Box>
              </InputWrap>
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
                  
                    {info.length !== 0 ? 
                      <InfoContainer>
                        <InfoTitle>{info[0].title}</InfoTitle>
                        <Infolink src={info[0].link}>Link</Infolink>
                        <Box display='flex' alignItems='center' justifyContent='space-between'>
                          <InfoTeacher>{info[0].teacher}</InfoTeacher>
                          <InfoImg src={info[0].img} />
                      </Box></InfoContainer> : <InfoAltConteiner/>
                      
                    }
                  
                </ScheduleItem>
              );
            })}
          </ul>
        </Section>
      </main>
      <Footer />
    </>
  );
};


