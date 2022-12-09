import styled from "styled-components";


export const H1 = styled.h1`
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 60px;
  /* identical to box height, or 107% */

  letter-spacing: -0.05em;

  /* Black/100 */

  color: #0f1f2c;
`;

export const H2 = styled.h2`
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  /* identical to box height, or 120% */

  letter-spacing: -0.05em;

  /* Black/100 */

  color: #0f1f2c;
  ${p => p.m && `margin:${p.m};` }
`;

export const H3 = styled.h3`
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */

  letter-spacing: -0.05em;

  /* Black/100 */

  color: #0f1f2c;
`;

export const H4 = styled.h4`
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  letter-spacing: -0.05em;

  /* Black/100 */

  color: #0f1f2c;
`;

export const H5 = styled.h5`
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 140% */

  letter-spacing: -0.05em;

  /* Black/100 */

  color: #0f1f2c;
`;