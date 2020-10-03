import React from 'react';
import { Preloader } from 'react-materialize';

const LoadingProgress = () => {
  const customStyle = {
    display: 'flex',
    justifyContent: 'center',
    transform: 'translateY(300px)',
  };
  return (
    <div style={customStyle}>
      <Preloader active color="blue" flashing={true} size="big" />
    </div>
  );
};

export default LoadingProgress;
