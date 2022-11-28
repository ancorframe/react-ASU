import { PromoWrap } from "./Promo.styled";


import promo from '../../image/pexels.png';

export const Promo = () => {
    return (
      <PromoWrap as="section">
        <img src={promo} alt="" />
      </PromoWrap>
    );
}