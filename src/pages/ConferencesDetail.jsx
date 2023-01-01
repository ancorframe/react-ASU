import { Footer } from 'components/Footer/Footer';
import {
  TitleContainer,
  Img,
  ImgContainer,
  Container,
  ContainerItem,
  List,
} from 'components/common/PagesDetail/PagesDetail.styled';
import img from '../image/passport/passport.png';
import { NewsRecomendation } from 'components/NewsRecomendation/NewsRecomendation';
import {
  InfoDescription,
  InfoImg,
} from 'components/ConferencesDetail/ConferencesDetail.styled';
import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { SectionTitle } from 'components/Templates/SectionTitle/SectionTitle';
import { Title } from 'components/Templates/Title/Title';
import { Wrap } from 'components/Templates/Wrap/Wrap';
import { Box } from 'components/Box';
import { Article } from 'components/Templates/Article/Article';

const data = [
  {
    id: 1345345,
    img: img,
    title: 'День відкритих дверей - 5 корпус, 114 ауд.',
    time: '22.11.2022 / 13:45',
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
        <SectionTitle pt={[18, 17]} pb={[19, 16]}>
          <Wrap>
            <ImgContainer>
              <Img src={data[0].img} />
              <TitleContainer>
                <Box px={[6, 9]} py={[20, 8]}>
                  <Title variant="h2" mb={[5, 2]}>
                    {data[0].title}
                  </Title>
                  <Title variant="h5">{data[0].time}</Title>
                </Box>
              </TitleContainer>
            </ImgContainer>
          </Wrap>
        </SectionTitle>
        <SectionContent pb={[16, 14]}>
          <Container>
            <ul>
              {data[0].info.map((info, index) => {
                return (
                  <ContainerItem key={index}>
                    {Array.isArray(info.text) ? (
                      <List>
                        {info.text.map((text, index) => {
                          return (
                            <li key={index}>
                              <Article>{text}</Article>
                            </li>
                          );
                        })}
                      </List>
                    ) : (
                      <>
                        {info.text && <Article>{info.text}</Article>}
                        {info.img && (
                          <>
                            <InfoImg src={info.img} />
                            {info.description && (
                              <InfoDescription>
                                {info.description}
                              </InfoDescription>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </ContainerItem>
                );
              })}
            </ul>
          </Container>
        </SectionContent>
        <NewsRecomendation title="Інші конференції" />
      </main>
      <Footer />
    </>
  );
};
