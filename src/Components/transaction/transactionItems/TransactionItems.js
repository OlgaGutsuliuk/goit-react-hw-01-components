import React from "react";
import PropTypes from "prop-types";
import {list} from '../TransactionStyles.module.css';

const TransactionItems = ({ item }) => {
  return (
    <tr className={list}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  );
};

export default TransactionItems;

TransactionItems.prototype = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired
};