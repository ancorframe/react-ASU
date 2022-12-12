import { Box } from 'components/Box';
import { useState } from 'react';
import {
  AboutTitle,
  AboutImg,
  Button,
  DocumentList,
  Img,
  Info,
  ButtonWrap,
  AboutWrap,
  ContainerInfo,
  
} from './Inroduction.styled';

import passport from '../../image/Rectangl.png';
import { AditionalInfo } from 'components/AditionalInfo/AditionalInfo';

export const About = () => {
  const [about, setAbout] = useState('Bachelor');
  const handleChange = degree => {
    setAbout(degree);
    
  };
  return (
    <>
      <Box
        maxWidth="960px"
        m="0 auto"
        boxShadow={'regular'}
        mb="128px"
      >
        <ButtonWrap>
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
        </ButtonWrap>
        {about === 'Bachelor' && <Bachelor/>}
        {about === 'Magistracy' && <Magistracy/>}
        {about === 'Postgraduate'&& <Postgraduate/>}
      </Box>
    </>
  );
};


export const Bachelor = () => {
  return (
    <>
      <AboutWrap>
        <ContainerInfo>
          <AboutTitle>Загальна інформація</AboutTitle>
          <Info mb>
            На бакалавраті за спеціальностю 122 “Комп’ютерні науки” проводиться
            набір на освітньо-професійну програму: “Комп’ютерні науки
            (Обчислювальний інтелект смарт-систем)”; Computer Science
            (Computational Intelligence of Smart Systems).
          </Info>
          <Info mb>
            Ліцензований обсяг бакалаврату 122 “Комп’ютерні науки
            (Обчислювальний інтелект смарт-систем)” – 200 місць(У 2021 р. на
            кафедру АСУ на навчання на бакалавраті за освітньо-професійною
            програмою “Комп’ютерні науки” зараховано 230 студентів).
          </Info>
          <Info mb>Кваліфікація: Бакалавр із комп’ютерних наук.</Info>
          <Info>Форма навчання: денна.</Info>
        </ContainerInfo>
        <ContainerInfo>
          <AboutTitle>Необхідні документи</AboutTitle>
          <Img src={passport} alt="passport" />
          <AboutImg>Ілюстративне фото</AboutImg>
          <Info mb>Необхідно мати наступний перелік документів:</Info>
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
        </ContainerInfo>
        <AditionalInfo />
      </AboutWrap>
    </>
  );
}

export const Magistracy = () => {
  return (
    <>
      <AboutWrap>
        <ContainerInfo>
          <AboutTitle>Загальна інформація</AboutTitle>
          <Info mb>
            У 2022 році вступ у магістратуру спеціальності 122 “Комп’ютерні
            науки” буде здійснюватись за освітньо-професійною програмою
            “Інформаційні управляючі системи та технології (Information
            management systems and technologies)” (1,5 річна).
          </Info>
          <Info mb>
            Ліцензований обсяг магістратури спеціальності 122 “Комп’ютерні
            науки” за освітньо-професійною програмою “Інформаційні управляючі
            системи та технології” – 80 місць (У 2021 р. на кафедру АСУ для
            навчання в магістратурі за освітньо-професійною програмою
            “Інформаційні управляючі системи та технології” зараховано 57
            бакалаврів).
          </Info>
          <Info mb>
            Кваліфікація: Магістр із комп’ютерних наук за спеціалізацією
            інформаційні управляючі системи та технології.
          </Info>
          <Info mb>Форми навчання: денна, заочна.</Info>
          <Info mb>
            У 2022 році вступ у магістратуру спеціальності 122 “Комп’ютерні
            науки” буде здійснюватись за освітньо-науковою програмою
            “Комп’ютерні науки (Computer Science)” (2 роки), у 2021 р. на
            кафедру АСУ на навчання в магістратурі за освітньо-науковою
            програмою “Комп’ютерні науки” зараховано 10 бакалаврів).
          </Info>
          <Info mb>Кваліфікація: Магістр дослідник з комп’ютерних наук.</Info>
          <Info>Форма навчання: денна.</Info>
        </ContainerInfo>
        <ContainerInfo>
          <AboutTitle>Необхідні документи</AboutTitle>
          <Img src={passport} alt="passport" />
          <AboutImg>Ілюстративне фото</AboutImg>
          <Info mb>Необхідно мати наступний перелік документів:</Info>
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
        </ContainerInfo>
        <AditionalInfo />
      </AboutWrap>

      
    </>
  );
};

export const Postgraduate = () => {
  return (
    <>
      <AboutWrap>
        <ContainerInfo>
          <AboutTitle>Загальна інформація</AboutTitle>
          <Info mb>
            У 2022 році вступ у аспірантуру здійснюється за спеціальністю 122
            “Комп’ютерні науки” (У 2021 р. на кафедру АСУ на навчання в
            аспірантурі за освітньо-науковою програмою “Комп’ютерні науки”
            зараховано 5 магістрів).
          </Info>
          <Info mb>
            Кваліфікація: Доктор філософії за спеціальністю комп’ютерні науки.
          </Info>
        
          <Info>Форми навчання: денна, заочна.</Info>
        </ContainerInfo>
        <ContainerInfo>
          <AboutTitle>Необхідні документи</AboutTitle>
          <Img src={passport} alt="passport" />
          <AboutImg>Ілюстративне фото</AboutImg>
          <Info mb>Необхідно мати наступний перелік документів:</Info>
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
        </ContainerInfo>
        <AditionalInfo />
      </AboutWrap>
    </>
  );
};