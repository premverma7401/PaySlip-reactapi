import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
const LoadingProgress = ({ text }) => {
  const changePosition = {
    margin: '200px 800px',
    padding: '50px',
  };
  return (
    <Segment style={changePosition}>
      <Dimmer active>
        <Loader>{text}</Loader>
      </Dimmer>
    </Segment>
  );
};

export default LoadingProgress;
