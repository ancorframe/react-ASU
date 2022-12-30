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


const data = [
  {
    id: 1,
    to: `https://www.google.com/search?q=%D1%8F%D0%BA%D0%B0%D1%81%D1%8C+%D0%BA%D0%BD%D0%B8%D0%B6%D0%BA%D0%B0&sxsrf=ALiCzsZWb1-FpB0UpH4A3NwE-YgjPQ9E-g%3A1671113991934&ei=By2bY5HUOIrRrgSNnq3YCQ&ved=0ahUKEwjR8_je6Pv7AhWKqIsKHQ1PC5sQ4dUDCA8&uact=5&oq=%D1%8F%D0%BA%D0%B0%D1%81%D1%8C+%D0%BA%D0%BD%D0%B8%D0%B6%D0%BA%D0%B0&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyBQghEKABOgUIABCABDoFCC4QgAQ6CAguENQCEIAEOgQIABAeOgYIABAeEAo6BwgAEIAEEBM6CAgAEBYQHhATSgQIQRgASgQIRhgAUABY1BlguBpoAHAAeACAAXWIAckHkgEEMTAuMZgBAKABAcABAQ&sclient=gws-wiz-serp`,
    title: 'Atomic Design',
    author: 'Brad Frost, 2017',
  },
  {
    id: 2,
    to: 'https://www.google.com/search?q=%D1%8F%D0%BA%D0%B0%D1%81%D1%8C+%D0%BA%D0%BD%D0%B8%D0%B6%D0%BA%D0%B0&sxsrf=ALiCzsZWb1-FpB0UpH4A3NwE-YgjPQ9E-g%3A1671113991934&ei=By2bY5HUOIrRrgSNnq3YCQ&ved=0ahUKEwjR8_je6Pv7AhWKqIsKHQ1PC5sQ4dUDCA8&uact=5&oq=%D1%8F%D0%BA%D0%B0%D1%81%D1%8C+%D0%BA%D0%BD%D0%B8%D0%B6%D0%BA%D0%B0&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyBQghEKABOgUIABCABDoFCC4QgAQ6CAguENQCEIAEOgQIABAeOgYIABAeEAo6BwgAEIAEEBM6CAgAEBYQHhATSgQIQRgASgQIRhgAUABY1BlguBpoAHAAeACAAXWIAckHkgEEMTAuMZgBAKABAcABAQ&sclient=gws-wiz-serp',
    title: 'Atomic Design',
    author: 'Brad Frost, 2017',
  },
  {
    id: 3,
    to: 'https://www.google.com/search?q=%D1%8F%D0%BA%D0%B0%D1%81%D1%8C+%D0%BA%D0%BD%D0%B8%D0%B6%D0%BA%D0%B0&sxsrf=ALiCzsZWb1-FpB0UpH4A3NwE-YgjPQ9E-g%3A1671113991934&ei=By2bY5HUOIrRrgSNnq3YCQ&ved=0ahUKEwjR8_je6Pv7AhWKqIsKHQ1PC5sQ4dUDCA8&uact=5&oq=%D1%8F%D0%BA%D0%B0%D1%81%D1%8C+%D0%BA%D0%BD%D0%B8%D0%B6%D0%BA%D0%B0&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyBQghEKABOgUIABCABDoFCC4QgAQ6CAguENQCEIAEOgQIABAeOgYIABAeEAo6BwgAEIAEEBM6CAgAEBYQHhATSgQIQRgASgQIRhgAUABY1BlguBpoAHAAeACAAXWIAckHkgEEMTAuMZgBAKABAcABAQ&sclient=gws-wiz-serp',
    title: 'Atomic Design',
    author: 'Brad Frost, 2017',
  },
  {
    id: 4,
    to: 'https://www.google.com/search?q=%D1%8F%D0%BA%D0%B0%D1%81%D1%8C+%D0%BA%D0%BD%D0%B8%D0%B6%D0%BA%D0%B0&sxsrf=ALiCzsZWb1-FpB0UpH4A3NwE-YgjPQ9E-g%3A1671113991934&ei=By2bY5HUOIrRrgSNnq3YCQ&ved=0ahUKEwjR8_je6Pv7AhWKqIsKHQ1PC5sQ4dUDCA8&uact=5&oq=%D1%8F%D0%BA%D0%B0%D1%81%D1%8C+%D0%BA%D0%BD%D0%B8%D0%B6%D0%BA%D0%B0&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyBQghEKABOgUIABCABDoFCC4QgAQ6CAguENQCEIAEOgQIABAeOgYIABAeEAo6BwgAEIAEEBM6CAgAEBYQHhATSgQIQRgASgQIRhgAUABY1BlguBpoAHAAeACAAXWIAckHkgEEMTAuMZgBAKABAcABAQ&sclient=gws-wiz-serp',
    title: 'Atomic Design',
    author: 'Brad Frost, 2017',
  },
  {
    id: 5,
    to: 'https://www.google.com/search?q=%D1%8F%D0%BA%D0%B0%D1%81%D1%8C+%D0%BA%D0%BD%D0%B8%D0%B6%D0%BA%D0%B0&sxsrf=ALiCzsZWb1-FpB0UpH4A3NwE-YgjPQ9E-g%3A1671113991934&ei=By2bY5HUOIrRrgSNnq3YCQ&ved=0ahUKEwjR8_je6Pv7AhWKqIsKHQ1PC5sQ4dUDCA8&uact=5&oq=%D1%8F%D0%BA%D0%B0%D1%81%D1%8C+%D0%BA%D0%BD%D0%B8%D0%B6%D0%BA%D0%B0&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyBQghEKABOgUIABCABDoFCC4QgAQ6CAguENQCEIAEOgQIABAeOgYIABAeEAo6BwgAEIAEEBM6CAgAEBYQHhATSgQIQRgASgQIRhgAUABY1BlguBpoAHAAeACAAXWIAckHkgEEMTAuMZgBAKABAcABAQ&sclient=gws-wiz-serp',
    title: 'Atomic Design',
    author: 'Brad Frost, 2017',
  },
];

export const Literature = () => {
  const { control, watch, reset } = useForm();

  const watchFields = watch();
  console.log('watchFields', watchFields);

  return (
    <>
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
            <Form>
              <InputWrap>
                <Label htmlFor="search">Пошук</Label>
                <Box position="relative">
                  <Controller
                    render={({ field }) => (
                      <InputField
                        {...field}
                        placeholder="Назва книги або ресурсу ..."
                        autoComplete="off"
                      />
                    )}
                    name="search"
                    control={control}
                    defaultValue=""
                  />
                  <Box position="absolute" right="16px" top="16px">
                    <SearchIcon />
                  </Box>
                </Box>
              </InputWrap>
              <InputWrap>
                <Label htmlFor="select">Напрям</Label>
                <Box position="relative">
                  <Controller
                    render={({ field }) => (
                      <InputSelect {...field}>
                        <option value="" disabled hidden>
                          Обери фільтр ...
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
                    <FilterAltOutlinedIcon />
                  </Box>
                </Box>
              </InputWrap>
              <ResetButton type="button" onClick={reset}>
                {window.innerWidth < 849 ? 'Оновити' : <RefreshRoundedIcon />}
              </ResetButton>
            </Form>

            <ListWrap mb={[7, 8]}>
              {data.map(({ id, title, to, author }) => {
                return (
                  <Item key={id}>
                    <BookCard to={to} title={title} author={author} />
                  </Item>
                );
              })}
            </ListWrap>
            <LoadMore>Завантажити_більше</LoadMore>
          </Wrap>
        </SectionContent>
      </main>
      <Footer />
    </>
  );
};
