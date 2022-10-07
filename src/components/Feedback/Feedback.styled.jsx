import styled from 'styled-components';

export const Title = styled.h2`
  padding: ${p => p.theme.space[4]}px 0px;
`;
export const ButtonList = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
`;

export const Button = styled.button`
  background-color: inherit;
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;
  &:hover {
    background-color: #0048ffb5;
  }
`;

export const StatisticItem = styled.li`
  padding: ${p => p.theme.space[2]}px 0px;
`;
