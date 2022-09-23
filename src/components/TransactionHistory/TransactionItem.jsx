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
