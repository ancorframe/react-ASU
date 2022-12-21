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
          <MenuLink text="ВСТУП" to="introduction" />
        </Item>
        <Item>
          <MenuLink text="Корисна література" to="literature" />
        </Item>

        <Item>
          <ListTitle>Навчальний_процес</ListTitle>
          <LearnListLink />
        </Item>
        <Item>
          <ListTitle>Про_кафедру</ListTitle>
          <ListLink>
            <li>
              <SubLink to="about/teachers">Викладачі</SubLink>
            </li>
            <li>
              <SubLink to="about/history">Історія кафедри</SubLink>
            </li>
            <li>
              <SubLink to="about/partnership">Партнерство</SubLink>
            </li>
            <li>
              <SubLink to="about/news">Новини</SubLink>
            </li>
          </ListLink>
        </Item>
        <Item>
          <ListTitle>Наукова діяльність</ListTitle>
          <ListLink>
            <li>
              <SubLink to="research_activities/research_and_acquisitions">
                Дослідження та здобутки
              </SubLink>
            </li>
            <li>
              <SubLink to="research_activities/conferences">
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

export const MenuLink = ({ text ,to}) => {
  return (
    <>
      <Link to={to}>
        {text}
        <ArrowRightIcon />
      </Link>
    </>
  );
};



export const LearnListLink = () => {
  return (
    <>
      <ListLink>
        <li>
          <SubLink to="learning_process/support">
            Навчально-методичне забезпечення
          </SubLink>
        </li>
        <li>
          <SubLink to="learning_process/disciplines">Перелік дисциплін</SubLink>
        </li>
        <li>
          <SubLink to="learning_process/schedule">Розклад</SubLink>
        </li>
        <li>
          <SubLinkExternal href="http://vns.lpnu.ua/" target="_blank">
            ВНС
          </SubLinkExternal>
        </li>
      </ListLink>
    </>
  );
}


const useBodyScrollLock = () => {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = originalStyle);
  }, []);
};