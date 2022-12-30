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

export const Section = styled('section')(
  css`
    padding-bottom: 100px;
    @media screen and (min-width: 980px) {
      padding-bottom: 128px;
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
