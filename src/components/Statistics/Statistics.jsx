import PropTypes from 'prop-types';
import { StatList, StatisticTitle } from './Statistics.styled';
import { Box } from '../Box';
import { StatisticsItem } from './StatisticsItem';

export const Statistics = ({ data ,title}) => {
  return (
    <Box bg="white" gridGap={3} boxShadow="medium">
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatList>
        {data.map(data => {
          return <StatisticsItem key={data.id} data={data} />;
        })}
      </StatList>
    </Box>
  );
};


Statistics.propType = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string
}
