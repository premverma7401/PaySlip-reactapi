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

/* 
Sequence of the components.
Index.js is main-------- we dont put any code... only config code comes here...
app.js ------------ Routing...FIrst component of the app.
Features and there components..
MainDashboard
 1. Sidebar
 2. 





*/
