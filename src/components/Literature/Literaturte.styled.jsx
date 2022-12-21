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
    padding: 0 12px 128px;
    max-width: 1248px;
  }
`;

export const Wrap = styled.ul`
  margin: 0 auto;

  display: flex;
  @media screen and (max-width: 769px) {
    flex-direction: column;
  }
  gap: 24px;
  margin-bottom: 16px;
  @media screen and (min-width: 770px) {
    flex-wrap: wrap;
  }
  @media screen and (min-width: 980px) {
    margin-bottom: 24px;
  }
`;

export const Item = styled.li`
  min-width: 280px;

  max-height: 320px;
  width: 100%;
  @media screen and (min-width: 770px) {
    width: calc(100% / 2 - 12px);
    max-width: 460px;
  }

  @media screen and (min-width: 980px) {
    width: calc(100% / 3 - 16px);
  }
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

export const Form = styled.form`
margin-bottom: 40px;
  @media screen and (min-width: 850px) {

display: flex;
  gap: 24px;
  align-items: flex-end;
  
  }
`;

export const InputField = styled.input`
  height: 56px;
  background: #ffffff;
  width: 100%;
  border: 1px solid #bcc4d3;
  border-radius: 1px;
  padding: 12px 52px 12px 16px;
  transition-property: (border-color, color);
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  ::placeholder {
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSizes.mobile.sm};
    line-height: 1.5;
    color: ${p => p.theme.colors.grey};
    @media screen and (min-width: 980px) {
      font-size: ${p => p.theme.fontSizes.desktop.m};
      line-height: 1.6;
    }
  }
  :hover,
  :focus {
    border-color: ${p => p.theme.colors.black};
    /* color: ${p => p.theme.colors.black}; */
  }
  :focus {
    ::placeholder {
      color: ${p => p.theme.colors.black};
    }
  }
`;

export const Label = styled.label`
  display: inline-block;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.desktop.xs};
  line-height: 1.33;

  color: ${p => p.theme.colors.grey};
  margin-bottom: 4px;

  text-transform: uppercase;

`;

export const InputWrap = styled.div`
  @media screen and (max-width: 849px) {
    width: 100%;
  }
  @media screen and (max-width: 849px) {
    :first-child{
      margin-bottom: 16px;
    }
    :last-of-type{
      margin-bottom: 36px;
    }
  }

  :first-child {
    width: 100%;
  }
`;


export const InputSelect = styled.select`
  @media screen and (min-width: 850px) {
    width: 320px;
  }
  appearance: none;
  height: 56px;
  background: #ffffff;
  width: 100%;
  border: 1px solid #bcc4d3;
  border-radius: 1px;
  padding: 12px 52px 12px 16px;
  transition-property: (border-color);
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.sm};
  line-height: 1.5;
  color: ${p => p.theme.colors.grey};
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.6;
  }
  cursor: pointer;
  :hover,
  :focus {
    border-color: ${p => p.theme.colors.black};
    /* color: ${p => p.theme.colors.black}; */
  }
`;

export const ResetButton = styled.button`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  min-width: 56px;
  @media screen and (min-width: 850px) {
    width: 56px;
  }
  /* Black/100 */
  transition-property: (background-color);
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  color: ${p => p.theme.colors.white};
  border: 0;
  background-color: ${p => p.theme.colors.black};
  border-radius: 1px;
  cursor: pointer;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.blackLight};
  }
`;

export const OptionPlaceholder = styled.option`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.sm};
  line-height: 1.5;
  color: ${p => p.theme.colors.grey};
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.6;
  }
`;