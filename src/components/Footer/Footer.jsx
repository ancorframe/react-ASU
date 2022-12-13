// import { Box } from 'components/Box';
import {
  Container,
  FooterContainer,
  Link,
  ListItem,
  Title,
  Wrap,
  ListLink,
  LinkItem,
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
                <LinkItem>
                  <Link>Вступникам</Link>
                </LinkItem>
                <LinkItem>
                  <Link>Корисна література</Link>
                </LinkItem>
              </ul>
            </ListItem>
            <ListItem>
              <Title>Навчальний_процес</Title>
              <ul>
                <LinkItem>
                  <Link>Методичне забезпечення</Link>
                </LinkItem>
                <LinkItem>
                  <Link>Перелік дисциплін</Link>
                </LinkItem>
                <LinkItem>
                  <Link>Розклад</Link>
                </LinkItem>
                <LinkItem>
                  <Link>ВНС</Link>
                </LinkItem>
              </ul>
            </ListItem>
            <ListItem>
              <Title>Про_кафедру</Title>
              <ul>
                <LinkItem>
                  <Link>Історія кафедри</Link>
                </LinkItem>
                <LinkItem>
                  <Link>Викладачі</Link>
                </LinkItem>
                <LinkItem>
                  <Link>Партнерство</Link>
                </LinkItem>
                <LinkItem>
                  <Link>Новини</Link>
                </LinkItem>
              </ul>
            </ListItem>
            <ListItem>
              <Title>Наукова_діяльність</Title>
              <ul>
                <LinkItem>
                  <Link>Дослідження та здобутки</Link>
                </LinkItem>
                <LinkItem>
                  <Link>Конференції</Link>
                </LinkItem>
                <LinkItem>
                  <Link>Проекти</Link>
                </LinkItem>
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
