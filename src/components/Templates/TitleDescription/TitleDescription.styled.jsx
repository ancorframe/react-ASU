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

export const Description = styled('p')(
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
  css`
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSizes.main.body};
    line-height: 1.5;
    color: ${p => p.theme.colors.black};
    @media screen and (min-width: 980px) {
      line-height: 1.6;
    }
  `
);
