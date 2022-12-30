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
  max-height: 280px;
  @media screen and (min-width: 700px) {
    max-height: 350px;
  }
  @media screen and (min-width: 980px) {
    min-height: 480px;
  }
`;

export const ImgContainer = styled.div`
  /* max-width: 516px; */
  position: relative;
  /* box-shadow: 4px 4px 0px 0px #0f1f2c; */
  width: 100%;
  /* max-height: 480px; */
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
