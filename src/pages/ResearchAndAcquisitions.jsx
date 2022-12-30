import { Box } from 'components/Box';
import { Footer } from 'components/Footer/Footer';
import {
  InfoDescription,
  InfoImg,
  Container,
  Wraper,
} from 'components/ResearchAndAcquisitions/ResearchAndAcquisitions.styled';

import img1 from '../image/conferenstest/Research.png';
import img2 from '../image/conferenstest/Research2.png';

import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { SectionTitle } from 'components/Templates/SectionTitle/SectionTitle';
import { Title } from 'components/Templates/Title/Title';
import { Wrap } from 'components/Templates/Wrap/Wrap';
import { Article } from 'components/Templates/Article/Article';

const data = {
  title: 'Напрями наукової роботи кафедри',
  info: [
    {
      img: img1,
      description: 'На виставці в Києві «Інновації у науці та техніці-2012»',
      title: `Науковий напрям професора М. О. Медиковського –
                  “Інтелектуальні інформаційні та інформаційно-аналітичні
                  технології управління енергоефективністю”.`,
      info: `За результатами досліджень, здійснених за даним науковим
                  напрямом, захистили кандидатські дисертації: А. Р. Бунь –
                  “Методи та засоби аналізу процесів емісії парникових газів з
                  урахуванням невизначеностей вхідних даних”, М. П. Чаплагін –
                  “Інформаційні технології пошуку та зберігання даних про
                  графічні об’єкти на основі їх семантики”, О. Б. Шуневич –
                  “Інформаційна технологія формування динамічного складу
                  вітрової електростанції”.`,
    },
    {
      img: img2,
      description:
        'Робота над науковим проектом у дослідній лабораторії кафедри',
      title: `Науковий напрям професора Ю. М. Рашкевича – “Інформаційні
                  технології оброблення сигналів”.`,
      info: `Спектр досліджень за цим напрямом містить методи та
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
                  судово-медичних експертиз, логопедії тощо.`,
    },
  ],
};

export const ResearchAndAcquisitions = () => {
  return (
    <>
      <main>
        <SectionTitle>
          <Wrap>
            <Title variant="h1" textAlign={[null, 'center']}>
              Дослідження_
              <Box display="inline-block">та_здобутки</Box>
            </Title>
          </Wrap>
        </SectionTitle>
        <SectionContent>
          <Container>
            <Box mb={[16, 12]}>
              <Article mb={[9, 10]}>
                Сьогодні кафедра АСУ продовжує активну наукову роботу в галузі
                цифрової обробки сигналів та розпізнавання образів, а також у
                галузі штучних нейронних мереж.
              </Article>
              <Article>
                Сформувався новий науковий напрям кафедри – розроблення
                математичних методів та моделей, інформаційних, програмних та
                технічних засобів автоматизованих систем обробки інформації та
                управління, в межах якого науковцями кафедри АСУ протягом
                минулих 15 років захищено 6 докторських та понад 20
                кандидатських дисертацій, виконуються госпдоговірні та
                держбюджетні роботи, плідно розвивається міжнародне
                науково-технічне співробітництво.
              </Article>
            </Box>
            <Box>
              <Title
                variant="h2"
                pb={[2, 6]}
                borderBottom="titles"
                mb={[18, 7]}
              >
                {data.title}
              </Title>
              {data.info.map(({ img, description, info, title }, index) => (
                <Wraper key={index}>
                  <InfoImg src={img} />
                  <InfoDescription>{description}</InfoDescription>
                  <Title variant="h5" m={0} mb={8} textAlign="justify">
                    {title}
                  </Title>
                  <Article>{info}</Article>
                </Wraper>
              ))}
            </Box>
          </Container>
        </SectionContent>
      </main>
      <Footer />
    </>
  );
};
