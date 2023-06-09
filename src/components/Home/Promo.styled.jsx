import styled from 'styled-components';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { ReactComponent as Svg } from '../../image/icons/Vector.svg';

export const PromoWrap = styled.section`
  /* padding: 0 12px; */
  position: relative;
  display:block;
  width: 100%;
  min-height:366px;
  max-height: 370px;
   border-radius: 4px;
    background: #f2f3f5;
  @media screen and (min-width: 980px) {
    padding: 0;
    height: 84vh;
    top: 96px;
    /* right:0px; */
    max-width: 472px;
    width: 100%;
    max-height: 900px;
    position: sticky;
   
    /* z-index: 10; */
    /* overflow: hidden; */
  }
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;

  height: 100%;
  @media screen and (max-width: 979px) {
    max-height: 370px;
  }
  @media screen and (min-width: 980px) {
    object-position: 75%;
  }
`;


export const Button = styled.button`
  position: absolute;
  padding: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 12px 24px 40px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);
  /* Note: backdrop-filter has minimal browser support */
  border: 0;
  border-radius: 4px;
  transition-property: (color, background-color);
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 980px) {
    width: 128px;
    height: 128px;
  }
  :hover,
  :focus {
    color: #ff7536;
    background-color: #fff;
  }
`;

export const Arrow = styled(Svg)`
  height: 24px;
  width: 19px;
  @media screen and (min-width: 980px) {
    height: 47px;
    width: 37px;
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;

  @media screen and (min-width: 980px) {
    right: 32px;
    bottom: 32px;
  }
`;

export const PromoText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.xs};
  line-height: 1.5;

  color: ${p => p.theme.colors.white};
  opacity: 0.8;
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.s};
    line-height: 1.42;
  }
`;