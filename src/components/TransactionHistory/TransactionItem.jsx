import PropTypes from 'prop-types';
import { Td, Tr } from './TransactionHistory.styled';

export const TransactionItem = ({
  transaction: { type, amount, currency },
}) => {
  return (
    <Tr>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Tr>
  );
};

TransactionItem.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  })
}