import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import CreateEmployee from './CreateEmployee/CreateEmployee';
import { Switch, Route } from 'react-router-dom';
import ViewEmployees from './ViewEmployee/ViewEmployees';
import CreatePayslip from './Payslips/CreatePayslip';
import ViewPayslips from './Payslips/ViewPayslips';
import PayRecords from './PayRecord/PayRecords';
import Information from './Information';
import ViewEmployeeDetails from './ViewEmployee/ViewEmployeeDetails';
const MainDashboard = () => {
  return (
    <div className="container">
      <Sidebar />
      {/* <Navbar title="Dashboard" /> */}
      <div className="main-content">
        <Switch>
          <Route exact path="/" component={Navbar} />
          <Route path="/info" component={Information} />
          <Route path="/createemp" component={CreateEmployee} />
          <Route path="/viewemp" component={ViewEmployees} />
          <Route path="/viewemp/:id" component={ViewEmployeeDetails} />
          <Route path="/createpay" component={CreatePayslip} />
          <Route path="/viewpay" component={ViewPayslips} />
          <Route path="/payrecord" component={PayRecords} />
        </Switch>
      </div>
    </div>
  );
};

export default MainDashboard;
