import PropTypes from 'prop-types';
import {
  Table,
  TableHeader,
  TableBody,
  TableHeaderCell,
  TableRow,
  TableData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHeader>
        <tr>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
        </tr>
      </TableHeader>
      <TableBody>
        {items.map(item => (
          <TransactionItem key={item.id} item={item} />
        ))}
      </TableBody>
    </Table>
  );
};

const TransactionItem = ({ item }) => {
  return (
    <TableRow>
      <TableData>{item.type}</TableData>
      <TableData>{item.amount}</TableData>
      <TableData>{item.currency}</TableData>
    </TableRow>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

TransactionItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }),
};
