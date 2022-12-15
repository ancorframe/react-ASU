import { Box } from 'components/Box';
import logo from '../../image/logo/V2@2x.png';
import {
  ButtonMenu,
  Logo,
  ArrowDrop,
  HeaderContainer,
  ArrowRight,
  ArrowLeft,
  // Block,
  DropdownLink,
  MotionWrap,
} from './AppBar.styled';
import { ButtonLink } from './AppBar.styled';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Menu } from './Menu';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import {
  motion,
  AnimatePresence,
  // usePresence,
  // useIsPresent,
} from 'framer-motion';

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
          <NavLink to="/">
            <Logo src={logo} alt="Logo" />
          </NavLink>
          <Box
            as="nav"
            display="flex"
            gridGap="11px"
            alignItems="center"
            ml="auto"
          >
            {windowSize.innerWidth > 980 && (
              <>
                <Link to="introduction" text="ВСТУП" />
                <Link to="literature" text="Корисна література" />
                <LinkDropdown
                  to="learning_process"
                  text="Навчальний процес"
                  keysa={21}
                >
                  <LearnListLink />
                </LinkDropdown>
                <LinkDropdown to="about" text="Про кафедру" keysa={22}>
                  <DepartmentListLink />
                </LinkDropdown>
                <LinkDropdown to="6" text="Наукова діяльність" keysa={23}>
                  <ResearchActivitiesListLink />
                </LinkDropdown>
              </>
            )}
            {windowSize.innerWidth < 980 && (
              <ButtonMenu onClick={onOpenMenu}>
                <MenuIcon />
              </ButtonMenu>
            )}
          </Box>
        </HeaderContainer>
      </Box>
      <AnimatePresence>
        {isOpen && (
          <Box
            as={motion.div}
            key="menu"
            initial={{
              x: 500,
              opacity: 0,
              transition: {
                delay: 0.1,
                type: 'spring',
                stiffness: 400,
                damping: 40,
              },
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
              zIndex: -1,
              transition: {
                delay: 0.1,
                type: 'spring',
                stiffness: 400,
                damping: 40,
              },
            }}
            maxWidth="476px"
            width="100%"
            position="fixed"
            top="0"
            right="0"
            zIndex="10"
            bg="#ffffff"
            overflowY="overlay"
            maxHeight="100vh"
          >
            <Menu onCloseMenu={onCloseMenu} />
          </Box>
        )}
      </AnimatePresence>
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

export const LinkDropdown = ({ to, text, children, keysa }) => {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   !isPresent && setTimeout(safeToRemove(), 1000);
  // }, [isPresent, safeToRemove]);
  return (
    <>
      <Box
        position="relative"
        // zIndex="120"
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
                key={keysa}
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
                  y: 50,
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

export const LearnListLink = () => {
  // const [isPresent, safeToRemove] = usePresence();
  //  const isPresent = useIsPresent();
  // console.log('isPresent', isPresent);
  // useEffect(() => {
  //   !isPresent && safeToRemove();
  // }, [isPresent, safeToRemove]);
  return (
    <>
      {/* <Box
        as="ul"
        display="flex"
        flexDirection="column"
        // gridGap="8px"
        position="absolute"
        top="100%"
        left="0"
        zIndex="20"
        // width="282px"
        // height="190px"
        bg="#fff"
        p="16px 8px "
      > */}
      <li>
        <DropdownLink to="learning_process/support">
          Навчально-методичне забезпечення
        </DropdownLink>
      </li>
      <li>
        <DropdownLink to="learning_process/disciplines ">
          Перелік дисциплін
        </DropdownLink>
      </li>
      <li>
        <DropdownLink to="learning_process/schedule">Розклад</DropdownLink>
      </li>
      <li>
        <DropdownLink>ВНС</DropdownLink>
      </li>
      {/* </Box> */}
    </>
  );
};

export const DepartmentListLink = () => {
  return (
    <>
      {/* <Box
        as="ul"
        display="flex"
        flexDirection="column"
        // gridGap="8px"
        position="absolute"
        top="100%"
        left="0"
        zIndex="20"
        // width="282px"
        // height="190px"
        bg="#fff"
        p="16px 8px "
      > */}
      <li>
        <DropdownLink to="about/teachers ">Викладачі</DropdownLink>
      </li>
      <li>
        <DropdownLink to="about/history ">Історія кафедри</DropdownLink>
      </li>
      <li>
        <DropdownLink to="about/partnership">Партнерство</DropdownLink>
      </li>
      <li>
        <DropdownLink>Новини</DropdownLink>
      </li>
      {/* </Box> */}
    </>
  );
};

export const ResearchActivitiesListLink = () => {
  return (
    <>
      {/* <Box
        as="ul"
        display="flex"
        flexDirection="column"
        // gridGap="8px"
        position="absolute"
        top="100%"
        left="0"
        zIndex="20"
        // width="282px"
        // height="190px"
        bg="#fff"
        p="16px 8px "
      > */}
      <li>
        <DropdownLink>Дослідження та здобутки</DropdownLink>
      </li>
      <li>
        <DropdownLink>Конференції</DropdownLink>
      </li>
      <li>
        <DropdownLink>Проекти</DropdownLink>
      </li>
      {/* </Box> */}
    </>
  );
};
