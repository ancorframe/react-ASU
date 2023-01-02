import styled from 'styled-components';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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

export const WrapList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media screen and (min-width: 980px) {
  }
`;
export const WrapItem = styled.li`
  width: 100%;
`;

export const CardWrap = styled.div`
  /* p="8px 20px  8px 8px"
        display="flex"
        gridGap="20px"
        alignItems="center" */
  /* width: 100%; */
  height: 100%;
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

  
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  /* &:hover {
    transform: rotate(90deg);
  } */
`;



export const CardButton = styled.button`
  display: block;
  outline: none;
  padding: 0;
  width: 100%;
  max-width: 40px;
  min-width: 40px;
  /* height: 48px; */
  height: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f3f5;
  border-radius: 1px;
  border: 0;
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 980px) {
    max-width: 48px;
    min-width: 48px;
    min-height: 48px;
  }

  :hover {
    border: 1px solid #0f1f2c;
  }
  ${({ open }) =>
    open &&
    `${Icon} {
      transform: rotate(-180deg);
      }`}
  ${({ open }) =>
    !open &&
    `:hover {
    ${Icon} {
      transform: rotate(-90deg);
    }`}
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
    width: calc(100% - 64px);
  }
`;
