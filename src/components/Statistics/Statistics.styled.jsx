import styled from 'styled-components';

export const StatList = styled.ul`
  display: flex;
  
`;


export const Wrapper = styled.span`
  display: block;
  text-align: center;
`;

export const StatItem = styled.li`
  background-color: ${getRandomHexColor};
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2px;
`;

export const StatisticTitle = styled.h2`
  text-align: center;
  padding: 8px
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}