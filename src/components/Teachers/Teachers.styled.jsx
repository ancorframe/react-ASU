import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Item = styled.li`
  width: calc(100% / 3 - 16px);
  max-height:480px;
  height :100% ;
  min-width: 395px;
`;

export const Card = styled(NavLink)`
display: block;
position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1px;
  
`;

export const Img = styled.img`
  width: 100%;
  border: 2px solid #0f1f2c;
box-shadow: 4px 4px 0px 0px #0f1f2c;
`;

export const Descriptoin = styled.div`
    position: absolute;
    left: 0;
    bottom: 24px;
    width: 100%;
    background-color: #ffffff;
`
export const FullName = styled.h5`
margin: 0;
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 140% */

  letter-spacing: -0.05em;

  /* Black/100 */

  color: #0f1f2c;
  margin-bottom: 2px;
`;

export const Rank = styled.p`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  /* Black/100 */

  color: #0f1f2c;
`;