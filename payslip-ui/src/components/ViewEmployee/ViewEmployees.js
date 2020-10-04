import React, { Fragment as div, useContext, useEffect, useState } from 'react';
import Navbar from '../Navbar';
import '../ViewEmployee/viewEmployee.css';
import { UserContext } from '../../store/UserContext';
import { Link, NavLink } from 'react-router-dom';
import Insights from './Insights';
import PieChart from './PieChart';
import LoadingProgress from '../../common/LoadingProgress';
import { Row, Col } from 'react-materialize';
import './UserCard.css';
import agent from '../../api/agent';
import { Button, Card, Image } from 'semantic-ui-react';

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
        <Card.Group>
          {users.map((user) => (
            <Card raised key={user.empId}>
              <Card.Content>
                <Image
                  floated="right"
                  size="mini"
                  src="/images/avatar/large/steve.jpg"
                />
                <Card.Header>
                  {user.firstName} {user.lastName}
                </Card.Header>
                <Card.Meta>{user.designation}</Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group{' '}
                  <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    <NavLink to={'/createemp'}>Create Payslip</NavLink>
                  </Button>
                  <Button basic color="red">
                    <NavLink to={`/viewemp/${user.empId}`}>
                      View Details
                    </NavLink>
                  </Button>
                </div>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
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
