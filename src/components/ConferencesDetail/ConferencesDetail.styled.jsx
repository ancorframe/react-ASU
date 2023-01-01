import styled from 'styled-components';

export const InfoImg = styled.img`
  width: 100%;
  border-radius: 2px;
  box-shadow: 4px 4px 0px 0px #0f1f2c;
  margin-bottom: 16px;
  min-height: 220px;
  object-fit: cover;
  object-position: center;
`;

export const InfoDescription = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.main.additional};
  line-height: 1.5;
  color: ${p => p.theme.colors.blackLight};
  @media screen and (min-width: 980px) {
    line-height: 1.42;
  }
  text-align: right;
`;
