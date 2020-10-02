import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Switch, Route } from 'react-router-dom';
import ViewEmployees from './ViewEmployee/ViewEmployees';
import CreatePayslip from './Payslips/CreatePayslip';
import ViewPayslips from './Payslips/ViewPayslips';
import PayRecords from './PayRecord/PayRecords';
import Information from './Information';
import ViewEmployeeDetails from './ViewEmployee/ViewEmployeeDetails';
import { UserProvider } from '../store/UserContext';
import CreateUser from './CreateEmployee/CreateUser';
const MainDashboard = () => {
  return (
    <div className="app-container">
      <UserProvider>
        <Sidebar />
        {/* <Navbar title="Dashboard" /> */}
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={Navbar} />
            <Route path="/info" component={Information} />
            <Route path="/createemp" component={CreateUser} />
            <Route path="/viewemp" exact component={ViewEmployees} />
            <Route path="/viewemp/:id" component={ViewEmployeeDetails} />
            <Route path="/createpay" component={CreatePayslip} />
            <Route path="/viewpay" component={ViewPayslips} />
            <Route path="/payrecord" component={PayRecords} />
          </Switch>
        </div>
      </UserProvider>
    </div>
  );
};

export default MainDashboard;
