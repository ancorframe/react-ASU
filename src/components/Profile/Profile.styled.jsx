import styled from 'styled-components';

export const Stats = styled.ul`
  display: flex;
`;

export const Img = styled.img`
  width: 100px;
  border-radius: ${p => p.theme.radii.round};
  margin-bottom: auto;
`;

export const Wrapper = styled.span`
  display: block;
  text-align: center;
`;

export const Item = styled.li`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid #e0dddd;
  &:not(:last-child) {
    border-right: 1px solid #e0dddd;
  }
`;
