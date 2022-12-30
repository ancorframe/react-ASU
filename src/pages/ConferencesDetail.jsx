

import { Footer } from 'components/Footer/Footer';

import {
  TitleContainer,
//   Title,
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
import {
  InfoContainer,
  InfoDescription,
  InfoImg,
  Time,
  Title,
} from 'components/ConferencesDetail/ConferencesDetail.styled';

const data = [
  {
    id: 1345345,
    img: img,
        title: 'День відкритих дверей - 5 корпус, 114 ауд.',
    time:'22.11.2022 / 13:45',
    info: [
      {
        id: 11,
        img: img,
        description: 'Виступ Любомира Романківа',
      },
      {
        id: 24,
        text: 'На кафедрі регулярно про водиться науковий семінар “Методи, моделі та компоненти інфор маційних управляючих систем і технологій”. Тематика нау кового семінару відповідає напряму наукової діяльності кафедри, а його проведення спрямоване на підвищення наукового рів ня працівників та підвищення ефективності навчального про цесу. Науковим керівником семінару є завідувач кафед ри, доктор технічних наук, про фесор М. О. Медиковський, секретарем семінару – кан дидат технічних наук, старший викладач А. В. Дорошенко.',
      },

      {
        id: 1235364575432,
        text: 'На семінарі обговорюються питання новітніх інтелектуаль них інформаційних та інфор маційно-аналітичних технології управління в галузі інтегрованих АСУ та результати дисертаційних технологій. Доповідачами на семінарах є як провідні науковці кафедри, так і аспіранти кафедри, а також запрошені науковці інших організацій. Лише за останні п’ять років було проведено понад 40 семінарів, на яких заслухано близько 80 доповідей.',
      },
      
    ],
  },
];

export const ConferencesDetail = () => {
  return (
    <>
      <main>
        <SectionImg>
          <ImgContainer>
            <Img src={data[0].img} />
            <TitleContainer>
              <Title>{data[0].title}</Title>
              <Time>{data[0].time}</Time>
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
                      <>
                        {info.text && <Text>{info.text}</Text>}
                        {info.img && (
                          <InfoContainer>
                            <InfoImg src={info.img} />
                            {info.description && (
                              <InfoDescription>
                                {info.description}
                              </InfoDescription>
                            )}
                          </InfoContainer>
                        )}
                      </>
                    )}
                  </ContainerItem>
                );
              })}
            </ContainerList>
            <AditionalInfo />
          </Container>
        </Section>
        <NewsRecomendation title="Інші конференції" />
      </main>

      <Footer />
    </>
  );
};
