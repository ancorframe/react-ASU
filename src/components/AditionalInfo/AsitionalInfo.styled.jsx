import styled from "styled-components";


export const Text = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.main.additional};
  line-height: 1.5;
  /* color: ${p => p.theme.colors.black}; */
  color: rgba(15, 31, 44, 0.4);
  padding-top: 12px;
  /* opacity: 0.4; */

  border-top: 1px solid #f2f3f5;

  @media screen and (min-width: 980px) {

    line-height: 1.42;
  
  }
`;