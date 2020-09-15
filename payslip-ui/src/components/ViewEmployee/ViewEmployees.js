import React, { useContext, useEffect } from 'react';
import Navbar from '../Navbar';
import '../ViewEmployee/viewEmployee.css';
import { UserContext } from '../../store/UserContext';
import { Link } from 'react-router-dom';
const ViewEmployees = () => {
  const [users, setusers, loadUsers] = useContext(UserContext);

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <Navbar title="Employees List" />
      <div className="info-parent main">
        <div className="card-group">
          {users.map((user) => (
            <Link to={`/viewemp/${user.empId}`} key={user.empId}>
              <div className="user-summary-card">
                <div>
                  <img
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="profile two"
                  />
                  <h2>
                    <p>
                      {user.firstName} {user.lastName}
                    </p>
                    <br />
                    <span>{user.username}</span>
                    <br />
                    <span>{user.email}</span>
                  </h2>
                </div>

                <button>View Info</button>
              </div>
            </Link>
          ))}
        </div>
        <div className="right-stats">
          <div className="info-stats">
            <div className="front">
              <div className="inner">
                <h3>INSIGHTS</h3>
              </div>
            </div>
            <div className="back">
              <div className="inner">
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

export default ViewEmployees;
