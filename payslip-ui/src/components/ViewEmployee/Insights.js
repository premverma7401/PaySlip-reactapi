import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../store/UserContext';

const Insights = () => {
  const [stats, setStats] = useContext(UserContext);
  return (
    <div className="info-stats">
      <h3>INSIGHTS</h3>
      <ul className="inner">
        {/* <li>Total Employees : </li> */}
        {stats.map((desiCount, i) => (
          <li key={i}>{desiCount.designation}</li>
        ))}
      </ul>
    </div>
  );
};

export default Insights;
