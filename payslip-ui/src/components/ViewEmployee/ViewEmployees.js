import React, { useContext, useEffect } from 'react';
import UserStore from '../../store/UserStore';
import Navbar from '../Navbar';
import '../ViewEmployee/viewEmployee.css';
import { observer } from 'mobx-react-lite';

const ViewEmployees = () => {
  const userStore = useContext(UserStore);
  const { loadUsers, users, loadingInitial, selectUser } = userStore;

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <div>
      <Navbar title="Employees List" />
      <div className="info-parent main">
        <div className="card-group">
          {users &&
            users.map((user, index) => (
              <div
                className="user-summary-card"
                key={index}
                onClick={() => {
                  selectUser(index);
                }}
              >
                <div>
                  <img
                    src="https://image.ibb.co/c9rY6J/profile02.jpg"
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

export default observer(ViewEmployees);
