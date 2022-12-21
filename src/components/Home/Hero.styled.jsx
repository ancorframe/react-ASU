import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`

  padding-bottom: 40px;
  @media screen and (min-width: 980px) {
    padding-top: 32px;
    padding-bottom: 64px;
    max-width: 824px;
  }
`;

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.xxl};
  line-height: 1.12;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  margin-bottom: 8px;
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.xxl};
    line-height: 1.07;
    margin-bottom: 16px;
  }
`;
export const SecondTitle = styled.h3`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.l};
  line-height: 1.2;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  opacity: 0.1;
  margin-bottom: 4px;
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.l};
    line-height: 1.25;
    margin-bottom: 8px;
  }
`;

export const TitleAligh = styled.span`
  display: block;
`;
export const Text = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.sm};
  line-height: 1.5;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  margin-bottom: 20px;
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.6;
    margin-bottom: 40px;
  }
`;

export const LinkGraduates = styled(NavLink)`
  text-decoration: none;
  /* text-decoration-line: none; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 171px;
  height: 56px;
  border-radius: 2px;
  background-color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.actions};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.m};
  line-height: 1.33;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.white};
  transition-property: (background-color);
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.3;
    height: 64px;
  }

  :hover,
  :focus {
    text-decoration-line: underline;
    background-color: ${p => p.theme.colors.blackLight};
  }
`;

export const LinkAbout = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 171px;
  height: 56px;
  border-radius: 2px;
  background-color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fonts.actions};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.m};
  line-height: 1.33;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  border: 1px solid ${p => p.theme.colors.grey};
  transition-property: (background-color);
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.3;
    width: 144px;
    height: 64px;
  }

  :hover,
  :focus {
    text-decoration-line: underline;
    background-color: ${p => p.theme.colors.blackLight};
  }
`;
