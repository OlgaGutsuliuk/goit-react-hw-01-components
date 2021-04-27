import React from "react";
import TransactionItems from "./transactionItems/TransactionItems";

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
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
