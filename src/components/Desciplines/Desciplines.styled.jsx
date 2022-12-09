import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Item = styled.li`
  width: calc(100% / 2 - 12px);
`;

export const CardTitle = styled.p`
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  /* identical to box height, or 130% */

  letter-spacing: -0.06em;

  /* Black/100 */

  color: #0f1f2c;
`;

export const Link = styled(NavLink)`
    display: flex;
    min-height: 100px;
padding: 0 24px;
text-decoration: none;
align-items: center;
/* justify-content: center; */
`