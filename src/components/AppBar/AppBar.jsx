import { Box } from 'components/Box';
import logo from '../../image/logo/V2@2x.png';
import {
  ButtonMenu,
  Logo,
  ArrowDrop,
  HeaderContainer,
  ArrowRight,
  ArrowLeft,
} from './AppBar.styled';
import { ButtonLink } from './AppBar.styled';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Menu } from './Menu';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const onOpenMenu = () => {
    setIsOpen(true);
  };
  const onCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Box
        maxWidth="100vw"
        width="100%"
        as="header"
        position="sticky"
        top="0"
        overflow="hidden"
        zIndex="10"
       
      >
        <HeaderContainer>
          <NavLink to='/'><Logo src={logo} alt="Logo" /></NavLink>
          
          
          <Box
            as="nav"
            display="flex"
            gridGap="11px"
            alignItems="center"
            ml="auto"
          >
            {windowSize.innerWidth > 1080 && (
              <>
                <Link to="Introduction" text="ВСТУП" />
                <Link to="Literature" text="Корисна література" />
                <Link to="3" text="Навчальний процес" />
                <Link to="4" text="Про кафедру" />
                <Link to="6" text="Наукова діяльність" />
              </>
            )}
            <ButtonMenu onClick={onOpenMenu}>
              <MenuIcon />
            </ButtonMenu>
          </Box>
        </HeaderContainer>
      </Box>
      {isOpen && <Menu onCloseMenu={onCloseMenu} />}
    </>
  );
};

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export const Link = ({ to, text }) => {
  return (
    <>
      <ButtonLink to={to}>
        {({ isActive }) => {
          return (
            <>
              {isActive ? (
                <>
                  <ArrowRight />
                  {text}
                  <ArrowLeft />
                </>
              ) : (
                <>
                  {text}
                  <ArrowDrop />
                </>
              )}
            </>
          );
        }}
      </ButtonLink>
    </>
  );
};
