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
    padding: 40px 0 20px;
    @media screen and (min-width: 980px) {
      padding: 80px 0 40px;
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
