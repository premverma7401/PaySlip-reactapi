import React from 'react';

const IconBtn = ({ Icon, button }) => {
  return (
    <div>
      <Icon /> <button>{button}</button>
    </div>
  );
};

export default IconBtn;
