import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// NewsCard

export const Card = styled(NavLink)`
  display: block;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* max-width: 400px; */
  max-height:340px;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 128px rgba(188, 196, 211, 0.5);
`;

export const CardImg = styled.img`
  margin-top: 4px;
  max-width: 388px;
width: 100%;
max-height: 240px;
height: 100%;
  border: 2px solid #161b1f;
  border-radius: 1px;
`;
export const CardText = styled.p`
padding: 0 24px 0 24px;
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  /* or 130% */

  letter-spacing: -0.06em;

  /* Black */

  color: #161b1f;

  height: 100%;
  margin-bottom: 24px;
`;
