import { Box } from 'components/Box';
import logo from '../../image/logo/V2@2x.png';
import {
  ButtonMenu,
  Logo,
  ArrowDrop,
  HeaderContainer,
  ArrowRight,
  ArrowLeft,
  DropdownLink,
  MotionWrap,
  DropdownExternal,
  MotionMenu,
  LogoLink,
} from './AppBar.styled';
import { ButtonLink } from './AppBar.styled';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Menu } from './Menu';
import { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

const links = [
  {
    to: 'learning_process',
    name: 'Навчальний процес',
    children: [
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
    to: 'about',
    name: 'Про кафедру',
    children: [
      { to: 'about/teachers', name: 'Викладачі' },
      { to: 'about/history', name: 'Історія кафедри' },
      { to: 'about/partnership', name: 'Партнерство' },
      { to: 'about/news', name: 'Новини' },
    ],
  },
  {
    to: 'research_activities',
    name: 'Наукова діяльність',
    children: [
      {
        to: 'research_activities/research_and_acquisitions',
        name: 'Дослідження та здобутки',
      },
      { to: 'research_activities/conferences', name: 'Конференції' },
    ],
  },
];

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
        overflowX="clip"
        zIndex="10"
      >
        <HeaderContainer>
          <LogoLink to="/home">
            <Logo src={logo} alt="Logo" />
          </LogoLink>
          <Box
            as="nav"
            display="flex"
            gridGap="11px"
            alignItems="center"
            ml="auto"
          >
            {windowSize.innerWidth > 979.5 && (
              <>
                <Link to="introduction" text="ВСТУП" />
                <Link to="literature" text="Корисна література" />

                {links.map(({ to, name, children }, index) => (
                  <LinkDropdown to={to} text={name} key={index} index={index}>
                    {children.map(({ to, external, name }, index) => (
                      <li key={index}>
                        {to && <DropdownLink to={to}>{name}</DropdownLink>}
                        {external && (
                          <DropdownExternal href={external} target="_blank">
                            {name}
                          </DropdownExternal>
                        )}
                      </li>
                    ))}
                  </LinkDropdown>
                ))}
              </>
            )}

            {windowSize.innerWidth < 980 && (
              <ButtonMenu onClick={onOpenMenu}>
                <MenuIcon />
              </ButtonMenu>
            )}
          </Box>
        </HeaderContainer>
        <AnimatePresence mode='wait' >
        {isOpen && (
          <MotionMenu
            key={88}
            initial={{
              x: 500,
              opacity: 0,
              // transition: {
              //   delay: 0.1,
              //   type: 'spring',
              //   stiffness: 400,
              //   damping: 40,
              // },
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                delay: 0.1,
                type: 'spring',
                stiffness: 400,
                damping: 40,
              },
            }}
            exit={{
              x: 500,
              opacity: 0,
              // zIndex: -1,
              transition: {
                delay: 0.1,
              //   type: 'spring',
              //   stiffness: 400,
              //   damping: 40,
              },
            }}
          >
            <Menu onCloseMenu={onCloseMenu} />
          </MotionMenu>
        )}
      </AnimatePresence>
      </Box>
      
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
                <>{text}</>
              )}
            </>
          );
        }}
      </ButtonLink>
    </>
  );
};

export const LinkDropdown = ({ to, text, children, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box
        position="relative"
        onMouseEnter={event => {
          setIsOpen(true);
        }}
        onMouseLeave={event => {
          setIsOpen(false);
        }}
        onFocus={event => {
          setIsOpen(true);
        }}
        onBlur={event => {
          setIsOpen(false);
        }}
      >
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
        <AnimatePresence>
          {isOpen && (
            <>
              <MotionWrap
                key={index}
                initial={{
                  y: -30,
                  translateX: '-50%',
                  opacity: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 40,
                  },
                }}
                animate={{
                  y: 0,
                  translateX: '-50%',
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 40,
                  },
                }}
                exit={{
                  y: 30,
                  translateX: '-50%',
                  opacity: 0,

                  transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 40,
                  },
                  
                }}
              >
                {children}
              </MotionWrap>
            </>
          )}
        </AnimatePresence>
      </Box>
    </>
  );
};
