import { Box } from 'components/Box';
import CloseIcon from '@mui/icons-material/Close';
import {
  ButtonMenu,
  Item,
  ListLink,
  ListTitle,
  SubLink,
  Title,
  Link,
  SubLinkExternal,
} from './AppBar.styled';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useLayoutEffect } from 'react';

const links = [
  {
    title: 'Навчальний_процес',
    links: [
      {
        to: 'learning_process/support',
        name: 'Навчально-методичне забезпечення',
      },
      { to: 'learning_process/disciplines', name: 'Перелік дисциплін' },
      { to: 'learning_process/schedule', name: 'Розклад' },
      { external: 'http://vns.lpnu.ua/', name: 'ВНС' },
    ],
  },
  {
    title: 'Про_кафедру',
    links: [
      { to: 'about/teachers', name: 'Викладачі' },
      { to: 'about/history', name: 'Історія кафедри' },
      { to: 'about/partnership', name: 'Партнерство' },
      { to: 'about/news', name: 'Новини' },
    ],
  },
  {
    title: 'Наукова діяльність',
    links: [
      {
        to: 'research_activities/research_and_acquisitions',
        name: 'Дослідження та здобутки',
      },
      { to: 'research_activities/conferences', name: 'Конференції' },
    ],
  },
];

export const Menu = ({ onCloseMenu }) => {

  useBodyScrollLock();

  const onClick = e => {
    if (e.target.nodeName !== 'A') {
      return;
    }
    onCloseMenu();
  };

  return (
    <>
      <Box
        display="flex"
        p="24px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Title>Меню</Title>
        <ButtonMenu onClick={onCloseMenu}>
          <CloseIcon />
        </ButtonMenu>
      </Box>
      <Box as="ul" p="32px 24px " onClick={onClick}>
        <Item>
          <MenuLink text="ВСТУП" to="introduction" />
        </Item>
        <Item>
          <MenuLink text="Корисна література" to="literature" />
        </Item>
        {links.map(({ title, links }, index) => (
          <Item key={index}>
            <ListTitle>{title}</ListTitle>
            <ListLink>
              {links.map(({ to, external, name }, index) => (
                <li key={index}>
                  {to && <SubLink to={to}>{name}</SubLink>}
                  {external && (
                    <SubLinkExternal href={external} target="_blank">
                      {name}
                    </SubLinkExternal>
                  )}
                </li>
              ))}
            </ListLink>
          </Item>
        ))}
      </Box>
    </>
  );
};

export const MenuLink = ({ text, to, onClick }) => {
  return (
    <>
      <Link to={to} onClick={onClick}>
        {text}
        <ArrowRightIcon />
      </Link>
    </>
  );
};

const useBodyScrollLock = () => {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = originalStyle);
  }, []);
};
