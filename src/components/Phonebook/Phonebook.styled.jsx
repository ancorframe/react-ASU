import styled from 'styled-components';

export const Title = styled.h2`
  padding: ${p => p.theme.space[4]}px 0px;
`;

export const Form = styled.form`
  padding: ${p => p.theme.space[4]}px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal} #000000;
`;
