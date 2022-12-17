import styled from "styled-components";


export const SectionTitle = styled.section`

  padding: 40px 12px 20px;
  @media screen and (min-width: 980px) {
    padding-top: 80px;
      margin: 0 auto;
    padding-bottom: 44px;
    max-width: 1248px;
  }
`;
export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.xxl};
  line-height: 1.12;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  margin-bottom: 6px;
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.xxl};
    line-height: 1.07;
    margin-bottom: 12px;
  text-align: center;
  }

`;
export const TitleDescription = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.sm};
  line-height: 1.5;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.6;
    text-align: center;
  }
`;

export const Section = styled.section`
  padding: 0 12px 100px;
  @media screen and (min-width: 980px) {
    margin: 0 auto;
    padding: 0 0 128px;
    max-width: 1248px;
  }
`;

export const Wrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  margin-bottom: 16px;
  @media screen and (min-width: 1148px) {
justify-content: unset;
margin-bottom: 24px;
  }
`;

export const Item = styled.li`
   min-width: 366px;
   max-width: 400px; 
max-height: 320px;
  width: calc(100% / 3 - 17px);
`;

export const LoadMore = styled.button`
width: 100%;
  padding: 16px 0;

  display: flex;
  justify-content: center;
  background-color: ${p => p.theme.colors.white};
  border: 1px solid #bcc4d3;
  border-radius: 1px;

  font-family: ${p => p.theme.fonts.actions};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.m};
  line-height: 1.33;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 980px) {
    padding: 19px 0;
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.3;
  }
`;