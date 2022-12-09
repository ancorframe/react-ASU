import styled from 'styled-components';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { ReactComponent as Svg } from '../../image/icons/Vector.svg';

export const PromoWrap = styled.section`
  /* padding: 0 12px; */
  position: relative;
  width: 100%;
  max-height: 370px;
  @media screen and (min-width: 980px) {
    padding: 0;
    height: 100%;
    top: 96px;
    /* right:0px; */
    max-width: 472px;
    width: 100%;
    max-height: 840px;
    position: sticky;
    border-radius: 4px;
    background: #f2f3f5;
    /* z-index: 10; */
    /* overflow: hidden; */
  }
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: top;

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