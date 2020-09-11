import React from 'react';
import Navbar from './Navbar';
import { getByDisplayValue } from '@testing-library/react';
import CreateEmployee from './CreateEmployee';

const ViewEmployees = () => {
  return (
    <div>
      <Navbar title="View Employee" />
      <div className="nav-options">
            <ul>
                <li><a href="#general">General</a> </li>
                <li><a href="#personal">Personal</a></li>
                <li><a href="#contract">Contract</a></li>
                <li>Update Profile</li>
            </ul>
      </div>
      <div className="emp-details" id="general">
            <div>
                <span>User name</span>
                <span>Full name</span>
                <span>Email</span>
            </div>
            <div class="right">
                <span class="profile-pic"><img src="imgs/profile.png" alt="profile" /></span>
                <span>Employee ID</span>
            </div>
      </div>
      <div className="emp-details" id="personal">
            <div>
                <span>Full Name</span>
                <span>E-Mail ID</span>
                <span>IRD</span>
                <span>Date Of Birth</span>
            </div>
            <div>
                <span className="profile-pic">
                  <img src="#" alt="profile"/>
                </span>
                <span>Employee ID</span>
            </div>
            <div>
                <span>UserName</span>
                <span>Contact No.</span>
                <span>Address</span>
                <span>Age</span>
            </div>
      </div>
      <div className="emp-details" id="contract"> 
            <div>
                <span>Contract Hours</span>
                <span>Pay Per Hour</span>
                <span>Union</span>
                <span>Date Of Contract</span>
            </div>
            <div>
                <span class="profile-pic"><img src="imgs/profile.png" alt="profile" /></span>
                <span>Employee ID</span>
            </div>
            <div>
                <span>Contract type</span>
                <span>Overtime Rate</span>
                <span>Kiwi Saver</span>
                <span>Pay Record</span>
            </div>
      </div>
    </div>
  );
};

export default ViewEmployees;
