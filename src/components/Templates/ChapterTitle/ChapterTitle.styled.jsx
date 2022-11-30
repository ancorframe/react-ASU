import styled from "styled-components";

export const Title = styled.h2`
  /* Titles/H2 */

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
  ${p => p.border && ' border-bottom: 1px solid #bcc4d3;'}
`;