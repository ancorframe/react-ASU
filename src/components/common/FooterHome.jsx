import { Box } from "components/Box";
import { FooterDes, WrapHome } from './Footer.styled';



export const FooterHome = () => {
    return (
      <Box as="footer">
        <WrapHome>
          <FooterDes>
            © 2022 Department of automated management systems. All Rigths
            Reserved.
          </FooterDes>
          <FooterDes>Sokolov Design</FooterDes>
        </WrapHome>
      </Box>
    );
}