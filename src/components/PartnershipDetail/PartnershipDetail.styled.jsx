import styled from "styled-components";


export const SectionTitle = styled.section`

  padding: 40px 12px 40px;
  @media screen and (min-width: 980px) {
    padding-top: 80px;
    padding-bottom: 64px;
    max-width: 1248px;
      margin: 0 auto;
  }
`;

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.xxl};
  line-height: 1.12;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  margin-bottom: 20px;
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.xxl};
    line-height: 1.07;
    margin-bottom: 12px;
      text-align: center;

  }

`;
export const Wrap = styled.ul`
  display: flex;
  gap: 12px;
  overflow-x: overlay;
  @media screen and (min-width: 980px) {
    justify-content:center;
  }
`;

export const Button = styled.button`
  font-family: ${p => p.theme.fonts.actions};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.m};
  line-height: 1.33;
  letter-spacing: -0.06em;
  color: ${p => p.theme.colors.blue};
  background-color: ${p => p.theme.colors.blueLight};
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.3;
    
  }

  white-space: nowrap;
  padding: 8px 16px;
  text-decoration-line: underline;
  border: 0;
`;

export const Section = styled.section`
margin:  0 auto; 
padding-bottom: 100px;
  @media screen and (min-width: 980px) {
    padding-bottom: 128px;
    max-width: 1248px;
  }
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
  object-fit: cover;
  object-position: center;
  min-height: 362px;
`;

export const ImgContainer = styled.div`
  position: relative;
  max-width: 1152px;
  max-height: 480px;
  width: 100%;
  min-height: 362px;
  margin-bottom: 44px;
  @media screen and (min-width: 980px) {
    margin-bottom: 84px;
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
  right: 0;
  top: 0;
padding: 12px;
  background-color: ${p => p.theme.colors.white};
  border: 2px solid #0f1f2c;
  border-radius: 0px 1px;
  @media screen and (min-width: 980px) {
    padding: 16px;
  }
`;


export const DescriptonContainer = styled.div`
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
/* padding: 16px 20px; */
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 980px) {

    padding: 20px 24px;
  }
/* width: 100%; */
  padding: 16px 20px;
`;

export const ImgTitle = styled.h2`
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.xl};
  line-height: 1.2;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  margin-bottom: 4px;

  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.xl};
    line-height: 1.16;
  
  }
`;

export const ImgLink = styled.a`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.sm};
  line-height: 1.4;

  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
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
:not(:last-child){
    margin-bottom: 48px;
}

`

export const TitleDetail = styled.h2`
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mobile.xl};
  line-height: 1.16;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  margin-bottom: 20px;
  padding-bottom: 4px;
  border-bottom: 1px solid #bcc4d3;
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.xl};
    line-height: 1.2;
    padding-bottom: 12px;
  }
`;

export const TextDetail = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.sm};
  line-height: 1.5;
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.6;
  }

  text-align: justify;
`;

export const ItemTextDetail = styled.li`
  :not(:last-child) {
    margin-bottom: 24px;
    @media screen and (min-width: 980px) {
margin-bottom: 32px;
    }
  }
`;