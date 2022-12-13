import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FooterDes = styled.p`
  text-align: center;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.xs};
  line-height: 1.5;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  opacity: 0.4;
  @media screen and (min-width: 980px) {
    text-align: none;
    font-size: ${p => p.theme.fontSizes.desktop.s};
    line-height: 1.42;
  }
`;

export const WrapHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  border-top: 1px solid rgba(15, 31, 44, 0.1);
  padding-top: 12px;
  @media screen and (min-width: 980px) {
    align-items: unset;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 24px;
  }
`;

export const Wrap = styled.div`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.xs};
  line-height: 1.5;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.white};
  opacity: 0.4;
  @media screen and (min-width: 980px) {
    text-align: none;
    font-size: ${p => p.theme.fontSizes.desktop.s};
    line-height: 1.42;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  text-align: center;

  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 12px;
`;

export const Container = styled.div`
  margin: 0 12px;
  background-color: ${p => p.theme.colors.black};
  border-radius: 4px;
  padding: 32px;
  @media screen and (min-width: 980px) {
    padding: 48px;
    margin: 0 24px;
  }
`;

export const FooterContainer = styled.footer`
  padding-bottom: 12px;
  @media screen and (min-width: 980px) {
    padding-bottom: 24px;
    /* padding: 0 24px 24px; */
    max-width: 1440px;
    margin: 0 auto;
  }
  /* padding: 0 12px 12px; */

  margin: 0 auto;
`;

export const ListLink = styled.ul`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  margin-bottom: 16px;
  @media screen and (min-width: 980px) {
    margin-bottom: 64px;
    flex-direction: row;
  }
`;

export const Title = styled.h5`
  width: 100%;
  padding-bottom: 2px;
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.s};
  line-height: 1.42;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.white};
  opacity: 0.2;
  margin-bottom: 8px;
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.4;
    padding-bottom: 8px;
    margin-bottom: 12px;
  }

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Link = styled(NavLink)`
  display: block;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.mobile.xs};
  line-height: 1.5;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.white};

  @media screen and (min-width: 980px) {
    text-align: none;
    font-size: ${p => p.theme.fontSizes.desktop.s};
    line-height: 1.42;
  }

  text-decoration-line: underline;
`;

export const ListItem = styled.li`
  /* display: block; */
  max-width: 300px;
  /* width: 100%; */
  width: calc(100% / 4 - 24px);
  min-width: 250px;
`;

export const LinkItem = styled.li`
  :not(:last-child) {
    margin-bottom: 8px;
    @media screen and (min-width: 980px) {
      margin-bottom: 12px;
    }
  }
`;
