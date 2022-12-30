import styled from 'styled-components';

export const Wraper = styled.div`
  :not(:last-of-type) {
    margin-bottom: 40px;
    @media screen and (min-width: 980px) {
      padding: 0;
      margin-bottom: 60px;
    }
  }
`;
export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 12px;
  box-shadow: 0px 24px 128px rgba(188, 196, 211, 0.3);
  border-radius: 8px;
  @media screen and (min-width: 980px) {
    padding: 48px;
  }
`;

export const InfoImg = styled.img`
  border-radius: 2px;
  box-shadow: 4px 4px 0px 0px #0f1f2c;
  margin-bottom: 16px;
  min-height: 220px;
  object-fit: cover;
  object-position: center;
`;

export const InfoDescription = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.main.additional};
  line-height: 1.5;

  color: ${p => p.theme.colors.blackLight};
  margin-bottom: 15px;
  @media screen and (min-width: 980px) {
    line-height: 1.42;
    margin-bottom: 20px;
  }

  text-align: right;
`;
