import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  /* padding: 0 12px; */
  margin: 0 auto;
  margin-bottom: 40px;
  @media screen and (min-width: 980px) {
    margin-bottom: 64px;
    max-width: 824px;
  }
`;

export const NewsTitle = styled.h2`
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.xl};
  line-height: 1.16;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  margin-bottom: 24px;
  padding-bottom: 4px;
  border-bottom: 1px solid rgba(15, 31, 44, 0.1);
  opacity: 0.4;
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.xl};
    line-height: 1.2;
    margin-bottom: 46px;
    padding-bottom: 12px;
  }
`;

export const Item = styled.li`
width: 100%;
  @media screen and (min-width: 770px) {
    min-width: 250px;
    /* max-width: 400px; */
    width: calc(100% / 2 - 12px);
  }
`;

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


export const ListWrap = styled.ul`

  display: flex;
  @media screen and (max-width: 769px) {
    flex-direction: column;
  }
  gap: 16px;
  margin-bottom: 16px;
  @media screen and (min-width: 770px) {
    flex-wrap: wrap;
  }
  @media screen and (min-width: 980px) {
    gap: 24px;
    margin-bottom: 24px;
  }
`;
