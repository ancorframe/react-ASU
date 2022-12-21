import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// NewsCard

export const Card = styled(NavLink)`
/* text-decoration-line:none; */
  text-decoration: none;
  display: block;
  display: flex;
  flex-direction: column;
  gap: 16px;
  /* min-width: 358px; */
  /* max-width: 400px; */
  /* max-height: 340px; */
  /* width: 100%; */
  padding: 4px 4px 16px;
  height: 100%;
  border-radius: 4px;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 128px rgba(188, 196, 211, 0.5);
  transition-property: text-decoration;
  transition-duration: 2500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    /* box-shadow: 0px 4px 128px rgb(112 123 144 / 56%); */
    text-decoration-line: underline;
  }
  @media screen and (min-width: 980px) {
    padding: 4px 4px 24px;
    gap: 20px;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;

  border: 2px solid #161b1f;
  border-radius: 1px;
`;
export const CardImg = styled.img`
  /* margin-top: 4px ; */
  /* max-width: 100%; */
  width: 100%;
  height: 240px;
  object-fit: cover;
  object-position: center;

  @media screen and (max-width: 599px) {
    height: 156px;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  /* height: 48px; */
  /* margin-bottom: 16px; */
flex-grow: 1;
  /* @media screen and (min-width: 980px) { */
    /* margin-bottom: 24px; */
    /* height: 52px; */

  /* } */
`;

export const CardText = styled.p`
  padding: 0 12px 0 12px;
  /* margin-bottom: 16px; */
  font-family: ${p => p.theme.fonts.actions};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.m};
  line-height: 1.33;
  letter-spacing: -0.06em;
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.3;
    padding: 0 20px 0 20px;
    /* margin-bottom: 24px; */
  }

  height: 100%;
`;
