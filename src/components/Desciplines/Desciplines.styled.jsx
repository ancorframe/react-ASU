import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled.li`
  min-width: 366px;
  /* max-width: 632px; */
  width: 100%;
  border: 2px solid #F2F3F5;
border-radius: 4px;
  @media screen and (min-width: 888px) {
    width: calc(100% / 2 - 12px);

  }
`;

export const CardTitle = styled.p`
  font-family: ${p => p.theme.fonts.actions};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.m};
  line-height: 1.33;
  letter-spacing: -0.06em;
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.3;
  }
  :hover,:focus{
      text-decoration-line: underline;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  min-height: 100px;
  padding: 20px 24px 16px;
  text-decoration: none;
  align-items: center;
  @media screen and (min-width: 980px) {
    padding: 26px 24px 22px;
  }
`;

export const SectionTitle = styled.section`
  padding: 40px 12px 20px;
  max-width: 1248px;
  @media screen and (min-width: 980px) {
    margin: 0 auto;
    padding: 80px 0 44px;
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

export const Description = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.sm};
  line-height: 1.5;
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.6;
    text-align: center;
  }
`;

export const Section = styled.section`
  padding: 0 12px 100px;
  max-width: 1248px;
  margin: 0 auto;
  @media screen and (min-width: 980px) {
    padding: 0 12px;
    padding-bottom: 128px;
  }
`;

export const Wrap = styled.ul`

  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  justify-content: center;
  @media screen and (min-width: 888px) {
    justify-content: unset;
  }
`;


export const Form = styled.form`
  margin-bottom: 40px;
  @media screen and (min-width: 850px) {
    display: flex;
    gap: 24px;
    align-items: flex-end;
  }
`;

export const InputWrap = styled.div`
  @media screen and (max-width: 849px) {
    width: 100%;
  }
  @media screen and (max-width: 849px) {
    :first-child {
      margin-bottom: 16px;
    }

  }

width: calc( 100% / 2 - 12px);
`;


export const InputSelect = styled.select`
  /* @media screen and (min-width: 850px) {
    width: 320px;
  } */
  appearance: none;
  height: 56px;
  background: #ffffff;
  width: 100%;
  border: 1px solid #bcc4d3;
  border-radius: 1px;
  padding: 12px 52px 12px 16px;

  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.sm};
  line-height: 1.5;
  color: ${p => p.theme.colors.grey};
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.6;
  }
  cursor: pointer;
  transition-property: (border-color);
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    border-color: ${p => p.theme.colors.black};
    /* color: ${p => p.theme.colors.black}; */
  }
`;

export const Label = styled.label`
  display: inline-block;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.desktop.xs};
  line-height: 1.33;

  color: ${p => p.theme.colors.grey};
  margin-bottom: 4px;

  text-transform: uppercase;
`;
