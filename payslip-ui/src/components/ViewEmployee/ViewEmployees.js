import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Navbar';
import '../ViewEmployee/viewEmployee.css';
import { UserContext } from '../../store/UserContext';
import { Link } from 'react-router-dom';
import Insights from './Insights';
import PieChart from './PieChart';
import LoadingProgress from '../../common/LoadingProgress';
import { Row, Col } from 'react-materialize';
import './UserCard.css';
import agent from '../../api/agent';

const ViewEmployees = () => {
  const [users, , loadUsers] = useContext(UserContext);
  const [desiStats, setdesiStats] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadUsers();
    designationStats();
  }, []);

  if (loading) return <LoadingProgress />;

  const designationStats = async () => {
    try {
      setLoading(true);
      const desiStats = await agent.Users.statList();
      setdesiStats(desiStats);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar title="Employees List" />
      <Row>
        <Col s={12} l={6}>
          <div className="info-parent main">
            {users.map((user) => (
              <div className="card" key={user.empId}>
                {/* <img src="https://lorempixel.com/300/150/nature/6" alt="John" /> */}
                <div className="title">
                  <h5>
                    {user.firstName} {user.lastName}
                  </h5>
                  <p>{user.designation}</p>
                  <hr />
                </div>
                <Row>
                  <Col s={6} l={5}>
                    Username: {user.username}
                  </Col>
                  <Col s={6}>Email:{user.email}</Col>
                </Row>
                <Row>
                  <Col s={6} l={5}>
                    <p>Phone:{user.phone}</p>
                  </Col>
                  <Col>
                    <p>
                      Employee Type:
                      {user.contractType}
                    </p>
                  </Col>
                </Row>

                <Link to={`/viewemp/${user.empId}`} key={user.empId}>
                  <p>
                    <button>View Details</button>
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </Col>
        <Col s={12}>
          <Insights desiStats={desiStats} />
        </Col>
        <Col s={12}>
          <PieChart desiStats={desiStats} />
        </Col>
      </Row>
    </div>
  );
};

export default ViewEmployees;
