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
            <img
              src="https://image.ibb.co/c9rY6J/profile02.jpg"
              alt="profile two"
            />
            <button>View Info</button>
          </div>
          <div className="user-summary-card">
            <img
              src="https://image.ibb.co/c9rY6J/profile02.jpg"
              alt="profile two"
            />
            <button>View Info</button>
          </div>
          <div className="user-summary-card">
            <img
              src="https://image.ibb.co/c9rY6J/profile02.jpg"
              alt="profile two"
            />
            <button>View Info</button>
          </div>
          <div className="user-summary-card">
            <img
              src="https://image.ibb.co/c9rY6J/profile02.jpg"
              alt="profile two"
            />
            <button>View Info</button>
          </div>
          <div className="user-summary-card">
            <img
              src="https://image.ibb.co/c9rY6J/profile02.jpg"
              alt="profile two"
            />
            <button>View Info</button>
          </div>
        </div>
        <div className="right-stats">
          <div className="info-stats"></div>
          <div className="info-pie"></div>
        </div>
      </div>
    </div>
  );
};

export default Information;
