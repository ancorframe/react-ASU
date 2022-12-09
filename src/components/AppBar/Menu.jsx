import { Box } from 'components/Box';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonMenu, Item, ListLink, ListTitle, SubLink, Title,Link} from './AppBar.styled';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


export const Menu = ({ onCloseMenu }) => {
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
            <MenuLink text="ВСТУП" />
          </Item>
          <Item>
            <MenuLink text="Корисна література" />
          </Item>

          <Item>
            <ListTitle>Навчальний_процес</ListTitle>
            <LearnListLink />
          </Item>
          <Item>
            <ListTitle>Про_кафедру</ListTitle>
            <ListLink>
              <li>
                <SubLink>Викладачі</SubLink>
              </li>
              <li>
                <SubLink>Історія кафедри</SubLink>
              </li>
              <li>
                <SubLink>Партнерство</SubLink>
              </li>
              <li>
                <SubLink>Новини</SubLink>
              </li>
            </ListLink>
          </Item>
          <Item>
            <ListTitle>Наукова діяльність</ListTitle>
            <ListLink>
              <li>
                <SubLink>Дослідження та здобутки</SubLink>
              </li>
              <li>
                <SubLink>Конференції</SubLink>
              </li>
              <li>
                <SubLink>Проекти</SubLink>
              </li>
            </ListLink>
          </Item>
        </Box>
      {/* </Box> */}
    </>
  );
};

export const MenuLink = ({ text }) => {
  return (
    <>
      <Link>
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
          <SubLink>Навчально-методичне забезпечення</SubLink>
        </li>
        <li>
          <SubLink>Перелік дисциплін</SubLink>
        </li>
        <li>
          <SubLink>Розклад</SubLink>
        </li>
        <li>
          <SubLink>ВНС</SubLink>
        </li>
      </ListLink>
    </>
  );
}