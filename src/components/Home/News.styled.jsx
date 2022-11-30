import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NewsTitle = styled.h2`
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  /* identical to box height, or 109% */

  letter-spacing: -0.05em;

  /* Black */

  color: #161b1f;

  opacity: 0.4;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(15, 31, 44, 0.1);
  margin-bottom: 38px;
`;

export const Item = styled.li`
  width: calc(100% / 2 - 12px);
`;

export const LinkAllNews = styled(NavLink)`
  display: flex;

  justify-content: center;
  align-items: center;
  max-width: 824px;
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