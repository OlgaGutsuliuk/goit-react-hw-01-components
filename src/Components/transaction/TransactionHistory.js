import React from "react";
import PropTypes from "prop-types";
import TransactionItems from "./transactionItems/TransactionItems";
import {transaction} from './TransactionStyles.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={transaction}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TransactionItems item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
};