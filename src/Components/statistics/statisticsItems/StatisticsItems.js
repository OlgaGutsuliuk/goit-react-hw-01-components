import React from 'react';
import PropTypes from "prop-types";
import { item, list_item } from '../StatsStyles.module.css';

const StatisticsItems = ({stat}) => {
    return (
        <li className={list_item}>
      <span className={item}>{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </li>
    );
}

export default StatisticsItems;

StatisticsItems.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired
}
