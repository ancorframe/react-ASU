import { Box } from 'components/Box';
import {
  Container,
  FooterContainer,
  Link,
  ListItem,
  Title,
  Wrap,
  ListLink,
} from './Footer.styled';

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Container>
          <ListLink>
            <ListItem>
              <Title>Основне</Title>
              <ul>
                <li>
                  <Link>Вступникам</Link>
                </li>
                <li>
                  <Link>Корисна література</Link>
                </li>
              </ul>
            </ListItem>
            <ListItem>
              <Title>Навчальний_процес</Title>
              <ul>
                <li>
                  <Link>Методичне забезпечення</Link>
                </li>
                <li>
                  <Link>Перелік дисциплін</Link>
                </li>
                <li>
                  <Link>Розклад</Link>
                </li>
                <li>
                  <Link>ВНС</Link>
                </li>
              </ul>
            </ListItem>
            <ListItem>
              <Title>Про_кафедру</Title>
              <ul>
                <li>
                  <Link>Історія кафедри</Link>
                </li>
                <li>
                  <Link>Викладачі</Link>
                </li>
                <li>
                  <Link>Партнерство</Link>
                </li>
                <li>
                  <Link>Новини</Link>
                </li>
              </ul>
            </ListItem>
            <ListItem>
              <Title>Наукова_діяльність</Title>
              <ul>
                <li>
                  <Link>Дослідження та здобутки</Link>
                </li>
                <li>
                  <Link>Конференції</Link>
                </li>
                <li>
                  <Link>Проекти</Link>
                </li>
              </ul>
            </ListItem>
          </ListLink>
          <Wrap>
            <p>
              © 2022 Department of automated management systems. All Rigths
              Reserved.
            </p>
            <p>Sokolov Design</p>
          </Wrap>
        </Container>
      </FooterContainer>
    </>
  );
};
