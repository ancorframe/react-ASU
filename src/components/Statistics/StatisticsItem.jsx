import PropTypes from 'prop-types';
import { Wrapper, StatItem } from './Statistics.styled';

export const StatisticsItem = ({ data: { label, percentage } }) => {
  return (
    <StatItem>
      <Wrapper>{label}</Wrapper>
      <Wrapper>{percentage}</Wrapper>
    </StatItem>
  );
};

StatisticsItem.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
