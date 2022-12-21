import { Box } from 'components/Box';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonMenu, Item, ListLink, ListTitle, SubLink, Title,Link, SubLinkExternal} from './AppBar.styled';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useLayoutEffect } from 'react';


export const Menu = ({ onCloseMenu }) => {
  useBodyScrollLock()
  return (
    <>
      {/* <Box
        as={motion.div}
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebar}
        // initial={false}
        width="476px"
        position="fixed"
        top="0"
        right="0"
        zIndex="10"
        bg="#ffffff"
        overflowY="overlay"
        maxHeight="100vh"
      > */}
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
      <Box as="ul" p="32px 24px ">
        <Item>
          <MenuLink text="ВСТУП" to="introduction" onClick={onCloseMenu} />
        </Item>
        <Item>
          <MenuLink
            text="Корисна література"
            to="literature"
            onClick={onCloseMenu}
          />
        </Item>

        <Item>
          <ListTitle>Навчальний_процес</ListTitle>
          <LearnListLink onClick={onCloseMenu} />
        </Item>
        <Item>
          <ListTitle>Про_кафедру</ListTitle>
          <ListLink>
            <li>
              <SubLink to="about/teachers" onClick={onCloseMenu}>
                Викладачі
              </SubLink>
            </li>
            <li>
              <SubLink to="about/history" onClick={onCloseMenu}>
                Історія кафедри
              </SubLink>
            </li>
            <li>
              <SubLink to="about/partnership" onClick={onCloseMenu}>
                Партнерство
              </SubLink>
            </li>
            <li>
              <SubLink to="about/news" onClick={onCloseMenu}>
                Новини
              </SubLink>
            </li>
          </ListLink>
        </Item>
        <Item>
          <ListTitle>Наукова діяльність</ListTitle>
          <ListLink>
            <li>
              <SubLink
                to="research_activities/research_and_acquisitions"
                onClick={onCloseMenu}
              >
                Дослідження та здобутки
              </SubLink>
            </li>
            <li>
              <SubLink
                to="research_activities/conferences"
                onClick={onCloseMenu}
              >
                Конференції
              </SubLink>
            </li>
          </ListLink>
        </Item>
      </Box>
      {/* </Box> */}
    </>
  );
};

export const MenuLink = ({ text ,to,onClick}) => {
  return (
    <>
      <Link to={to} onClick={onClick}>
        {text}
        <ArrowRightIcon />
      </Link>
    </>
  );
};



export const LearnListLink = ({ onClick }) => {
  return (
    <>
      <ListLink>
        <li>
          <SubLink to="learning_process/support" onClick={onClick}>
            Навчально-методичне забезпечення
          </SubLink>
        </li>
        <li>
          <SubLink to="learning_process/disciplines" onClick={onClick}>
            Перелік дисциплін
          </SubLink>
        </li>
        <li>
          <SubLink to="learning_process/schedule" onClick={onClick}>
            Розклад
          </SubLink>
        </li>
        <li>
          <SubLinkExternal
            href="http://vns.lpnu.ua/"
            target="_blank"
            onClick={onClick}
          >
            ВНС
          </SubLinkExternal>
        </li>
      </ListLink>
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