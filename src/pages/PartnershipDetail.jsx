import { AditionalInfo } from 'components/AditionalInfo/AditionalInfo';
import { Footer } from 'components/Footer/Footer';

import {
  About,
  Button,
  ImgContainer,
  Section,
  SectionTitle,
  Title,
  Wrap,
  Img,
  LogoContainer,
  Logo,
  DescriptonContainer,
  ImgLink,
  ImgTitle,
  Wrapper,
  InfoContainer,
  TitleDetail,
  ItemDetail,
  TextDetail,
  ItemTextDetail,
} from 'components/PartnershipDetail/PartnershipDetail.styled';

import img from '../image/univer.png';
import logo from '../image/univlogo.png';

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
  console.log('tag', tag);

  const onClick = link => {
    window.location.href = `${link}`;
  };



  return (
    <>
      <main>
        <SectionTitle>
          <Title>{title}</Title>
          <Wrap>
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
                </Button></li>
              );
            })}
          </Wrap>
        </SectionTitle>
        <Section>
          {info.map(({ id, img, title, logo, href, detail, link }) => {
            return (
              <About key={id} id={href}>
                <ImgContainer>
                  <Img src={img} alt="" />
                  <LogoContainer>
                    <Logo src={logo} alt="" />
                  </LogoContainer>
                  <DescriptonContainer>
                    <Wrapper>
                      <ImgTitle>{title}</ImgTitle>
                      <ImgLink href={link}>{link}</ImgLink>
                    </Wrapper>
                  </DescriptonContainer>
                </ImgContainer>
                <InfoContainer>
                  {Array.isArray(detail) ? (
                    <ul>
                      {detail.map(detail => {
                        return (
                          <ItemDetail key={detail.id}>
                            <TitleDetail>{detail.title}</TitleDetail>
                            {Array.isArray(detail.text) ? (
                              <ul>
                                {detail.text.map(({ id, text }) => {
                                  return (
                                    <ItemTextDetail key={id}>
                                      <TextDetail>{text}</TextDetail>
                                    </ItemTextDetail>
                                  );
                                })}
                              </ul>
                            ) : (
                              <TextDetail>{detail.text}</TextDetail>
                            )}
                          </ItemDetail>
                        );
                      })}
                    </ul>
                  ) : (
                    <TextDetail>{detail}</TextDetail>
                  )}
                </InfoContainer>
                <AditionalInfo />
              </About>
            );
          })}
        </Section>
      </main>
      <Footer />
    </>
  );
};
