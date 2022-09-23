import { StatList, StatisticTitle } from './Statistics.styled';
import { Box } from '../Box';
import { StatisticsItem } from './StatisticsItem';

export const Statistics = ({ data }) => {
  return (
    <Box bg="white" gridGap={3} boxShadow="medium">
      <StatisticTitle>Upload stats</StatisticTitle>
      <StatList>
        {data.map(data => {
          return <StatisticsItem key={data.id} data={data} />;
        })}
      </StatList>
    </Box>
  );
};

