import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FooterDes = styled.p`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 28px;
  /* identical to box height, or 200% */

  /* Black */

  color: #161b1f;

  opacity: 0.4;
`;

export const WrapHome = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-top: 1px solid rgba(15, 31, 44, 0.1);
  padding-top: 12px;
`;

export const Wrap = styled.div`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  /* Black/00 */

  color: #ffffff;

  opacity: 0.4;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 12px;
`;

export const FooterContainer = styled.div`
  background: #0f1f2c;
  border-radius: 4px;
  padding: 48px;
`;

export const Title = styled.h5`
  padding-bottom: 8px;
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 140% */

  letter-spacing: -0.05em;

  /* Black/00 */

  color: #ffffff;

  opacity: 0.2;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0;
`;

export const Link = styled(NavLink)`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  text-decoration-line: underline;

  /* Black/00 */

  color: #ffffff;
`;
export const ListItem=styled.li`
  max-width: 300px;
  width: 100%;
`