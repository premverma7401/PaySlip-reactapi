import React from 'react';
import Navbar from './Navbar';

const ViewEmployees = () => {
  return (
    <div className="empinfo">
      <Navbar title="View Employee" />
      <header>
            <div className="nav-buttons">
                <span>
                    <button> General </button>
                    <button>Personal</button>
                    <button>Contract</button>
                </span>
                <button>Update Profile</button>
            </div>
      </header>
      <section className="page-heading">
            <p>Employee Information</p>
      </section>
      <section className="details">
            <div>
                <span>Full Name</span>
                <span>E-Mail ID</span>
                <span>IRD</span>
                <span>Date Of Birth</span>
            </div>
            <div>
                <span className="profile-pic">
                  <img src="#" alt="profile"></img>
                </span>
                <span>Employee ID</span>
            </div>
            <div>
                <span>UserName</span>
                <span>Contact No.</span>
                <span>Address</span>
                <span>Age</span>
            </div>
      </section>
    </div>
  );
};

export default ViewEmployees;
