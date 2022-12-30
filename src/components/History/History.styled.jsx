import styled from 'styled-components';

export const ChapterContainer = styled.li`
  margin-bottom: 40px;
  @media screen and (min-width: 980px) {
    margin-bottom: 64px;
  }
`;

export const ChapterText = styled.li`
  :not(:last-child) {
    margin-bottom: 24px;
    @media screen and (min-width: 980px) {
      margin-bottom: 32px;
    }
  }
`;
