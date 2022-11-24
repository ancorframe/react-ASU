import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Menu } from '../../image/icons/Frame.svg';
import { ReactComponent as Dropdown } from '../../image/icons/dropdown.svg';

export const ButtonLink = styled(NavLink)`
  /* width: 56px; */
  padding: 8px 20px;
  height: 32px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  /* identical to box height, or 200% */

  letter-spacing: 0.02em;

  /* Black */

  color: #161b1f;

  text-decoration: none;

  /* height: 30px;
  padding: 3px 9px;
  text-decoration: none;
  border: 1px solid rgba(25, 118, 210, 0.5);
  border-radius: 4px;
  color: #1976d2;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  :hover,
  :focus {
    background-color: rgba(25, 118, 210, 0.04);
    border: 1px solid #1976d2;
  }
  &.active {
    color: #fff;
    background-color: #1976d2;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    :hover,
    :focus {
      text-decoration: none;
      background-color: #1565c0;
      box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
        0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    }
  } */
`;


export const Logo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 3px;

`;
export const ButtonMenu = styled(Menu)`
  width: 48px;
  height: 48px;
  background-color: inherit;
  border: 0;
`;

export const ArrowDrop = styled(Dropdown)`
  width: 16px;
  height: 16px;
`;

export const ButtonDrop = styled.button`
display: flex;
align-items: center;
  padding: 8px 20px;
  height: 32px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  /* identical to box height, or 200% */

  letter-spacing: 0.02em;

  /* Black */

  color: #161b1f;
border: 0;
background-color: inherit;
`;
