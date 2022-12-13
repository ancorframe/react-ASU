import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 100px;
  @media screen and (min-width: 980px) {
    padding-top: 80px;
    padding-bottom: 128px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 12px;
  @media screen and (min-width: 980px) {
    padding: 0;
    max-width: 1248px;
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
    margin-bottom: 16px;
    text-align: center;
  }
`;

export const PageDescription = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.sm};
  line-height: 1.5;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.6;
    margin-bottom: 58px;
    text-align: center;
  }
  margin-bottom: 40px;
`;

export const Wrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  @media screen and (min-width: 980px) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const Card = styled.li`
  width: fit-content;
  padding: 16px;
  @media screen and (min-width: 980px) {
    padding: 44px;
  }
`;

export const Img = styled.img``;

export const ImgContainer = styled.div`
  max-width: 516px;
  position: relative;
  /* box-shadow: 4px 4px 0px 0px #0f1f2c; */
  width: 100%;
  max-height: 480px;
  margin-bottom: 28px;
  border: 2px solid #0f1f2c;
  border-radius: 2px;
  box-shadow: 4px 4px 0px 0px #0f1f2c;
`;

export const TextContainer = styled.div`
  position: absolute;
  background: #fff;
  width: 100%;
  left: 0;
  bottom: 24px;
`;

export const CardText = styled.h4`
  padding: 20px 24px;
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.sm};
  line-height: 1.25;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.ml};
    line-height: 1.33;
  }
`;

export const Link = styled(NavLink)`
  padding: 16px 0;
  text-decoration: none;
  display: flex;
  justify-content: center;
  background-color: ${p => p.theme.colors.white};
  border: 1px solid #bcc4d3;
  border-radius: 1px;

  font-family: ${p => p.theme.fonts.actions};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.m};
  line-height: 1.33;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 980px) {
    padding: 19px 0;
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.3;
  }
`;
