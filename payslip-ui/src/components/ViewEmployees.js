import React from 'react';
import Navbar from './Navbar';
import '../styles/viewEmployee.css';
const ViewEmployees = () => {
  return (
    <div>
      <Navbar title="View Employee" />
      <div className="main">
        <div className="emp-details">
          <div>
            <p>GENERAL DETAILS</p>
            <div>
              <span>User name</span>
              <span>Full name</span>
              <span>Email</span>
            </div>
            <div>
              <span>Contact No.</span>
              <span>Department</span>
              <span>Designantion</span>
            </div>
          </div>
          <div>
            <p>PERSONAL DETAILS</p>
            <div>
              <span>Full Name</span>
              <span>E-Mail ID</span>
              <span>IRD</span>
              <span>Date Of Birth</span>
            </div>
            <div>
              <span>UserName</span>
              <span>Contact No.</span>
              <span>Address</span>
              <span>Age</span>
            </div>
          </div>
          <div>
            <p>CONTRACT DETAILS</p>
            <div>
              <span>Contract Hours</span>
              <span>Pay Per Hour</span>
              <span>Union</span>
              <span>Date Of Contract</span>
            </div>
            <div>
              <span>Contract type</span>
              <span>Overtime Rate</span>
              <span>Kiwi Saver</span>
              <span>Pay Record</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployees;
