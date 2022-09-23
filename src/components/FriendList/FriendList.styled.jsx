import styled from 'styled-components'

export const Profile = styled.div`
`

export const Frienditem = styled.li`

&:not(:last-child){
    margin-bottom: 8px;
}
`;

export const IsOnline = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${p => p.isOnline ? 'green' : 'red'};
`;