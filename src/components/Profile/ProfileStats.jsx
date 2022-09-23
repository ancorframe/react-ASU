import { Wrapper, Item } from './Profile.styled';

export const ProfileStats = ({ props, text }) => {
  return (
    <Item>
      <Wrapper>{text}</Wrapper>
      <Wrapper>{props}</Wrapper>
    </Item>
  );
};