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

export const Text = styled('p')(
  color,

  css`
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSizes.main.body};
    line-height: 1.5;
    color: ${p => p.theme.colors.black};
    text-align: justify;
    @media screen and (min-width: 980px) {
      line-height: 1.6;
    }
  `,
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
