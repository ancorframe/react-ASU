import { Wrapper, StatItem } from './Statistics.styled';


export const StatisticsItem = ({ data: { label, percentage } }) => {
  return (
    <StatItem>
      <Wrapper>{label}</Wrapper>
      <Wrapper>{percentage}</Wrapper>
    </StatItem>
  );
};
