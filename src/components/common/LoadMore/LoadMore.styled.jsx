import styled, { css } from 'styled-components';
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

export const Button = styled('button')(
  css`
  text-decoration: none;
    width: 100%;
    padding: 16px 0;
    display: flex;
    justify-content: center;
    background-color: ${p => p.theme.colors.white};
    border: 1px solid #bcc4d3;
    border-radius: 1px;
    height: 56px;
    font-family: ${p => p.theme.fonts.actions};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.actions.buttonL};
    line-height: 1.33;
    letter-spacing: -0.05em;
    color: ${p => p.theme.colors.black};
    transition-property: (border);
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    @media screen and (min-width: 980px) {
      padding: 19px 0;
      line-height: 1.3;
      height: 64px;
    }
    :hover,
    :focus {
      border: 1px solid ${p => p.theme.colors.black};
      text-decoration-line: underline;
    }
  `,
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  typography
);
