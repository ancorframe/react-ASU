import styled from 'styled-components';


export const Title = styled.h1`
  margin-top: 77px;
  margin-bottom: 43px;
  text-align: center;
  display: block;
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 60px;
  /* identical to box height, or 107% */

  text-align: center;
  letter-spacing: -0.05em;

  /* Black/100 */

  color: #0f1f2c;
`;

export const Button = styled.button`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  letter-spacing: 0.02em;

  /* Black/00 */
  color: #0f1f2c;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;

  max-width: 304px;
  /* height: 40px; */
  width: 100%;
  /* Black/100 */
  border: 0;

  ${({ active }) =>
    active &&
    `background: #0f1f2c;
    color: #ffffff;
    border-radius: 1px;
    
  `}

`;


export const AboutTitle = styled.h2`
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  /* identical to box height, or 120% */

  letter-spacing: -0.05em;

  /* Black/100 */

  color: #0f1f2c;
  padding-bottom: 12px;
  margin-bottom: 20px;
  border-bottom: 1px solid #bcc4d3;
`;

export const Info = styled.p`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  /* or 160% */

  text-align: justify;

  /* Black/100 */

  color: #0f1f2c;
  margin-bottom: 48px;
  /* padding: 0px 48px; */
  margin-bottom: 20px;
`;

export const Img = styled.img`

  border-radius: 2px;
  box-shadow: 4px 4px 0px 0px #0f1f2c;
  margin: 0 auto;
  margin-bottom: 8px;
`;

export const AboutImg = styled.p`
  /* text-align: end; */
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  text-align: right;

  /* Black/100 */

  color: #0f1f2c;

  opacity: 0.4;
  margin-bottom: 20px;
`;

export const DocumentList = styled.ul`
padding-left: 35px;
  list-style: disc;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  /* or 160% */

  text-align: justify;

  /* Black/100 */

  color: #0f1f2c;
  margin-bottom: 76px;
`;

export const AditionaInfo = styled.p`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  /* Black/100 */

  color: #0f1f2c;

  opacity: 0.4;
`;