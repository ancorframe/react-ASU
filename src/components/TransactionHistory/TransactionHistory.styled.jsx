import styled from 'styled-components';


export const Table = styled.table`
  border: 1px solid #d5d5d5;
`;


export const Th = styled.th`
  width: 150px;
  height: 30px;
  background-color: #2196f3;
  color: white;
  text-transform: uppercase;
`;


export const Td = styled.td`
  width: 150px;
  height: 30px;
  text-align: center;
  text-transform: capitalize;

`;

export const Tr = styled.tr`
  background-color: #ffffff;
  &:nth-child(even) {
    background-color: #7ec6ffa1;
  }
`;