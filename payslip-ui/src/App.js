import React from 'react';
import MainDashboard from './components/MainDashboard.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
const App = () => {
  return (
    <Router>
      <MainDashboard />
    </Router>
  );
};

export default observer(App);
