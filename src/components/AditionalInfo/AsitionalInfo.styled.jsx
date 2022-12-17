import styled from "styled-components";


export const Text = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.xs};
  line-height: 1.5;
  color: ${p => p.theme.colors.black};
  padding-bottom: 20px;
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.s};
    line-height: 1.42;
    padding: 0;
  }
  opacity: 0.4;
`;