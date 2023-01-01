import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FooterDes = styled.p`
  text-align: center;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.main.additional};
  line-height: 1.5;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  opacity: 0.4;
  @media screen and (min-width: 980px) {
    text-align: none;

    line-height: 1.42;
  }
`;

export const WrapHome = styled.div`
  @media screen and (min-width: 980px) {
    text-align: none;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  text-align: center;

  border-top: 1px solid rgba(15, 31, 44, 0.1);
  padding-top: 12px;
`;

export const Wrap = styled.div`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.main.additional};
  line-height: 1.5;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.white};
  opacity: 0.4;
  @media screen and (min-width: 980px) {
    text-align: none;
    line-height: 1.42;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  text-align: center;

  border-top: 1px solid rgba(255, 255, 255, 0.4);
  padding-top: 12px;
`;

export const Container = styled.div`
  background-color: ${p => p.theme.colors.black};
  border-radius: 4px;
  padding: 32px;
  @media screen and (min-width: 980px) {
    padding: 48px;
  }
`;

export const FooterContainer = styled.footer`
  padding: 0 12px 14px;
  margin: 0 auto;
  @media screen and (min-width: 980px) {
    padding: 0 24px 24px;
    /* padding: 0 24px 24px; */
    max-width: 1440px;
  }
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

export const Link = styled(NavLink)`
  display: block;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.actions.linkS};
  line-height: 1.5;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.white};

  @media screen and (min-width: 980px) {
    text-align: none;
    line-height: 1.42;
  }

  text-decoration-line: underline;
`;

export const LinkExternal = styled.a`
  display: block;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.actions.linkS};
  line-height: 1.5;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.white};

  @media screen and (min-width: 980px) {
    text-align: none;

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

export const FooterHomeContainer = styled.footer`
  padding-bottom: 20px;
  @media screen and (min-width: 980px) {
    padding-bottom: 24px;
  }
`;
