import styled from 'styled-components';

export const SectionTitle = styled.section`
  padding: 40px 12px 40px;
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
    max-width: 960px;
  }
`;
export const Container = styled.div`
  box-shadow: 0px 24px 128px rgba(188, 196, 211, 0.3);
  border-radius: 8px;
  @media screen and (min-width: 980px) {
    padding: 48px;
  }
`;

export const ChapterContainer = styled.div`
  :not(:last-child) {
    margin-bottom: 40px;
    @media screen and (min-width: 980px) {
      margin-bottom: 64px;
    }
  }
  :last-child {
    margin-bottom: 52px;
    @media screen and (min-width: 980px) {
      margin-bottom:76px;
    }
  }
`;

export const ChapterTitle = styled.h2`
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.xl};
  line-height: 1.16;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  padding-bottom: 4px;
  margin-bottom: 20px;
  border-bottom: 1px solid #bcc4d3;
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.xl};
    line-height: 1.2;
    padding-bottom: 12px;
    margin-bottom: 20px;
  }
`;

export const ChapterText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.sm};
  line-height: 1.5;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.6;
  }
  :not(:last-child) {
    margin-bottom: 24px;
    @media screen and (min-width: 980px) {
      margin-bottom: 32px;
    }
  }
`;
