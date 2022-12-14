import { Footer } from 'components/Footer/Footer';
import {
  ImgConteiner,
  Rank,
  Section,
  Title,
  Wrap,
  ItemAchievements,
  ListDescription,
  TitleAchievements,
  Text,
} from 'components/TeacherDetail/TeacherDetail.styled';
import { Img } from 'components/Teachers/Teachers.styled';

import img from '../image/teacherstest/Rectangle 19.png';

const data = {
  fullname: 'Батюк Анатолій Євгенович',
  rank: 'Доцент, кандидат технічних наук, доцент кафедри АСУ',
  src: '',
  info: [
    {
      id: 1,
      title: 'Освіта',
      info: [
        {
          id: 1,
          text: '1979–1984 – Львівський політехнічний інститут, спеціальність “Електронні обчислювальні машини, розроблення та експлуатація”, інженер-системотехнік',
        },
        {
          id: 2,
          text: '1988–1991 – Фізико-механічний інсти- тут ім. Г. В. Карпенка НАН України. Дисертація. Спеціальність 05.13.14 – системи обробки інформації та управління. Тема: “Локально-адаптивні алгоритми та спеціалізовані високопродуктивні засоби фільтрації зображень в реальному часі”, кандидат технічних наук',
        },
      ],
    },
    {
      id: 2,
      title: 'Професійний досвід',
      info: [
        {
          id: 1,
          text: '1984–1995 – інженер, старший інженер, молодший науковий співробітник, науковий співробітник, головний конструктор проекту, Фізико-механічний інститут ім. Г. В. Карпенка НАН України; наукові дослідження, робота над кандидатською дисертацією',
        },
        {
          id: 2,
          text: '1995–1997– старший викладач Національного університету “Львівська політехніка”',
        },
        {
          id: 3,
          text: '1997 до сьогодні – доцент каф. АСУ Національного університету “Львівська політехніка”',
        },
      ],
    },
    {
      id: 3,
      title: 'Наукові інтереси',
      info: [
        {
          id: 1,
          text: 'Дослідження і розроблення спеціалізованих процесорів цифрової обробки зображень. Дослідження і розроблення інфор маційноаналі тичних систем та систем підтримки прийняття рішень у галузі еконо міки та медицини; обробка інформації засобами нейронних мереж',
        },
        {
          id: 2,
          text: 'Працював за грантами Науково-технологічного Центру в Україні:',
        },
        {
          id: 3,
          text: [
            {
              id: 1,
              text: 'у 1997–1999 – грант “Розробка інформаційних технологій функціонування, програмування і налаштування нейронних систем паралельної обробки сигналів”',
            },
            {
              id: 2,
              text: 'у 1999–2001 – ґрант “Розробка компютерної технологічної установки для нанесення зображень на металеві поверхні”',
            },
            {
              id: 3,
              text: 'у 2002–2004 – грант “Інформаційні технології інвентаризації парникових газів та прогнозування вуглецевого балансу України”',
            },
            {
              id: 4,
              text: 'у 2004–2006 – грант “Інформаційний відеоскоп надвисокої роздільної здатності для дослідження запрограмованої смерті (апоптозу) клітин пухлин людини',
            },
            {
              id: 5,
              text: 'Учасник проекту “Розробка типових рішень щодо інформатизації наукових центрів НАН України і МОН України”',
            },
          ],
        },

        {
          id: 4,
          text: 'Автор та співавтор понад 70 наукових праць, зокрема: 1 монографії, 2 посібників (1 з грифом МОН Ураїни) та близько 20 авторських свідоцтв СРСР і патентів України',
        },
      ],
    },
    {
      id: 4,
      title: 'Інша діяльність',
      info: [
        {
          id: 1,
          text: 'Вчений секретар Інституту комп’ютерних наук та інформаційних технологій Національного університету “Львівська політехніка”',
        },
        {
          id: 2,
          text: 'Вчений секретар спеціалізованої вченої ради Д35.052.14 при Національному університеті “Львівська політехніка”',
        },
      ],
    },
    {
      id: 5,
      title: 'Нагороди',
      info: [
        {
          id: 1,
          text: 'Медаль “За кращу студентську наукову роботу” Міністерства вищої і середньої спеціальної освіти СРСР (1984 рік)',
        },
        {
          id: 2,
          text: 'Медаль імені академіка С. П. Корольова Федерації космонавтики СРСР (1991 рік)',
        },
        {
          id: 3,
          text: 'Медаль імені академіка М. В. Келдиша Федерації космонавтики Росії (1993 рік)',
        },
        {
          id: 4,
          text: 'Винахідник СРСР (1990 рік).',
        },
      ],
    },
  ],
};

export const TeacherDetail = () => {
  return (
    <>
      <main>
        <Wrap>
          <ImgConteiner>
            <Img src={img} />
          </ImgConteiner>
          <Section>
            <Title>{data.fullname}</Title>
            <Rank>{data.rank}</Rank>

            <ul>
              {data.info.map(({ id, title, info }) => {
                return (
                  <ItemAchievements key={id}>
                    <TitleAchievements>{title}</TitleAchievements>
                    <ListDescription>
                      {info.map(info => {
                        if (Array.isArray(info.text)) {
                          return (
                            <ListDescription key={info.id}>
                              {info.text.map(info => {
                                return (
                                  <li key={info.id}>
                                    <Text>{info.text}</Text>
                                  </li>
                                );
                              })}
                            </ListDescription>
                          );
                        } else {
                          return (
                            <li key={info.id}>
                              <Text>{info.text}</Text>
                            </li>
                          );
                        }
                      })}
                    </ListDescription>
                  </ItemAchievements>
                );
              })}
            </ul>
          </Section>
        </Wrap>
      </main>
      <Footer />
    </>
  );
};
