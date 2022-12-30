import { Footer } from 'components/Footer/Footer';
import {
  TitleContainer,
  Title,
  Img,
  ImgContainer,
  // Item,
  SectionImg,
  Section,
  Container,
  ContainerItem,
  Text,
  ItemText,
  List,
  ContainerList,
} from 'components/NewsDetail/NewsDetail.styled';

import img from '../image/passport/passport.png';
import { AditionalInfo } from 'components/AditionalInfo/AditionalInfo';
import { NewsRecomendation } from 'components/NewsRecomendation/NewsRecomendation';

const data = [
  {
    id: 1345345,
    img: img,
    title: 'День відкритих дверей - 5 корпус, 114 ауд.',
    info: [
      {
        id: 11,
        text: 'Запрошуємо майбутніх абітурієнтів на День відкритих дверей, який відбудеться у суботу, 14 березня, в аудиторії 217 головного корпусу Університету. Початок о 11:00.',
      },
      {
        id: 24,
        text: 'Дирекція Інституту й представники кафедр ознайомлять гостей з особливостями вступу на бакалаврський та магістерський рівні вищої освіти, розкажуть про навчання за скороченим терміном, дуальну форму навчання, можливість здобути другу вищу освіту та паралельне навчання студентів спеціальностей:',
      },
      {
        id: 134675465735652334525233,
        text: [
          { id: 262235341, text: '035 «Філологія»;' },
          { id: 226345745762, text: '121 «Інженерія програмного забезпечення»;' },
          { id: 234523723, text: '122 «Комп’ютерні науки»;' },
          { id: 2568568546824, text: '124 «Системний аналіз»;' },
          { id: 22523537645695, text: '126 «Інформаційні системи та технології»;' },
        ],
      },
      {
        id: 1235364575432,
        text: 'Програма:',
      },
      {
        id: 12346365235552535,
        text: [
          {
            id: 234665643561,
            text: 'Інформація про Національний університет «Львівська політехніка», ІКНІ та зміст освіти за спеціальностями;',
          },
          {
            id: 4434567542,
            text: 'Аналіз правил прийому до Університету у 2020 році;',
          },
          {
            id: 2334564363,
            text: 'Спілкування із представниками ІТ-компаній та студентами;',
          },
          {
            id: 2663112345432464,
            text: 'Огляд виставки розробок студентів та викладачів кафедр;',
          },
          { id: 23461234534235, text: 'Знайомство з умовами навчання на кафедрах.' },
        ],
      },
    ],
  },
];



export const NewsDetail = () => {
  return (
    <>
      <main>
        <SectionImg>
          <ImgContainer>
            <Img src={data[0].img} />
            <TitleContainer>
              <Title>{data[0].title}</Title>
            </TitleContainer>
          </ImgContainer>
        </SectionImg>
        <Section>
          <Container>
            <ContainerList>
            {data[0].info.map((info, index) => {
             
              return (
                <ContainerItem key={info.id}>
                  {Array.isArray(info.text) ? (
                    <List>
                      {info.text.map((text, index) => {
                        return (
                          <li key={text.id}>
                            <ItemText>{text.text}</ItemText>
                          </li>
                        );
                      })}
                    </List>
                  ) : (
                    <Text>{info.text}</Text>
                  )}
                </ContainerItem>
              );
            })}
            </ContainerList>
            <AditionalInfo/>
          </Container>
        </Section>
        <NewsRecomendation/>
      </main>

      <Footer />
    </>
  );
};
