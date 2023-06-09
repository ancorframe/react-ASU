import styled from "styled-components";





export const Form = styled.div`

  margin-bottom: 40px;
  /* @media screen and (min-width: 850px) {
    display: flex;
    gap: 24px;
    align-items: flex-end;
  } */
`;

export const InputWrap = styled.div`
  @media screen and (max-width: 849px) {
    width: 100%;
  }
  /* @media screen and (max-width: 849px) {
    :first-child {
      margin-bottom: 16px;
    }
  } */

  width: calc(100% / 2 - 12px);
`;

export const InputSelect = styled.select`
  appearance: none;
  height: 56px;
  background-color: ${p => p.theme.colors.white};
  width: 100%;
  border: 1px solid #bcc4d3;
  border-radius: 1px;
  padding: 12px 52px 12px 16px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.mobile.sm};
  line-height: 1.5;
  text-transform: capitalize;
  color: ${p => p.theme.colors.grey};
  @media screen and (min-width: 980px) {
    font-size: ${p => p.theme.fontSizes.desktop.m};
    line-height: 1.6;
  }
  cursor: pointer;
  transition-property: (border-color);
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    border-color: ${p => p.theme.colors.black};
    /* color: ${p => p.theme.colors.black}; */
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
  &:hover ${InputSelect} {
    text-decoration-line: underline;
  }
`;

export const RadioButtonWrap = styled.div`
  
`

export const RadioInput = styled.input`
  appearance: none;
  position: absolute;
  left: 0;
  top: 0;

`;

export const RadioLable = styled.label`
  margin: 0;
  padding: 0;
  padding: 11px 0;
  display: block;
  width: 100%;
  text-align: center;
  border-radius: 1px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.actions.buttonS};
  line-height: 1.28;
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 980px) {

    line-height: 1.25;
    padding: 10px 0;
  }
  cursor: pointer;
  letter-spacing: 0.02em;
  ${RadioInput}:checked + && {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.black};
  }
  transition-property: (color, background-color);
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.black};
  }
`;

export const Fieldset = styled.fieldset`
  display: flex;
  margin: 0;
  padding: 0;
  border: 0;
  padding: 4px;
  gap: 4px;
  margin-bottom: 36px;
  background-color: ${p => p.theme.colors.greyLight};
  border-radius: 2px;
  @media screen and (min-width: 980px) {
    padding: 8px;
    gap: 8px;
    margin-bottom: 30px;
  }
`;

export const RadioWrap = styled.div`
width: calc(100% / 5 - 3px);
/* height: 48px; */
@media screen and (min-width: 850px) {
  /* height: 56px; */
  width: calc(100% / 5 - 6px);
  }

`;

export const FieldContainer = styled.div`  
display: flex;
flex-direction: column;
gap: 16px;
margin-bottom: 28px;
@media screen and (min-width: 850px) {
   flex-direction: row;
  gap: 24px;
  margin-bottom: 24px;
  }
`;


export const ScheduleItem = styled.li`
  display: flex;
  min-height: 148px;
  width: 100%;
  align-items: center;
  @media screen and (min-width: 980px) {
    min-height: 190px;
  }
`;
export const TimeContainer = styled.div`
  min-width: 48px;
  align-self: flex-start;
`;

export const Time = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.main.tag};
  line-height: 1.33;
  color: ${p => p.theme.colors.grey};
  text-transform: uppercase;
  padding-top: 8px;
  padding-left: 6px;
`;

export const InfoContainer = styled.div`
  width: 100%;
  padding: 16px;
  background: #ffffff;
  margin:  6px 0;
  border: 1px solid #bcc4d3;
  border-radius: 2px;
  min-height: 136px;
  @media screen and (min-width: 980px) {
min-height: 178px;
  }
`;


export const InfoTitle = styled.p`
  font-family: ${p => p.theme.fonts.titles};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.actions.buttonL};
  line-height: 1.33;
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 980px) {

    line-height: 1.3;

  }
  letter-spacing: -0.06em;
  margin-bottom: 4px;
`;

export const Infolink = styled.a`
  display: inline-block;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.main.tag};
  line-height: 1.33;
  color: ${p => p.theme.colors.blue};
  text-transform: uppercase;
  padding: 2px 6px;
  background-color: ${p => p.theme.colors.blueLight};
  border-radius: 1px;
  margin-bottom: 24px;
  cursor: pointer;
  /* transition-property: (border-color);
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); */
  :hover,
  :focus {
    text-decoration-line:underline;
    /* color: ${p => p.theme.colors.black}; */
  }
`;


export const InfoTeacher = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.actions.linkL};
  line-height: 1.33;
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 980px) {

    line-height: 1.4;
  }
  text-decoration-line: underline;
`;


export const InfoImg = styled.img`
  object-fit: cover;
  object-position: center;
  width: 32px;
  height: 32px;
  @media screen and (min-width: 980px) {
width: 48px;
height: 48px;
  }
`;

export const InfoAltContainer = styled.div`
  width: 100%;
  background-color: ${p => p.theme.colors.greyLight};
  border-radius: 2px;
  min-height: 136px;
  margin: 6px 0;
  @media screen and (min-width: 980px) {
    min-height: 178px;
  }
`;