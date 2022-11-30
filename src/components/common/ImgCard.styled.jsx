import styled from "styled-components";


export const Card = styled.div`
position: relative;
  border-radius: 4px;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 128px rgba(188, 196, 211, 0.5);
`;

export const Img = styled.img`
max-height: 480px;
  width: 100%;
  border: 2px solid #0f1f2c;
  border-radius: 1px;
  box-shadow: 4px 4px 0px 0px #0f1f2c;
`;


export const TextContainer = styled.div`
  right: 24px;
  max-width: 100%;
  position: absolute;
  left: 24px;
  bottom: 24px;
  background-color: #fff;
`;
export const Text = styled.h2`
  padding: 20px 24px 12px;
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  /* identical to box height, or 120% */

  letter-spacing: -0.05em;

  /* Black/100 */

  color: #0f1f2c;
`;