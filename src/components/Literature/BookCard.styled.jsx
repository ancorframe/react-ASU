// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Img = styled.img`
  object-fit: cover;
  object-position: center;
  max-height: 320px;
  width: 100%;
  height: auto;
`;

export const BookTitle = styled.p`
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.m};
  line-height: 1.33;
  letter-spacing: -0.06em;
  color: ${p => p.theme.colors.black};
  margin-bottom: 2px;
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.2;
    margin-bottom: 4px;
  }
 
`;
export const Card = styled.a`
  display: block;
  text-decoration: none;
  position: relative;
  /* max-width: 400px; */
  /* width: calc(100% / 3 - 24px); */
  /* max-height: 320px; */
  width: 100%;

  height: 100%;
  border: 2px solid #0f1f2c;
  border-radius: 2px;

  &:hover {
    /* background: red; */
    ${BookTitle} {
      text-decoration-line: underline;
    }
  }
`;
export const BookAuthor = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.xs};
  line-height: 1.5;
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.s};
    line-height: 1.42;
  }

`;

export const DescriptionContainer = styled.div`
  
`

export const Description = styled.div`
  /* display: block; */
  /* max-width: 100%; */
  /* width: calc(100% - 2 * 24px); */
  padding: 16px 20px;
  /* position: absolute; */
  /* left: 0; */
  /* bottom: 12px; */
  background-color: #ffffff;
  @media screen and (min-width: 980px) {
padding: 24px;
  }
`;

