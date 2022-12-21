import { Box } from 'components/Box';
import { FooterDes, WrapHome,FooterHomeContainer } from './Footer.styled';

export const FooterHome = () => {
  return (
    <FooterHomeContainer>
      <WrapHome>
        <FooterDes>
          © 2022 Department of automated management systems. All Rigths
          Reserved.
        </FooterDes>
        <FooterDes>Sokolov Design</FooterDes>
      </WrapHome>
    </FooterHomeContainer>
  );
};
