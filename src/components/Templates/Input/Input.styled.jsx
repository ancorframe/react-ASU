import styled from 'styled-components';
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  typography,
} from 'styled-system';
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
  }
  :focus {
    ::placeholder {
      color: ${p => p.theme.colors.black};
    }
  }
  ${color};
  ${space};
  ${layout};
  ${flexbox};
  ${grid};
  ${background};
  ${border};
  ${position};
  ${shadow};
  ${typography}
`;
