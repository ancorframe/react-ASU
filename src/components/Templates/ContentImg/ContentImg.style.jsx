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

export const Img = styled.img`
  border-radius: 2px;
  box-shadow: 4px 4px 0px 0px #0f1f2c;
  margin: 0 auto;
  margin-bottom: 12px;

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
