import React from "react";
import PropTypes from "prop-types";
import StatisticsItems from "./statisticsItems/StatisticsItems";
import style from './StatsStyles.module.css'

const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>

      <ul className={style.list}>
        {stats.map(stat => (
          <StatisticsItems stat={stat} key={stat.id} />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.defaultProps = {
  title: ''
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
};


