import { Box } from 'components/Box';
import { useState } from 'react';
import {
  AboutImg,
  Button,
  DocumentList,
  Img,
  Info,
  ButtonWrap,
} from './Inroduction.styled';

import passport from '../../image/passport/passport.png';
import { AditionalInfo } from 'components/AditionalInfo/AditionalInfo';
import { Title } from 'components/Templates/Title/Title';

const degree = ['Bachelor', 'Magistracy', 'Postgraduate'];

const data = {
  Bachelor: [
    {
      text: `На бакалавраті за спеціальностю 122 “Комп’ютерні науки” проводиться
            набір на освітньо-професійну програму: “Комп’ютерні науки
            (Обчислювальний інтелект смарт-систем)”; Computer Science
            (Computational Intelligence of Smart Systems).`,
    },
    {
      text: `Ліцензований обсяг бакалаврату 122 “Комп’ютерні науки
            (Обчислювальний інтелект смарт-систем)” – 200 місць(У 2021 р. на
            кафедру АСУ на навчання на бакалавраті за освітньо-професійною
            програмою “Комп’ютерні науки” зараховано 230 студентів).`,
    },
    { text: `Кваліфікація: Бакалавр із комп’ютерних наук.` },
    { text: `Форма навчання: денна.` },
  ],

  Magistracy: [
    {
      text: `У 2022 році вступ у магістратуру спеціальності 122 “Комп’ютерні
            науки” буде здійснюватись за освітньо-професійною програмою
            “Інформаційні управляючі системи та технології (Information
            management systems and technologies)” (1,5 річна).`,
    },
    {
      text: `  Ліцензований обсяг магістратури спеціальності 122 “Комп’ютерні
            науки” за освітньо-професійною програмою “Інформаційні управляючі
            системи та технології” – 80 місць (У 2021 р. на кафедру АСУ для
            навчання в магістратурі за освітньо-професійною програмою
            “Інформаційні управляючі системи та технології” зараховано 57
            бакалаврів).`,
    },
    {
      text: ` Кваліфікація: Магістр із комп’ютерних наук за спеціалізацією
            інформаційні управляючі системи та технології.`,
    },
    { text: `Форми навчання: денна, заочна.` },
    {
      text: `У 2022 році вступ у магістратуру спеціальності 122 “Комп’ютерні
            науки” буде здійснюватись за освітньо-науковою програмою
            “Комп’ютерні науки (Computer Science)” (2 роки), у 2021 р. на
            кафедру АСУ на навчання в магістратурі за освітньо-науковою
            програмою “Комп’ютерні науки” зараховано 10 бакалаврів).`,
    },
    { text: `Кваліфікація: Магістр дослідник з комп’ютерних наук.` },
    { text: `Форма навчання: денна.` },
  ],
  Postgraduate: [
    {
      text: `У 2022 році вступ у аспірантуру здійснюється за спеціальністю 122
            “Комп’ютерні науки” (У 2021 р. на кафедру АСУ на навчання в
            аспірантурі за освітньо-науковою програмою “Комп’ютерні науки”
            зараховано 5 магістрів).`,
    },
    {
      text: `Ліцензований обсяг бакалаврату 122 “Комп’ютерні науки
            (Обчислювальний інтелект смарт-систем)” – 200 місць(У 2021 р. на
            кафедру АСУ на навчання на бакалавраті за освітньо-професійною
            програмою “Комп’ютерні науки” зараховано 230 студентів).`,
    },
    {
      text: `Кваліфікація: Доктор філософії за спеціальністю комп’ютерні науки.`,
    },
    { text: `Форми навчання: денна, заочна.` },
  ],
};

export const About = () => {
  const [about, setAbout] = useState('Bachelor');
  const handleChange = degree => {
    setAbout(degree);
  };
  return (
    <>
      <Box maxWidth="960px" m="0 auto" boxShadow={'regular'}>
        <ButtonWrap>
          {degree.map((degree, index) => (
            <Button
              key={index}
              type="button"
              onClick={() => handleChange(degree)}
              active={about === degree}
            >
              {degree}
            </Button>
          ))}
        </ButtonWrap>
        <Degree degree={about} />
      </Box>
    </>
  );
};

export const Degree = ({ degree }) => {
  return (
    <>
      <Box p={[null, 11]} px={[6, null]} py={[8, null]}>
        <Box mb={[10, 12]}>
          <Title variant="h2" pb={[2, 6]} mb={8} borderBottom={'titles'}>
            Загальна інформація
          </Title>
          {data[degree].map(({ text }, index) => (
            <Info key={index}>{text}</Info>
          ))}
        </Box>
        <Box mb={[10, 12]}>
          <Title variant="h2" pb={[2, 6]} mb={8} borderBottom={'titles'}>
            Необхідні документи
          </Title>
          <Img src={passport} alt="passport" />
          <AboutImg>Ілюстративне фото</AboutImg>
          <Info mb={8}>Необхідно мати наступний перелік документів:</Info>
          <DocumentList>
            <li>
              <p>Паспорт громадянина України</p>
            </li>
            <li>
              <p>Копії паспорта – х2</p>
            </li>
            <li>
              <p>Індентифікаційний код</p>
            </li>
            <li>
              <p>Фото 3х4см – х8</p>
            </li>
          </DocumentList>
        </Box>
        <AditionalInfo />
      </Box>
    </>
  );
};
