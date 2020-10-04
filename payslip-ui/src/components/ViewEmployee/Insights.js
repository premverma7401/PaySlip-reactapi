import React from 'react';

const Insights = ({ desiStats }) => {
  return (
    <div className="info-stats">
      <div className="ui card">
        <div className="content">
          <div className="header">Company Insights</div>
        </div>
        {desiStats.map((desi, i) => (
          <div className="content" key={i}>
            <div className="description">
              {desi.designation} - {desi.designationCount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
