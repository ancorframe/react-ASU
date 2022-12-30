import { H5 } from 'components/Templates/Title/Title.styled';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled.li`
  width: 100%;
  min-height: 400px;
  height: 100%;
  min-width: 366px;
`;

export const Img = styled.img`
  width: 100%;
  border: 2px solid #0f1f2c;
  box-shadow: 4px 4px 0px 0px #0f1f2c;
`;

export const Descriptoin = styled.div`
  position: absolute;
  left: 0;
  bottom: 24px;
  width: 100%;
  background-color: #ffffff;
`;

export const FullName = styled(H5)`
  margin: 0;
  margin-bottom: 2px;
`;
export const Card = styled(NavLink)`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1px;
  &:hover ${FullName} {
    text-decoration-line: underline;
    text-decoration-color: ${p => p.theme.colors.black};
  }
`;

export const Rank = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.main.additional};
  line-height: 1.5;
  letter-spacing: -0.05em;
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 980px) {
    line-height: 1.42;
  }
`;
