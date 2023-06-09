import { ListWrap } from 'components/Templates/ListWrap/ListWrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled.li`
  /* width: fit-content; */
  width: 100%;
  min-width: 366px;

  padding: 16px;
  @media screen and (min-width: 980px) {
    padding: 44px;
    /* width: calc( 100% / 2 - 12px ); */
    max-width: 612px;
  }
`;

export const Img = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 280px;
  @media screen and (min-width: 700px) {
    height: 350px;
  }
  @media screen and (min-width: 980px) {
    height: 480px;
  }
`;

export const ImgContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 280px;
  margin-bottom: 28px;
  border: 2px solid #0f1f2c;
  border-radius: 2px;
  box-shadow: 4px 4px 0px 0px #0f1f2c;
  @media screen and (min-width: 700px) {
    height: 350px;
  }
  @media screen and (min-width: 980px) {
    height: 480px;
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  background: #fff;
  width: 100%;
  left: 0;
  bottom: 24px;
  z-index:3;
`;


export const Link = styled(NavLink)`
    text-decoration: none;
    width: 100%;
    padding: 16px 0;
    display: flex;
    justify-content: center;
    background-color: ${p => p.theme.colors.white};
    border: 1px solid #bcc4d3;
    border-radius: 1px;
    height: 56px;
    font-family: ${p => p.theme.fonts.actions};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.actions.buttonL};
    line-height: 1.33;
    letter-spacing: -0.05em;
    color: ${p => p.theme.colors.black};
    transition-property: (border);
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    @media screen and (min-width: 980px) {
      padding: 19px 0;
      line-height: 1.3;
      height: 64px;
    }
    :hover,
    :focus {
      border: 1px solid ${p => p.theme.colors.black};
      text-decoration-line: underline;
    }
  `;

export const List = styled(ListWrap)`
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 466px), 1fr));
`;