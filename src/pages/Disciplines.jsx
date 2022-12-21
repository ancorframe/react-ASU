// import { Box } from 'components/Box';
import { Box } from 'components/Box';
import {
  CardTitle,
  Description,
  Form,
  InputSelect,
  InputWrap,
  Item,
  Label,
  Link,
  Section,
  SectionTitle,
  Title,
  Wrap,
} from 'components/Desciplines/Desciplines.styled';
import { Footer } from 'components/Footer/Footer';
// import { PageDescription } from 'components/Templates/PageDescription/PageDescription';
// import { PageTitle } from 'components/Templates/PageTitle/PageTitle';
import { useForm, Controller } from 'react-hook-form';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';


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
          <Title>Перелік_дисциплін</Title>
          <Description>
            Кафедра АСУ готує фахівців освітньо-кваліфікаційного рівнів
            “бакалавр” та “магістр” за спеціальностями 122 “Комп’ютерні науки”,
            124 “Системний аналіз”, 126 “Інформаційні системи та технології”
          </Description>
        </SectionTitle>
        <Section>
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
          <Wrap>
            {data.map(data => (
              <Item key={data.id}>
                <Link>
                  <CardTitle>{data.text}</CardTitle>
                </Link>
              </Item>
            ))}
          </Wrap>
        </Section>
      </main>

      <Footer />
    </>
  );
};
