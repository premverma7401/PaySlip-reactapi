import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Navbar';
import '../ViewEmployee/viewEmployee.css';
import { UserContext } from '../../store/UserContext';
import { Link } from 'react-router-dom';
import Insights from './Insights';
import PieChart from './PieChart';
import LoadingProgress from '../../common/LoadingProgress';
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize';
import './UserCard.css';
import agent from '../../api/agent';

const ViewEmployees = () => {
  const [users, , loadUsers, loading, ,] = useContext(UserContext);
  const [desiStats, setdesiStats] = useState([]);

  useEffect(() => {
    loadUsers();
    designationStats();
  }, []);

  const designationStats = async () => {
    try {
      const desiStats = await agent.Users.statList();
      setdesiStats(desiStats);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <LoadingProgress text="Loading users" />;

  return (
    <div>
      <Navbar title="Employees List" />
      <div className="info-parent main">
        {users.map((user) => (
          <div className="card">
            {/* <img src="https://lorempixel.com/300/150/nature/6" alt="John" /> */}
            <div className="title">
              <h5>
                {user.firstName} {user.lastName}
              </h5>
              <p>{user.designation}</p>
              <hr />
            </div>
            <div className="user-details">
              <div>
                <p>Username: {user.username}</p>
                <p>Email:{user.email}</p>
              </div>
              <div>
                <p>Phone:{user.phone}</p>
                <p>Employee Type: </p>
              </div>
            </div>
            <Link to={`/viewemp/${user.empId}`} key={user.empId}>
              <p>
                <button>View Details</button>
              </p>
            </Link>
          </div>
        ))}
        {/* <div className="card-group">
            <div className="card horizontal " key={user.empId}>
                <div className="card-image">
                  <img src="https://lorempixel.com/250/190/nature/6" />
                </div>
                <div className="card-content">
                  <p>
                    {user.email} {user.lastName}
                  </p>
                  <br />
                  <span>{user.username}</span>
                  <br />
                  <span>{user.email}</span>
                  <br />
                  <span>{user.designation}</span>
                </div>
                <div className="card-action">
                  <button>View Employee</button>
                </div>
              </Link>
            </div>
        </div> */}
        <div>
          <Insights desiStats={desiStats} />
          <PieChart desiStats={desiStats} />
        </div>
      </div>
    </div>
  );
};

export default ViewEmployees;
