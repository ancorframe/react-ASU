import PropTypes from 'prop-types';
import { Th, Table } from './TransactionHistory.styled';
import { TransactionItem } from './TransactionItem';

export const TransactionHistory = ({ transaction }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </thead>
      <tbody>
        {transaction.map(t => (
          <TransactionItem key={t.id} transaction={t} />
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transaction: PropTypes.array.isRequired
}