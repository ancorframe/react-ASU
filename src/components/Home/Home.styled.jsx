
import styled from "styled-components";
import { color } from "styled-system";

export const Wrap = styled.div`
  /* min-width: 390px; */
  display: flex;
  margin: 0 auto;
  gap: 24px;
  flex-direction: column-reverse;
  @media screen and (min-width: 980px) {
    max-width: 1440px;
    flex-direction: row;
  }
  ${color}
`;


export const Container = styled.div`
padding: 0 12px;
/* min-width: 390px; */
  @media screen and (min-width: 980px) {
    padding: 0;
padding-left: 96px;
max-width: 920px;
  }
`;

export const PromoContainer = styled.div`
min-width: 330px;
  padding: 0 12px;
  @media screen and (min-width: 980px) {
    padding: 0;
    width: calc(100% - 920px);
    padding-right: 24px;
  }
`;