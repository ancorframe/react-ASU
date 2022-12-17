import { Box } from 'components/Box';
import { Footer } from 'components/Footer/Footer';
// import { PageDescription } from 'components/Templates/PageDescription/PageDescription';
// import { PageTitle } from 'components/Templates/PageTitle/PageTitle';
import { BookCard } from 'components/Literature/BookCard';
import {
  Item,
  LoadMore,
  Section,
  SectionTitle,
  Title,
  TitleDescription,
  Wrap,
} from 'components/Literature/Literaturte.styled';

const data = [
  {
    id: 1,
    to: 'https://www.google.com/search?q=%D1%8F%D0%BA%D0%B0%D1%81%D1%8C+%D0%BA%D0%BD%D0%B8%D0%B6%D0%BA%D0%B0&sxsrf=ALiCzsZWb1-FpB0UpH4A3NwE-YgjPQ9E-g%3A1671113991934&ei=By2bY5HUOIrRrgSNnq3YCQ&ved=0ahUKEwjR8_je6Pv7AhWKqIsKHQ1PC5sQ4dUDCA8&uact=5&oq=%D1%8F%D0%BA%D0%B0%D1%81%D1%8C+%D0%BA%D0%BD%D0%B8%D0%B6%D0%BA%D0%B0&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyBQghEKABOgUIABCABDoFCC4QgAQ6CAguENQCEIAEOgQIABAeOgYIABAeEAo6BwgAEIAEEBM6CAgAEBYQHhATSgQIQRgASgQIRhgAUABY1BlguBpoAHAAeACAAXWIAckHkgEEMTAuMZgBAKABAcABAQ&sclient=gws-wiz-serp',
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
  return (
    <>
      <main>
        <SectionTitle>
          <Title>Корисна_література</Title>
          <TitleDescription>
            Набір літератури та ресурсів. Тут є все, що тобі пригодиться у
            навчанні 😉
          </TitleDescription>
        </SectionTitle>
        <Section>
          <Wrap>
            {data.map(({ id, title, to, author }) => {
              return (
                <Item key={id}>
                  <BookCard to={to} title={title} author={author} />
                </Item>
              );
            })}
          </Wrap>
          <LoadMore>Завантажити_більше</LoadMore>
        </Section>
      </main>
      <Footer />
    </>
  );
};
