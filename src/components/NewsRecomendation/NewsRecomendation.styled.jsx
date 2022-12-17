import styled from "styled-components";

export const Section = styled.section`
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 12px 100px;
  @media screen and (min-width: 980px) {
padding: 0  0 128px;
  }
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.xl};
  line-height: 1.16;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  opacity: 0.2;
  margin-bottom: 20px;

  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.xl};
    line-height: 1.2; 
     margin-bottom: 32px;
  }

`;

export const Wrap = styled.ul`
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          justify-content: center;
`;

export const Item = styled.li`
  min-width: 366px;
  max-width: 400px;
  /* max-height: 320px; */
  width: calc(100% / 3 - 17px);
`;