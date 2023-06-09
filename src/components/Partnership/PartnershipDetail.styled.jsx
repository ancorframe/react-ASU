import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  gap: 12px;
  overflow-x: overlay;
  @media screen and (min-width: 980px) {
    justify-content: center;
  }
`;

export const Button = styled.button`
  font-family: ${p => p.theme.fonts.actions};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.actions.buttonL};
  line-height: 1.33;
  letter-spacing: -0.06em;
  color: ${p => p.theme.colors.blue};
  background-color: ${p => p.theme.colors.blueLight};
  cursor:pointer;
  @media screen and (min-width: 980px) {
    line-height: 1.3;
  }

  white-space: nowrap;
  padding: 8px 16px;
  text-decoration-line: underline;
  border: 0;
`;

export const About = styled.div`
  box-shadow: 0px 24px 128px rgba(188, 196, 211, 0.3);
  border-radius: 8px;
  padding: 12px 12px;
  @media screen and (min-width: 980px) {
    padding: 48px;
  }
  :not(:last-child) {
    margin-bottom: 40px;
    @media screen and (min-width: 980px) {
      margin-bottom: 48px;
    }
  }
`;

export const Img = styled.img`
  width:100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
  @media screen and (min-width: 980px) {
    height:480px;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  max-width: 1152px;
  height: 400px;
  width: 100%;
  min-height: 362px;
  margin-bottom: 44px;
  border: 2px solid #0f1f2c;
  box-shadow: 4px 4px 0px 0px #0f1f2c;
  border-radius: 1px;
  @media screen and (min-width: 980px) {
    margin-bottom: 84px;
      height: 480px;
  }
`;

export const Logo = styled.img`
  max-height: 24px;

  @media screen and (min-width: 980px) {
    max-height: 48px;
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  right: -2px;
  top: -2px;
  padding: 12px;
min-height:50px;
min-width:50px;
  background-color: ${p => p.theme.colors.white};
  border: 2px solid #0f1f2c;
  border-radius: 0px 1px;
  @media screen and (min-width: 980px) {
    padding: 16px;
  }
  z-index:2;
`;

export const DescriptionContainer = styled.div`
  background-color: ${p => p.theme.colors.white};
  position: absolute;
  @media screen and (min-width: 980px) {
    left: 24px;
    width: calc(100% - 48px);
    /* padding: 20px 24px; */
  }
  width: 100%;
  left: 0;
  bottom: 24px;
  z-index:2;
  /* padding: 16px 20px; */
`;

export const ImgLink = styled.a`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.actions.linkL};
  line-height: 1.4;
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 980px) {
    line-height: 1.5;
  }
  text-decoration-line: underline;
`;

export const InfoContainer = styled.div`
  max-width: 824px;
  margin: 0 auto;
  margin-bottom: 52px;
  @media screen and (min-width: 980px) {
    margin: 0 auto;
    margin-bottom: 92px;
  }
`;

export const ItemDetail = styled.li`
  :not(:last-child) {
    margin-bottom: 48px;
  }
`;

export const ItemTextDetail = styled.li`
  :not(:last-child) {
    margin-bottom: 24px;
    @media screen and (min-width: 980px) {
      margin-bottom: 32px;
    }
  }
`;
