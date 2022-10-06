import PropTypes from 'prop-types';
import { Wrapper, Item } from './Profile.styled';

export const ProfileStats = ({ props, text }) => {
  return (
    <Item>
      <Wrapper>{text}</Wrapper>
      <Wrapper>{props}</Wrapper>
    </Item>
  );
};

ProfileStats.propTypes = {
  props: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
