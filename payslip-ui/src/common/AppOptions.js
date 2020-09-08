import React from 'react';

const AppOptions = ({ Icon, text }) => {
  return (
    <div className="app-options-group">
      <div>{Icon}</div>
      <div>{text}</div>
    </div>
  );
};

export default AppOptions;
