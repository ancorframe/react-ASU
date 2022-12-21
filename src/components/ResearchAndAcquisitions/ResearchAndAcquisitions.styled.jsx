import styled from "styled-components";


export const Wrap = styled.div`

  padding: 20px 0;
  @media screen and (min-width: 980px) {
    padding: 0;

  }
  :not(:last-of-type) { 
     margin-bottom: 40px;
    @media screen and (min-width: 980px) {
      padding: 0;
      margin-bottom: 60px;
    }
  }
`;

export const AltTitle = styled.h5`
  margin: 0;
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.s};
  line-height: 1.42;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  margin-bottom: 20px;
  text-align: justify;
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.4;
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
margin-bottom: 15px;
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.s};
    line-height: 1.42;
    margin-bottom: 20px;  }

  text-align: right;
`;