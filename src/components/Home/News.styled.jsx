import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkAllNews = styled(NavLink)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fonts.actions};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.m};
  line-height: 1.33;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  border: 1px solid ${p => p.theme.colors.grey};
  border-radius: 1px;
  height: 56px;
  max-width: 824px;
  box-shadow: 0px 4px 128px rgba(188, 196, 211, 0.5);
  transition-property: (border);
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.3;
    height: 64px;
  }
  :hover,
  :focus {
    border: 1px solid ${p => p.theme.colors.black};
    text-decoration-line: underline;
  }
`;
