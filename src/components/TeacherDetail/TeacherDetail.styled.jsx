import styled from 'styled-components';

export const Wrap = styled.div`
padding-top: 36px;
  margin: 0 auto;

  padding:0 12px 100px ;
  @media screen and (min-width: 980px) {
    max-width: 1248px;
    
    display: flex;
    gap: 24px;

    padding-top: 80px;
    padding-bottom: 144px;
  }
`;

export const Section = styled.div`
  /* padding: 0 12px; */
  @media screen and (min-width: 980px) {
    max-width: 824px;
    padding: 48px;
  }
`;

export const ImgConteiner = styled.div`
min-width: 300px;
  max-width: 366px;
  margin-bottom: 44px;

  @media screen and (min-width: 980px) {
    padding: 0;
    /* padding-left: 12px; */
    margin: 0;
    max-width: 400px;
    width: 100%;
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
    margin-bottom: 2px;
  }
`;

export const Rank = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.sm};
  line-height: 1.12;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  margin-bottom: 40px;
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.07;
    padding-bottom: 12px;
    border-bottom: 1px solid #bcc4d3;
    margin-bottom: 32px;
  }
`;

export const ItemAchievements = styled.li`
  :not(:last-child) {
    margin-bottom: 40px;
    @media screen and (min-width: 980px) {
      margin-bottom: 32px;
    }
  }
  
`;

export const ListDescription = styled.ul`
  list-style: disc;
  padding-left: 10px;
  margin-left: 20px;
`;

export const TitleAchievements = styled.h2`
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.xl};
  line-height: 1.16;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  padding: 4px;
  margin-bottom: 20px;
  border-bottom: 1px solid #bcc4d3;
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.l};
    line-height: 1.25;
    padding: 0;
    border: 0;
  }
`;


export const Text = styled.p`
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


`;