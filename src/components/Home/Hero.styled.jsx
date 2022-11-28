import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 60px;
  /* or 107% */

  letter-spacing: -0.05em;

  /* Black */

  color: #161b1f;
  margin-bottom: 16px;
`;
export const SecondTitle = styled.h2`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 48px;
  /* identical to box height, or 150% */

  /* Black */

  color: #161b1f;

  opacity: 0.1;
  margin-bottom: 16px;
`;

export const TitleAligh = styled.span`
  display: block;
`;
export const Text = styled.p`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  /* or 140% */

  /* Black */

  color: #161b1f;
  margin-bottom: 48px;
`;

export const LinkGraduates = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 202px;
  height: 64px;
  background: #0f1f2c;
  border-radius: 2px;
  /* padding: 16px 32px; */
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  letter-spacing: -0.05em;

  color: #ffffff;
`;

export const LinkAbout = styled(NavLink)`
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  letter-spacing: -0.05em;

  color: #161b1f;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 177px;
  height: 64px;
  background: #f8f9fb;
  border-radius: 1px;
  /* padding: 16px 40px; */
`;
