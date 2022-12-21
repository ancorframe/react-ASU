import styled from 'styled-components';

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.xxl};
  line-height: 1.12;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  padding: 0 12px;
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.xxl};
    line-height: 1.07;
    text-align: center;
  }
`;
export const TitleWrap = styled.div`
margin-top: 40px;
margin-bottom: 20px;
  @media screen and (min-width: 980px) {
margin-top: 80px;
margin-bottom: 40px;
  }
`;

export const AboutContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  box-shadow: 0px 24px 128px rgba(188, 196, 211, 0.3);
  border-radius: 8px;
  margin-bottom: 100px;
  @media screen and (min-width: 980px) {
  margin-bottom: 128px;
  }
`;

export const Button = styled.button`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.s};
  line-height: 1.28;
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.greyLight};
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.sm};
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

export const AboutWrap = styled.div`
  padding: 20px 12px;
  @media screen and (min-width: 980px) {
    padding: 48px;
  }
`;

export const ContainerInfo = styled.div`
  margin-bottom: 32px;
  @media screen and (min-width: 980px) {
    margin-bottom: 64px;
  }
`;

export const AboutTitle = styled.h2`
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.xl};
  line-height: 1.16;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.xl};
    line-height: 1.2;
    padding-bottom: 12px;
  }

  padding-bottom: 4px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${p => p.theme.colors.grey};
`;

export const Info = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.sm};
  line-height: 1.5;
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.6;
    ${p => p.mb && ' margin-bottom: 32px;'}
  }

  text-align: justify;

  ${p => p.mb && ' margin-bottom: 24px;'}
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


