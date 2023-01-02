import { Article } from 'components/Templates/Article/Article';
import styled from 'styled-components';

export const Button = styled.button`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.main.button};
  line-height: 1.28;
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.greyLight};
  @media screen and (min-width: 980px) {
    line-height: 1.25;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  max-width: 304px;
  width: 100%;
  border: 0;
  border-radius: 1px;
  transition-property: (background-color);
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  ${({ active }) =>
    active &&
    `  background-color: #0F1F2C;
    color: #FFFFFF;
    
  `}
  ${({ active }) =>
    !active &&
    ` :hover,:focus  {
    background-color:#33414C;
    color: #FFFFFF;
     }
  `} /* :hover,:focus :not(:checked) {
    background-color: ${p => p.theme.colors.grey}; */
    cursor:pointer;
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 4px;
  padding: 4px;
  margin: 8px 8px 0;
  background-color: ${p => p.theme.colors.greyLight};
  border-radius: 2px;
  @media screen and (min-width: 980px) {
    padding: 8px;
    gap: 8px;
  }
`;

export const Info = styled(Article)`
  :not(:last-of-type) {
    margin-bottom: 24px;
    @media screen and (min-width: 980px) {
      margin-bottom: 32px;
    }
  }
`;

export const Img = styled.img`
  border-radius: 2px;
  box-shadow: 4px 4px 0px 0px #0f1f2c;
  margin: 0 auto;
  margin-bottom: 8px;
`;

export const AboutImg = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.xs};
  line-height: 1.5;
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.6;
  }

  text-align: right;

  opacity: 0.4;
  margin-bottom: 20px;
`;

export const DocumentList = styled.ul`
  padding-left: 35px;
  list-style: disc;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.xs};
  line-height: 1.5;
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.6;
  }
`;
