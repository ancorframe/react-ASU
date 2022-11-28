import { Box } from 'components/Box';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonMenu, Item } from './AppBar.styled';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const Menu = ({ onCloseMenu }) => {
  return (
    <>
      <Box
        width="476px"
        position="fixed"
        top="0"
        right="0"
        zIndex="10"
        bg="#ffffff"
        overflowY="scroll"
        maxHeight="100vh"
      >
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
            <MenuLink text="Викладачі" />
          </Item>
          <Item>
            <ListTitile>Навчальний процес</ListTitile>
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
          </Item>
          <Item>
            <MenuLink text="Партнерство" />
          </Item>
          <Item>
            <MenuLink text="Історія кафедри" />
          </Item>
          <Item>
            <ListTitile>Наукова діяльність</ListTitile>
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
      </Box>
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

export const Title = styled.h3`
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */

  letter-spacing: -0.05em;

  /* Black/100 */

  color: #0f1f2c;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 140% */

  text-decoration-line: underline;

  /* Black/100 */

  color: #0f1f2c;

  padding: 12px 24px;
`;

export const ListTitile = styled.p`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 140% */

  text-decoration-line: underline;

  /* Black/60 */

  color: #bcc4d3;
  padding: 12px 24px;
`;

export const ListLink = styled.ul`
  padding: 0px 24px 12px 24px;
`;

export const SubLink = styled(NavLink)`
  display: block;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  text-decoration-line: underline;

  /* Black/100 */

  color: #0f1f2c;

  padding: 12px 24px;
`;
