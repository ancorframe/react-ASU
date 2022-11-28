import { Box } from 'components/Box';
import { useState } from 'react';
import {
  AboutTitle,
  AboutImg,
  Button,
  DocumentList,
  Img,
  Info,
  AditionaInfo,
} from './Inroduction.styled';

import passport from '../../image/Rectangl.png';

export const About = () => {
  const [about, setAbout] = useState('Bachelor');
  const handleChange = degree => {
    setAbout(degree);
  };
  return (
    <>
      <Box as='main' maxWidth="960px" m="0 auto" boxShadow={'regular'} mb='128px'>
        <Box
          display="flex"
          gridGap="8px"
          //   p="8px 8px 0px 8px"
          bg="#F2F3F5"
          m="8px  8px 0px 8px"
        >
          <Button
            type="button"
            onClick={() => handleChange('Bachelor')}
            active={about === 'Bachelor'}
          >
            Бакалаврат
          </Button>
          <Button
            type="button"
            onClick={() => handleChange('Magistracy')}
            active={about === 'Magistracy'}
          >
            Магістратура
          </Button>
          <Button
            type="button"
            onClick={() => handleChange('Postgraduate')}
            active={about === 'Postgraduate'}
          >
            Аспірантура
          </Button>
        </Box>
        <Box p="48px">
          <AboutTitle>Загальна інформація</AboutTitle>
          <Info>
            На бакалавраті за спеціальностю 122 “Комп’ютерні науки” проводиться
            набір на освітньо-професійну програму: “Комп’ютерні науки
            (Обчислювальний інтелект смарт-систем)”; Computer Science
            (Computational Intelligence of Smart Systems).
          </Info>
          <Info>
            Ліцензований обсяг бакалаврату 122 “Комп’ютерні науки
            (Обчислювальний інтелект смарт-систем)” – 200 місць(У 2021 р. на
            кафедру АСУ на навчання на бакалавраті за освітньо-професійною
            програмою “Комп’ютерні науки” зараховано 230 студентів).
          </Info>
          <Info>Кваліфікація: Бакалавр із комп’ютерних наук.</Info>
          <Info>Форма навчання: денна.</Info>
          <AboutTitle>Необхідні документи</AboutTitle>
          <Img src={passport} alt="passport" />
          <AboutImg>Ілюстративне фото</AboutImg>
          <Info>Необхідно мати наступний перелік документів:</Info>
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
          <AditionaInfo>
            За детальною інформацією звертатися до нас: asu.dept@lpnu.ua або
            vasyl.m.teslyuk@lpnu.ua (завідувач кафедрою АСУ).
          </AditionaInfo>
        </Box>
      </Box>
    </>
  );
};
