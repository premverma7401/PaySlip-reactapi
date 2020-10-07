import React, { Fragment as div, useContext, useEffect, useState } from 'react';
import Navbar from '../Navbar';
import '../ViewEmployee/viewEmployee.css';
import { UserContext } from '../../store/UserContext';
import Insights from './Insights';
import PieChart from './PieChart';
import LoadingProgress from '../../common/LoadingProgress';
import { Row, Col } from 'react-materialize';
import './UserCard.css';
import agent from '../../api/agent';
import EmployeeCards from './EmployeeCards';

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
      <div className="main">
        <EmployeeCards users={users} />
      </div>
      <Row>
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
