import React from "react";
import StatisticsItems from "./statisticsItems/StatisticsItems";

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(stat => (
          <StatisticsItems stat={stat} key={stat.id} />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
