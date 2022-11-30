import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  display: flex;

  justify-content: center;
  align-items: center;
  max-width:100%;
  height: 64px;

  background: #ffffff;
  border-radius: 1px;
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  letter-spacing: -0.05em;

  color: #161b1f;

  box-shadow: 0px 4px 128px rgba(188, 196, 211, 0.5);
`;