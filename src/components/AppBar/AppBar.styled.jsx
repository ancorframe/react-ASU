import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import {
  motion,
  // useCycle,
  // AnimatePresence
} from 'framer-motion';




export const ButtonLink = styled(NavLink)`
  position: relative;
  background-color: #fff;
  z-index: 130;
  display: flex;
  align-items: center;
  /* width: 56px; */
  padding: 8px 20px;
  height: 32px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  text-decoration-line: underline;

  /* Black/100 */

  color: #0f1f2c;

  transition-property: ( background);
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background: #f2f3f5;
    border-radius: 1px;
  }

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
  width: 32px;
  height: 32px;
  border-radius: 3px;
  @media screen and (min-width: 980px) {
    width: 48px;
    height: 48px;
  }
`;
export const ButtonMenu = styled.button`
  padding: 0;
  margin: 0;
  width: 40px;
  height: 40px;
  background-color: inherit;
  border: 0;
  border: 1px solid;
  border-color: #fff;
  transition-property: border-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 980px) {
    width: 48px;
    height: 48px;
  }
  :hover,
  :focus {
    border: 1px solid;
    border-color: #0f1f2c;
    border-radius: 1px;
  }
`;

export const ArrowDrop = styled(ArrowDropDownIcon)`
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

export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const Text = styled.p`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
`;

export const HeaderContainer = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
padding: 8px 12px;
  @media screen and (min-width: 980px) {
    padding: 24px;
  }
`;

export const ArrowRight = styled(ArrowRightIcon)`
  color: #ff7536;
`;
export const ArrowLeft = styled(ArrowLeftIcon)`
  color: #ff7536;
`;

export const Title = styled.h3`
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.desktop.l};
  line-height: 1.25;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.desktop.m};
  line-height: 1.4;
  text-decoration-line: underline;
  color: ${p => p.theme.colors.black};
  padding: 12px 24px;
  transition-property: (background);
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background: #f2f3f5;
    border-radius: 1px;
  }
`;

export const ListTitle = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.desktop.m};
  line-height: 1.3;
  letter-spacing: -0.06em;
  color: ${p => p.theme.colors.grey};
  padding: 12px 24px;
`;

export const ListLink = styled.ul`
  padding: 0px 24px 12px 24px;
`;

export const SubLink = styled(NavLink)`
  display: block;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.desktop.s};
  line-height: 1.43;
  text-decoration-line: underline;
  color: ${p => p.theme.colors.black};
  padding: 12px 24px;
  transition-property: (background);
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background: #f2f3f5;
    border-radius: 1px;
  }
`;

export const DropdownLink = styled(NavLink)`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  text-decoration-line: underline;
  padding: 8px 16px;
  display: block;
  color: #0f1f2c;
  white-space: nowrap;

  transition-property: (background);
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background: #f2f3f5;
    border-radius: 1px;
  }
`;

export const MotionWrap = styled(motion.ul)`
  position: absolute;
  left: 50%;
  top: 100%;
  min-width: 100%;
  /* width: 282px; */
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  overflow: hidden;
  /* z-index: 5; */
`;

