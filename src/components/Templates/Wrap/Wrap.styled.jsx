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

export const Container = styled('div')(
  css`
    margin: 0 auto;
    padding: 0 12px;
    @media screen and (min-width: 980px) {
      max-width: 1272px;
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
