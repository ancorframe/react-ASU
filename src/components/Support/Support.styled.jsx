import styled from "styled-components";


export const CardButton = styled.button`
display: block;
padding: 0;
width: 100%;
max-width: 48px;
/* height: 48px; */
height: 100%;
min-height: 48px;
display: flex;
align-items: center;
justify-content: center;
  background: #f2f3f5;
  border-radius: 1px;
  border: 0;
`;

export const CardTitle = styled.p`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  /* identical to box height, or 160% */

  /* Black/100 */

  color: #0f1f2c;

`;

export const CardAuthor = styled.p`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  text-transform: uppercase;

  /* Black/80 */

  color: #33414c;
  margin: 10px 0;
`;

export const CardDescription = styled.p`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  /* Black/80 */

  color: #33414c;
`;