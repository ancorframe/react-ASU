import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const SectionTitle = styled.section`
  padding: 40px 12px 36px;
  @media screen and (min-width: 980px) {
    padding-top: 80px;
    padding-bottom: 52px;
  }
`;

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.xxl};
  line-height: 1.12;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  margin-bottom: 6px;
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.xxl};
    line-height: 1.07;
    margin-bottom: 12px;
    text-align: center;
  }
`;

export const TitleDescription = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.sm};
  line-height: 1.5;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.6;
    text-align: center;
  }
`;


export const Section = styled.section`
  max-width: 1272px;
  padding: 0 12px;
  margin: 0 auto;
  padding-bottom: 100px;
  @media screen and (min-width: 980px) {
    padding-bottom: 128px;
  }
`;

export const Wrap = styled.ul`
  width: 100%;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (min-width: 1170px) {
 justify-content:unset;
  }
`;

export const Item = styled.li`
  width: 100%;

  height: 100%;
  min-width: 366px;
  max-width: 480px;
  @media screen and (min-width:780px) {
    /* max-height: 480px; */
    width: calc(100% / 2 - 16px);
  }
  @media screen and (min-width: 1170px) {
    /* max-height: 480px; */
    width: calc(100% / 3 - 16px);
  }
`;

export const Card = styled(NavLink)`
display: block;
position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1px;
  
`;

export const Img = styled.img`
  width: 100%;
  border: 2px solid #0f1f2c;
box-shadow: 4px 4px 0px 0px #0f1f2c;
`;

export const Descriptoin = styled.div`
    position: absolute;
    left: 0;
    bottom: 24px;
    width: 100%;
    background-color: #ffffff;
`
export const FullName = styled.h5`
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.s};
  line-height: 1.42;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.4;

  }

  margin: 0;

  margin-bottom: 2px;
`;

export const Rank = styled.p`
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.xs};
  line-height: 1.5;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.s};
    line-height: 1.42;
  }

`;