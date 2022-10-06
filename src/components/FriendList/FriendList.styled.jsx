import styled from 'styled-components';

export const Profile = styled.div``;

export const Frienditem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const IsOnline = styled.span`
  width: 12px;
  height: 12px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;
