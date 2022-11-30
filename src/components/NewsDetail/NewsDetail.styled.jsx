import styled from "styled-components";


export const List = styled.ul`
  list-style: disc;
  padding-left: 35px;
  ${props => (props.mb && 'margin-bottom:20px;')};
`;

export const Item = styled.li`
  width: calc(100% / 3 - 16px);
`;