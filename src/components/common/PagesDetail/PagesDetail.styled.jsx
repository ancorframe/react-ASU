import styled from 'styled-components';

export const ImgContainer = styled.div`
  margin: 0 auto;
  height: 320px;
  position: relative;
  max-height: 480px;
  max-width: 1248px;
  border-radius: 2px;
  box-shadow: 4px 4px 0px 0px #0f1f2c;
  @media screen and (min-width: 980px) {
    height: 480px;
  }
`;

export const Img = styled.img`
  object-fit: cover;
  object-position: center;
  min-height: 320px;
  width: 100%;
  max-height: 480px;
`;

export const TitleContainer = styled.div`
  background-color: ${p => p.theme.colors.white};
  position: absolute;
  bottom: 12px;
  left: 12px;
  width: calc(100% - 12px * 2);
z-index:3;
  @media screen and (min-width: 980px) {
    bottom: 24px;
    left: 24px;
    width: calc(100% - 24px * 2);
  }
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  box-shadow: 0px 24px 128px rgba(188, 196, 211, 0.3);
  border-radius: 8px;
  padding: 0 12px;
  @media screen and (min-width: 980px) {
    padding: 48px;
  }
`;

export const ContainerItem = styled.li`
  :not(:last-child) {
    margin-bottom: 24px;
    @media screen and (min-width: 980px) {
      margin-bottom: 32px;
    }
  }
`;

export const List = styled.ul`
  padding-left: 10px;
  margin-left: 20px;
  list-style: disc;
`;
