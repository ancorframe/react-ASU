// import { AditionalInfo } from 'components/AditionalInfo/AditionalInfo';
import { Box } from 'components/Box';
import { Footer } from 'components/Footer/Footer';
import { AltTitle, InfoDescription, InfoImg, Wrap } from 'components/ResearchAndAcquisitions/ResearchAndAcquisitions.styled';
// import { Text } from 'components/Templates/Article/Text';
// import { ChapterTitle } from 'components/Templates/ChapterTitle/ChapterTitle';
// import { PageTitle } from 'components/Templates/PageTitle/PageTitle';
// import { Card } from 'components/Support/Card';
import {
  Container,
  InfoContainer,
  Section,
  SectionTitle,
  Title,
  Text,
  TitleBorder,
//   SecondTitle,
//   Wrap,
//   WrapItem,
} from 'components/Support/Support.styled';
import img1 from '../image/Research.png'
import img2 from '../image/Research2.png';
export const ResearchAndAcquisitions = () => {
  return (
    <>
      <main>
        <SectionTitle>
          <Title>
            Дослідження_
            <Box display="inline-block">та_здобутки</Box>
          </Title>
        </SectionTitle>
        <Section>
          <Container>
            <InfoContainer>
              <Text>
                Сьогодні кафедра АСУ продовжує активну наукову роботу в галузі
                цифрової обробки сигналів та розпізнавання образів, а також у
                галузі штучних нейронних мереж.
              </Text>
              <Text>
                Сформувався новий науковий напрям кафедри – розроблення
                математичних методів та моделей, інформаційних, програмних та
                технічних засобів автоматизованих систем обробки інформації та
                управління, в межах якого науковцями кафедри АСУ протягом
                минулих 15 років захищено 6 докторських та понад 20
                кандидатських дисертацій, виконуються госпдоговірні та
                держбюджетні роботи, плідно розвивається міжнародне
                науково-технічне співробітництво.
              </Text>
            </InfoContainer>
            <InfoContainer>
              <TitleBorder>Напрями наукової роботи кафедри</TitleBorder>
              <Wrap>
                <InfoImg src={img1} />
                <InfoDescription>
                  На виставці в Києві «Інновації у науці та техніці-2012»
                </InfoDescription>
                <AltTitle>
                  Науковий напрям професора М. О. Медиковського –
                  “Інтелектуальні інформаційні та інформаційно-аналітичні
                  технології управління енергоефективністю”.
                </AltTitle>
                <Text>
                  За результатами досліджень, здійснених за даним науковим
                  напрямом, захистили кандидатські дисертації: А. Р. Бунь –
                  “Методи та засоби аналізу процесів емісії парникових газів з
                  урахуванням невизначеностей вхідних даних”, М. П. Чаплагін –
                  “Інформаційні технології пошуку та зберігання даних про
                  графічні об’єкти на основі їх семантики”, О. Б. Шуневич –
                  “Інформаційна технологія формування динамічного складу
                  вітрової електростанції”.
                </Text>
              </Wrap>
              <Wrap>
                <InfoImg src={img2} />
                <InfoDescription>
                  Робота над науковим проектом у дослідній лабораторії кафедри
                </InfoDescription>
                <AltTitle>
                  Науковий напрям професора Ю. М. Рашкевича – “Інформаційні
                  технології оброблення сигналів”.
                </AltTitle>
                <Text>
                  Спектр досліджень за цим напрямом містить методи та
                  інформаційні технології сегментації, класифікації та
                  маркірування звукових одиниць потоку мовлення, питання
                  аналізу, перетворення тривалості та синтезу мовних сигналів.
                  Створено нову темпоральну модель мовного сигналу та розроблено
                  технологію перетворення тривалості звукових одиниць на основі
                  функцій темпоральних перетворень. Опрацьовано нові методи та
                  алгоритми модифікації часового масштабу мовних сиг налів у
                  часовій області та на основі моделей аналізу-синтезу мовних
                  сигналів (гомоморфна модель, модель на основі короткочасового
                  пере творення Фур’є). Практичне використання результатів
                  наукових досліджень охоплює задачі синтезу та передачі мови
                  каналами зв’язку, шифру вання та захисту інформації,
                  судово-медичних експертиз, логопедії тощо.
                </Text>
              </Wrap>
      
            </InfoContainer>
            {/* <AditionalInfo /> */}
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
};
