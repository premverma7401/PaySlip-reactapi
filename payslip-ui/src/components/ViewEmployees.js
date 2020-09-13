import React from 'react';
import Navbar from './Navbar';
import '../styles/viewEmployee.css';
const ViewEmployees = () => {
  return (
    <div>
      <Navbar title="View Employee" />
      <div className="main">
      <div class="emp-details">
                <div>
                    <span>
                        PERSONAL INFORMATION
                    </span>
                    <span>
                      <p>Employee ID</p>
                      <p>UserName</p>
                    </span>
                    <span>
                    <p>First name</p>
                    <p>Last name</p>
                    </span>
                    <span>
                    <p>Contact No.</p>
                    <p>E-mail ID</p>
                    </span>
                    <span>
                    <p>IRD</p>
                    <p>Date of Birth</p>
                    <p>Age</p>
                    </span>
                    <span>
                    <p class="address-bar">Address</p>
                    </span> 
                </div>
                <div>
                    <span>
                        CONTRACT INFORMATION
                    </span>
                    <span>
                    <p>Contract Hours</p>
                    <p>Contract Type</p>
                    </span> 
                    <span>
                    <p>Pay per Hour</p>
                    <p>Overtime Rate</p>
                    </span>
                    <span>
                    <p>Kiwi Saver</p>
                    <p>Union</p>
                    </span>
                </div>            
            </div>
        </div>
      </div> 
  );
};

export default ViewEmployees;
