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
// import { motion } from 'framer-motion';

export const Grid = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 16px;
  @media screen and (min-width: 980px) {
    grid-template-columns: repeat(3, minmax(330px, 1fr));
    gap: 24px;
  }

  ${color}
  ${space}
${layout}
${flexbox}
${grid}
${background}
${border}
${position}
${shadow}
${typography}
`;
