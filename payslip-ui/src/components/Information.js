import React from 'react';
import Navbar from './Navbar';
import '../styles/information.css';

const Information = () => {
  return (
    <div>
      <Navbar title="Company Details" />
      <div className="info-parent main">
        <div className="card-group">
          <div className="user-summary-card">
            <div>
              <img
                src="https://image.ibb.co/c9rY6J/profile02.jpg"
                alt="profile two"
              />
              <h2>
                <p>Employee name</p>
                <br/>
                <span>Level 20</span>
                <br/>
                <span>Web Developer</span>
              </h2>
            </div>
            <button>View Info</button>
          </div>
          <div className="user-summary-card">
            <div>
              <img
                src="https://image.ibb.co/c9rY6J/profile02.jpg"
                alt="profile two"
              />
              <h2>
                <p>Employee name</p>
                <br/>
                <span>Level 20</span>
                <br/>
                <span>Web Developer</span>
              </h2>
            </div>
            <button>View Info</button>
          </div>
          <div className="user-summary-card">
            <div>
              <img
                src="https://image.ibb.co/c9rY6J/profile02.jpg"
                alt="profile two"
              />
              <h2>
                <p>Employee name</p>
                <br/>
                <span>Level 20</span>
                <br/>
                <span>Web Developer</span>
              </h2>
            </div>
            <button>View Info</button>
          </div>
        </div>
        <div className="right-stats">
          <div className="info-stats">
            <div class="front">
              <div class="inner">
                <h3>INSIGHTS</h3>
              </div>
            </div>
            <div class="back">
              <div class="inner">
                <p>Total Employees</p>
                <p>Software Developers</p>
                <p>Team Lead</p>
                <p>Bussiness Anlyst</p>
                <p>Software Tester</p>
              </div>
            </div>
          </div>
          <div className="info-pie"></div>
        </div>
      </div>
    </div>
  );
};

export default Information;
