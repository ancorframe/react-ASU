import styled from 'styled-components';

export const Item = styled.li`
  width: calc(100% / 3 - 16px);
`;

export const SectionImg = styled.section`
  padding: 36px 12px 44px;
  @media screen and (min-width: 980px) {
    padding: 20px 12px 68px;
  }
`;

export const ImgContainer = styled.div`
  margin: 0 auto;

  position: relative;
  max-height: 480px;
  max-width: 1248px;
      border-radius: 2px;
    box-shadow: 4px 4px 0px 0px #0f1f2c;
`;

export const Img = styled.img`
  object-fit: cover;
  object-position: center;
  min-height: 320px;
  width: 100%;
  max-height: 480px;
`;

export const TitleContainer = styled.div`
  background-color: ${p => p.theme.colors.white};
  position: absolute;
  bottom: 12px;
  left: 12px;
  width: calc(100% - 12px * 2);

  @media screen and (min-width: 980px) {
    bottom: 24px;
    left: 24px;
    width: calc(100% - 24px * 2);
  }
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.xl};
  line-height: 1.16;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  padding: 14px 12px 12px;

  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.xl};
    line-height: 1.2;
    padding: 20px 24px 12px;
  }
`;
export const Section = styled.section`
  padding: 0 12px 40px;

  @media screen and (min-width: 980px) {
    padding: 0 0 128px;
  }
`;
export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  box-shadow: 0px 24px 128px rgba(188, 196, 211, 0.3);
  border-radius: 8px;
  @media screen and (min-width: 980px) {
    padding: 48px;
  }
`;
export const ContainerList = styled.ul`
  margin-bottom: 52px;
  @media screen and (min-width: 980px) {
    margin-bottom: 76px;
  }
`;

export const ContainerItem = styled.li`
  :not(:last-child) {
    margin-bottom: 24px;
    @media screen and (min-width: 980px) {
      margin-bottom: 32px;
    }
  }
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
  }
`;
export const ItemText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.sm};
  line-height: 1.5;
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.6;
  }
`;

export const List = styled.ul`
  padding-left: 10px;
  margin-left: 20px;
  list-style: disc;
`;






