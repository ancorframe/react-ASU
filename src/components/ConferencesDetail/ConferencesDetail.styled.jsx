import styled from "styled-components";

export const InfoContainer = styled.div`
    
`

export const Title=styled.h1`
    font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.xl};
  line-height: 1.16;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  padding: 14px 12px 0;
margin-bottom: 10px;

  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.xl};
    line-height: 1.2;
    padding: 20px 24px 0;
margin-bottom: 4px;
  }
`;

export const Time = styled.h5`
margin: 0;
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.s};
  line-height: 1.42;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  padding: 0 12px 12px;

  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.4;
    padding: 0 24px 20px;
  }
`;


export const InfoImg = styled.img`
  border-radius: 2px;
  box-shadow: 4px 4px 0px 0px #0f1f2c;
  margin-bottom: 16px;
  min-height: 220px;
  object-fit: cover;
  object-position: center;
`;

export const InfoDescription = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.xs};
  line-height: 1.5;

  color: ${p => p.theme.colors.blackLight};

  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.s};
    line-height: 1.42;

  }

  text-align: right;
`;