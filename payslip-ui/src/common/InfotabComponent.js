import React from 'react';
import './InfotabComponent.css';

const InfotabComponent = ({ text }) => {
  return (
    <div className="info-banner">
      <h4>{text}</h4>
    </div>
  );
};

export default InfotabComponent;
