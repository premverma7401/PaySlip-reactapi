import React from 'react';
import MainDashboard from './components/MainDashboard.js';
import { BrowserRouter as Router } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <MainDashboard />
    </Router>
  );
};

export default App;
