import {
  Container,
  FooterContainer,
  Link,
  ListItem,
  Wrap,
  ListLink,
  LinkItem,
  LinkExternal,
} from './Footer.styled';
import { Title } from 'components/Templates/Title/Title';

const links = [
  {
    title: 'Основне',
    links: [
      { to: '/introduction', name: 'Вступникам' },
      { to: '/literature', name: 'Корисна література' },
    ],
  },
  {
    title: 'Навчальний_процес',
    links: [
      { to: '/learning_process/support', name: 'Методичне забезпечення' },
      { to: '/learning_process/disciplines', name: 'Перелік дисциплін' },
      { to: '/learning_process/schedule', name: 'Розклад' },
      { external: 'http://vns.lpnu.ua/', name: 'ВНС' },
    ],
  },
  {
    title: 'Про_кафедру',
    links: [
      { to: '/about/history', name: 'Історія кафедри' },
      { to: '/about/teachers', name: 'Викладачі' },
      { to: '/about/partnership', name: 'Партнерство' },
      { to: '/about/news', name: 'Новини' },
    ],
  },
  {
    title: 'Наукова_діяльність',
    links: [
      {
        to: '/research_activities/research_and_acquisitions',
        name: 'Дослідження та здобутки',
      },
      { to: '/research_activities/conferences', name: 'Конференції' },
    ],
  },
];

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Container>
          <ListLink>
            {links.map(({ title, links }, index) => (
              <ListItem key={index}>
                <Title
                  variant="h5"
                  pb={[1, 4]}
                  mb={[4, 6]}
                  opacity="0.2"
                  borderBottom="footer"
                  color="white"
                >
                  {title}
                </Title>
                <ul>
                  {links.map(({ to, name, external }, index) => (
                    <LinkItem key={index}>
                      {to && <Link to={to}>{name}</Link>}
                      {external && (
                        <LinkExternal href={external} target="_blank">
                          {name}
                        </LinkExternal>
                      )}
                    </LinkItem>
                  ))}
                </ul>
              </ListItem>
            ))}
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
