import React from 'react';
import Navbar from './Navbar';

const Information = () => {
  return (
    <div>
      <Navbar title="Company Details" />
      <div className="main-page">
            <div className="left">
                <div>
                    <img class="emp-img" src="imgs/profile.png" alt="Profile-pic" />
                    <span class="emp-info">
                        <h2>Name </h2> 
                        <p>Employee ID number - 32410 </p>
                        <p>Department - Web development</p>  
                        <p>Total hours worked - 38</p>
                        <h4>Last Updated few minutes ago</h4>
                    </span>
                </div> 
                <div>
                    <img class="emp-img" src="imgs/profile.png" alt="Profile-pic" />
                    <span class="emp-info">
                        <h2>Name </h2> 
                        <p>Employee ID number - 32410 </p>
                        <p>Department - Web development</p>  
                        <p>Total hours worked - 38</p>
                        <h4>Last Updated few minutes ago</h4>
                    </span>
                </div> 
            </div>
            
            <div class="right">
                <div>
                    <h2>insights</h2>
                    <span class="stats">
                        <p>Total Employees</p>
                        <p>Software Developers</p>
                        <p>Team Lead</p>
                        <p>Bussiness Anlyst</p>
                        <p>Software Tester</p>
                    </span>
                </div>
                <div>
                    <span></span>
                </div>
            </div>
      </div> 
    </div>      
  );
};

export default Information;
