// import { Box } from 'components/Box';
import { Box } from 'components/Box';
import {
  CardTitle,
  Form,
  InputSelect,
  InputWrap,
  Item,
  Label,
  Link,
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
import { ListWrap } from 'components/Templates/ListWrap/ListWrap';

const data = [
  { id: 1, text: 'Логічне програмування' },
  {
    id: 2,
    text: 'Математичне та програмне забезпечення багатопроцесорних обчислювальних систем',
  },
  { id: 3, text: 'Проблемно-орієнтовані обчислювальні комплекси та системи' },
  {
    id: 4,
    text: 'Інструментальні засоби проектування та розробки автоматизованих систем',
  },
  {
    id: 5,
    text: 'Математичне та програмне забезпечення багатопроцесорних обчислювальних систем',
  },
];

export const Disciplines = () => {
  const { control, watch } = useForm();

  const watchFields = watch();
  console.log('watchFields', watchFields);

  return (
    <>
      <main>
        <SectionTitle>
          <Wrap>
            <Title variant="h1" textAlign={[null, 'center']} mb={[3,6]}>
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
            <Form>
              <InputWrap>
                <Label htmlFor="select">Напрям</Label>
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
                    <BusinessCenterOutlinedIcon />
                  </Box>
                </Box>
              </InputWrap>
              <InputWrap>
                <Label htmlFor="select1">Напрям</Label>
                <Box position="relative">
                  <Controller
                    render={({ field }) => (
                      <InputSelect {...field}>
                        <option value="" disabled hidden>
                          Обери курс ...
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
                    <EmojiFlagsOutlinedIcon />
                  </Box>
                </Box>
              </InputWrap>
            </Form>
            <ListWrap gridTemplateColumns="repeat(auto-fit, minmax(min(100%, 401px), 1fr))">
              {data.map(data => (
                <Item key={data.id}>
                  <Link>
                    <CardTitle>{data.text}</CardTitle>
                  </Link>
                </Item>
              ))}
            </ListWrap>
          </Wrap>
        </SectionContent>
      </main>

      <Footer />
    </>
  );
};
