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

// const styledSystem = [
//   color,
//   space,
//   layout,
//   flexbox,
//   grid,
//   background,
//   border,
//   position,
//   shadow,
//   typography,
// ];

// console.log(styledSystem.join(','));
export const H1 = styled('h1')(
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
    font-family: ${p => p.theme.fonts.titles};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.titles.h1};
    line-height: 1.12;
    letter-spacing: ${p => p.theme.letterSpacings.titles};
    color: ${p => p.theme.colors.black};
    @media screen and (min-width: 980px) {
      line-height: 1.07;
    }
  `
);

export const H2 = styled('h2')(
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
    font-family: ${p => p.theme.fonts.titles};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.titles.h2};
    line-height: 1.16;
    letter-spacing: ${p => p.theme.letterSpacings.titles};
    color: ${p => p.theme.colors.black};
    @media screen and (min-width: 980px) {
      line-height: 1.2;
    }
  `
);

export const H3 = styled('h3')(
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
    font-family: ${p => p.theme.fonts.titles};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.titles.h3};
    line-height: 1.2;
    letter-spacing: ${p => p.theme.letterSpacings.titles};
    color: ${p => p.theme.colors.black};
    @media screen and (min-width: 980px) {
      line-height: 1.25;
    }
  `
);

export const H4 = styled('h4')(
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
    font-family: ${p => p.theme.fonts.titles};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.titles.h4};
    line-height: 1.25;
    letter-spacing: ${p => p.theme.letterSpacings.titles};
    color: ${p => p.theme.colors.black};
    @media screen and (min-width: 980px) {
      line-height: 1.33;
    }
  `
);

export const H5 = styled('h5')(
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
    font-family: ${p => p.theme.fonts.titles};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.titles.h5};
    line-height: 1.42;
    letter-spacing: ${p => p.theme.letterSpacings.titles};
    color: ${p => p.theme.colors.black};
    @media screen and (min-width: 980px) {
      line-height: 1.4;
    }
  `,
  color
);