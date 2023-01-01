import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TitleAligh = styled.span`
  display: block;
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
  transition-property: (border);
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
    border: 1px solid #0f1f2c;
  }
`;
