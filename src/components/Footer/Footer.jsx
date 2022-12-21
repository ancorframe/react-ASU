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
  LinkExternal,
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
                  <Link to="/introduction">Вступникам</Link>
                </LinkItem>
                <LinkItem>
                  <Link to="/literature">Корисна література</Link>
                </LinkItem>
              </ul>
            </ListItem>
            <ListItem>
              <Title>Навчальний_процес</Title>
              <ul>
                <LinkItem>
                  <Link to="/learning_process/support">
                    Методичне забезпечення
                  </Link>
                </LinkItem>
                <LinkItem>
                  <Link to="/learning_process/disciplines ">
                    Перелік дисциплін
                  </Link>
                </LinkItem>
                <LinkItem>
                  <Link to="/learning_process/schedule">Розклад</Link>
                </LinkItem>
                <LinkItem>
                  <LinkExternal href="http://vns.lpnu.ua/" target="_blank">
                    ВНС
                  </LinkExternal>
                </LinkItem>
              </ul>
            </ListItem>
            <ListItem>
              <Title>Про_кафедру</Title>
              <ul>
                <LinkItem>
                  <Link to="/about/teachers ">Історія кафедри</Link>
                </LinkItem>
                <LinkItem>
                  <Link to="/about/history ">Викладачі</Link>
                </LinkItem>
                <LinkItem>
                  <Link to="/about/partnership">Партнерство</Link>
                </LinkItem>
                <LinkItem>
                  <Link to="/about/news">Новини</Link>
                </LinkItem>
              </ul>
            </ListItem>
            <ListItem>
              <Title>Наукова_діяльність</Title>
              <ul>
                <LinkItem>
                  <Link to="/research_activities/research_and_acquisitions">
                    Дослідження та здобутки
                  </Link>
                </LinkItem>
                <LinkItem>
                  <Link to="/research_activities/conferences">Конференції</Link>
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
