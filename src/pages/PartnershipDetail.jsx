import { AditionalInfo } from 'components/AditionalInfo/AditionalInfo';
import { Footer } from 'components/Footer/Footer';

import {
  About,
  Button,
  ImgContainer,
  ButtonList,
  Img,
  LogoContainer,
  Logo,
  DescriptonContainer,
  ImgLink,
  InfoContainer,
  ItemDetail,
  ItemTextDetail,
} from 'components/PartnershipDetail/PartnershipDetail.styled';

import img from '../image/partnertest/univer.png';
import logo from '../image/partnertest/univlogo.png';

import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { SectionTitle } from 'components/Templates/SectionTitle/SectionTitle';
import { Title } from 'components/Templates/Title/Title';
import { Wrap } from 'components/Templates/Wrap/Wrap';
import { Article } from 'components/Templates/Article/Article';
import { Box } from 'components/Box';

const data = [
  {
    id: 1,
    title: 'Освітньо-наукова_співпраця',

    tag: [
      { id: 1444, text: 'Сілезький університет', href: '#key' },
      { id: 24444, text: 'Жешувський університет', href: '#data' },
    ],
    info: [
      {
        id: 333,

        img: img,
        title: 'Сілезький технологічний університет',
        logo: logo,
        href: 'key',
        link: 'https://silen.edu',
        detail: [
          {
            id: 144,
            title: 'Програма обміну',
            text: 'Програма обміну включала двосеместрове стипендіальне навчання студентів спеціальності “Інформаційні управляючі системи та технології” на факультеті автоматики, електроніки та комп’ютерних наук Сілезького політехнічного університету. На навчання у Сілезький університет двічі скеровувалися групи з п’ятьох студентів-магістрів кафедри АСУ Львівської політехніки. До першої п’ятірки потрапили Арсен Заграй, Сергій Батюк, Уляна Поліщук, Мирон Мавко та Сергій Криницький. До другої групи – Сергій Пилипчук, Дмитро Санду, Марта Машевська, Олександр Фесенко, Ірина Марецька. Своєю чергою, викладачі Сілезького університету упродовж двох місяців обмінювались науковим та освітнім досвідом у стінах Львівської політехніки.',
          },
          {
            id: 223,
            title: 'Навчання',
            text: [
              {
                id: 112,
                text: 'Навчання в університеті проводилось англійською мовою. Серед дисциплін, які вивчали студенти кафедри, були: паралельне програмування, Java і програмування в Інтернеті, робототехніка, безпровідні комп’ютерні мережі, промислові мережі та бази даних, комп’ютерний зір та біометричні системи, адаптивні управляючі системи, сенсори та активатори, програмні засоби управління та інші. Важливою роль для підвищення ефективності навчального процесу відігравала практична підготовка. Наявність сучасного обладнання та програмних засобів забезпечувала максимальне наближення навчальних завдань до реальних прикладних задач.',
              },
              {
                id: 231213,
                text: 'Після закінчення усі випускники отримали сертифікат про закінчення курсу та змогу продовжити навчання для отримання диплому Сілезького університету. Четверо студентів: А. Заграй, Д. Санду, О. Фесенко та І. Марецька скористалися цією нагодою та паралельно із захистом магістерських робіт у рідній Львівській політехніці продовжили навчання у Польщі та отримали звання і дипломи магістрів Сілезького політехнічного університету.',
              },
            ],
          },
        ],
      },
      {
        id: 2222,
        img: img,
        title: 'Сілезький технологічний університет',
        logo: logo,
        href: 'data',
        link: 'https://silen.edu',
        detail:
          'Після закінчення усі випускники отримали сертифікат про закінчення курсу та змогу продовжити навчання для отримання диплому Сілезького університету. Четверо студентів: А. Заграй, Д. Санду, О. Фесенко та І. Марецька скористалися цією нагодою та паралельно із захистом магістерських робіт у рідній Львівській політехніці продовжили навчання у Польщі та отримали звання і дипломи магістрів Сілезького політехнічного університету.',
      },
      {
        id: 3343,

        img: img,
        title: 'Сілезький технологічний університет',
        logo: logo,
        href: 'key',
        link: 'https://silen.edu',
        detail: [
          {
            id: 144,
            title: 'Програма обміну',
            text: 'Програма обміну включала двосеместрове стипендіальне навчання студентів спеціальності “Інформаційні управляючі системи та технології” на факультеті автоматики, електроніки та комп’ютерних наук Сілезького політехнічного університету. На навчання у Сілезький університет двічі скеровувалися групи з п’ятьох студентів-магістрів кафедри АСУ Львівської політехніки. До першої п’ятірки потрапили Арсен Заграй, Сергій Батюк, Уляна Поліщук, Мирон Мавко та Сергій Криницький. До другої групи – Сергій Пилипчук, Дмитро Санду, Марта Машевська, Олександр Фесенко, Ірина Марецька. Своєю чергою, викладачі Сілезького університету упродовж двох місяців обмінювались науковим та освітнім досвідом у стінах Львівської політехніки.',
          },
        ],
      },
    ],
  },
];

export const PartnershipDetail = () => {
  const { title, tag, info } = data[0];

  const onClick = link => {
    window.location.href = `${link}`;
  };

  return (
    <>
      <main>
        <SectionTitle>
          <Wrap>
            <Title variant="h1" mb={[8, 6]} textAlign={[null, 'center']}>
              {title}
            </Title>
            <ButtonList>
              {tag.map(({ text, id, href }) => {
                return (
                  <li key={id}>
                    <Button
                      type="button"
                      onClick={() => {
                        onClick(href);
                      }}
                    >
                      {text}
                    </Button>
                  </li>
                );
              })}
            </ButtonList>
          </Wrap>
        </SectionTitle>
        <SectionContent>
          <Wrap p={[0, 0]} maxWidth={[null, '1248px']}>
            {info.map(({ id, img, title, logo, href, detail, link }) => {
              return (
                <About key={id} id={href}>
                  <ImgContainer>
                    <Img src={img} alt="" />
                    <LogoContainer>
                      <Logo src={logo} alt="" />
                    </LogoContainer>
                    <DescriptonContainer>
                      <Box py={8} px={[7, 9]}>
                        <Title variant="h2" mb={2}>
                          {title}
                        </Title>
                        <ImgLink href={link}>{link}</ImgLink>
                      </Box>
                    </DescriptonContainer>
                  </ImgContainer>
                  <InfoContainer>
                    {Array.isArray(detail) ? (
                      <ul>
                        {detail.map(detail => {
                          return (
                            <ItemDetail key={detail.id}>
                              <Title
                                variant="h2"
                                mb={9}
                                pb={[2, 6]}
                                borderBottom="titles"
                              >
                                {detail.title}
                              </Title>
                              {Array.isArray(detail.text) ? (
                                <ul>
                                  {detail.text.map(({ id, text }) => {
                                    return (
                                      <ItemTextDetail key={id}>
                                        <Article>{text}</Article>
                                      </ItemTextDetail>
                                    );
                                  })}
                                </ul>
                              ) : (
                                <Article>{detail.text}</Article>
                              )}
                            </ItemDetail>
                          );
                        })}
                      </ul>
                    ) : (
                      <Article>{detail}</Article>
                    )}
                  </InfoContainer>
                  <AditionalInfo />
                </About>
              );
            })}
          </Wrap>
        </SectionContent>
      </main>
      <Footer />
    </>
  );
};
