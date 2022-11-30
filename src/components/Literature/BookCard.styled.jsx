import styled from 'styled-components';

export const Img = styled.img`
max-height: 320px;
    width: 100%;
    height: auto;

`;

export const BookTitle = styled.p`
  font-family: 'Overpass Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  /* identical to box height, or 130% */

  letter-spacing: -0.06em;

  /* Black/100 */

  color: #0f1f2c;
  margin-bottom: 4px;
`;

export const BookAuthor = styled.p`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  /* Black/100 */

  color: #0f1f2c;
`;

export const Description = styled.div`
  display: block;
  max-width: 100%;
  width: calc(100% - 2 * 24px);
  padding: 24px;
  position: absolute;
  left: 0;
  bottom: 12px;
  background-color: #ffffff;
`;

export const Card = styled.div`
  position: relative;
  max-width: 400px;
  width: calc(100% / 3 - 24px);
  max-height: 320px;
  border: 2px solid #0f1f2c;
  border-radius: 2px;
`;