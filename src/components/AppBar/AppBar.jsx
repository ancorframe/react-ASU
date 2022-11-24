import { Box } from 'components/Box';
import logo from '../../image/logo/V2@2x.png'
import { ButtonDrop, ButtonMenu, Logo, ArrowDrop } from './AppBar.styled';
// import { useStatus } from 'Redux/Selectors';
import { ButtonLink } from './AppBar.styled';
// import { UserMenu } from '../UserMenu/UserMenu';
// import { HiMenuAlt4 } from 'react-icons/hi';
// import { ReactComponent as Menu } from '../../image/icons/Frame.svg';

export const AppBar = () => {
  // const { isLoggedIn } = useStatus();

  return (
    <Box as="header" display="flex" alignItems="center" p="24px" gridGap="70px">
      <Logo src={logo} alt="Logo" />
      <Box as="nav" display="flex" gridGap="11px" alignItems="center">
        <ButtonLink to="#">ВСТУП</ButtonLink>
        <ButtonLink to="#">Корисна література</ButtonLink>
        <ButtonLink to="#">Викладачі</ButtonLink>
        <ButtonDrop to="#">
          Навчальний процес
          <ArrowDrop />
        </ButtonDrop>
        <ButtonLink to="#">Партнерство</ButtonLink>
        <ButtonLink to="#">Історія кафедри</ButtonLink>
        <ButtonDrop to="#">
          Наукова діяльність
          <ArrowDrop />
        </ButtonDrop>
        <ButtonMenu />
        {/* {!isLoggedIn && ( */}
        {/* <Box ml="auto" gridGap={4} display="flex" alignItems="center"> */}
        {/* <ButtonLink to="register">Register</ButtonLink> */}
        {/* <ButtonLink to="login">Login</ButtonLink> */}
        {/* </Box> */}
        {/* )} */}

        {/* {isLoggedIn && <UserMenu />} */}
      </Box>
    </Box>
  );
};
