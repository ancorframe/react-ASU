import styled from "styled-components";



export const SectionTitle = styled.section`
  padding: 40px 0;
`

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.xxl};
  line-height: 1.12;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
 padding: 0 12px;
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.xxl};
    line-height: 1.07;
padding: 0;
    text-align: center;
  }
`;

export const Section = styled.section`
  padding-bottom: 136px;
  @media screen and (min-width: 980px) {
padding-bottom: 128px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 12px;
  box-shadow: 0px 24px 128px rgba(188, 196, 211, 0.3);
  border-radius: 8px;
  @media screen and (min-width: 980px) {
    padding: 48px;
  }
`;

export const InfoContainer = styled.div`
  :not(:last-child) {
    margin-bottom: 40px;
    @media screen and (min-width: 980px) {
      margin-bottom: 64px;
    }
  }
  :last-child {
    margin-bottom: 52px;
    @media screen and (min-width: 980px) {
      margin-bottom: 76px;
    }
  }
`;

export const TitleBorder = styled.h2`
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.xl};
  line-height: 1.16;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
padding-bottom: 4px;
  border-bottom: 1px solid #bcc4d3;
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.xl};
    line-height: 1.2;
    padding-bottom: 12px;
  }
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.sm};
  line-height: 1.5;
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.6;
    text-align: justify;
  }
  :not(:last-child) {
    margin-bottom: 24px;
    @media screen and (min-width: 980px) {
     margin-bottom: 32px;
    }
  }
`;

export const SecondTitle = styled.h2`
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.xl};
  line-height: 1.16;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};

margin-bottom: 24px;
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.xl};
    line-height: 1.2;
margin-bottom: 32px;
  }

`;
export const Wrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media screen and (min-width: 980px) {
  }
`;
export const WrapItem = styled.li`
width: 100%;
`

export const CardWrap = styled.div`
  /* p="8px 20px  8px 8px"
        display="flex"
        gridGap="20px"
        alignItems="center" */
  /* width: 100%; */
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 8px 59px 8px 8px;
  border-radius: 1px;
  box-shadow: 0px 32px 128px rgba(188, 196, 211, 0.5);
  @media screen and (min-width: 980px) {
    gap: 20px;
    padding: 8px 20px 8px 8px;
  }
`;
export const CardButton = styled.button`
display: block;
padding: 0;
width: 100%;
max-width: 48px;
min-width: 48px;
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
  /* width: 100%; */
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.sm};
  line-height: 1.5;
  color: ${p => p.theme.colors.black};
  margin-bottom: 4px;
  ${p =>
    p.close &&
    ` margin-bottom: 0;
    text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  `}

  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.6;
    margin-bottom: 10px;
    ${p =>
      p.close &&
      `  margin-bottom: 0;
  `}
  }
`;


export const CardAuthor = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.xs};
  line-height: 1.33;
  color: ${p => p.theme.colors.blackLight};
  text-transform: uppercase;
  margin-bottom: 4px;
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.xs};
    line-height: 1.33;
    margin-bottom: 10px;
  }
`;



export const CardDescription = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.xs};
  line-height: 1.5;
  color: ${p => p.theme.colors.blackLight};

  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.s};
    line-height: 1.42;
  }

  :not(:last-child) {
    margin-bottom: 18px;
    @media screen and (min-width: 980px) {
margin-bottom: 20px;
    }
  }
`;

export const CardContainer = styled.div`
  @media screen and (max-width: 979px) {
  width:calc(100% - 64px);
  }
`;