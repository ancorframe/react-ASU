import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// NewsCard

export const Card = styled(NavLink)`
  text-decoration: none;
  display: block;
  display: flex;
  flex-direction: column;
  gap: 16px;
/* min-width: 358px; */
  /* max-width: 400px; */
  /* max-height: 340px; */
  width: 100%;
  height: 100%;
  border-radius: 4px;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 128px rgba(188, 196, 211, 0.5);
  transition-property: box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    box-shadow: 0px 4px 128px rgb(112 123 144 / 56%);
  }
  @media screen and (min-width: 980px) {
gap: 20px;
  }
`;


export const ImgContainer=styled.div`
  margin: 4px 4px 0;  border: 2px solid #161b1f;  border-radius: 1px;
`
export const CardImg = styled.img`
  /* margin-top: 4px ; */
  /* max-width: 100%; */
  width: 100%;
  max-height: 240px;
  height: 100%;


  
`;

export const TextContainer = styled.div`
width: 100%;
margin-bottom: 16px;

  @media screen and (min-width: 980px) {
  margin-bottom: 24px;
  }
`;

export const CardText = styled.p`

  padding: 0 16px  0 16px;
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
    padding: 0 24px 0  24px;
    /* margin-bottom: 24px; */
  }

  height: 100%;
`;
