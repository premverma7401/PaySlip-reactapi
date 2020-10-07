import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';

const EmployeeCards = ({ users }) => {
  return (
    <Card.Group className="container">
      {users.map((user) => (
        <Card raised key={user.empId} style={{ width: '40%' }}>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src={user.imageName || '/user.png'}
              rounded
            />
            <Card.Header>
              {user.firstName} {user.lastName}
            </Card.Header>
            <Card.Meta>{user.designation}</Card.Meta>
            <div className="card-inner-body">
              <div>
                <span>Email:</span>
                {user.email}
              </div>
              <div>
                <span>Contract:</span>
                {user.contractType}
              </div>
            </div>
            <div className="card-inner-body">
              <div>
                <span>IRD</span>
                {user.ird}
              </div>
              <div>
                <span>Kiwi Saver</span>
                {user.kiwiSaver}%
              </div>
            </div>
          </Card.Content>
          <Card.Content extra>
            <NavLink to={'/createpay'}>
              <Button basic color="green" content="Create Payslip"></Button>
            </NavLink>
            <NavLink to={`/viewemp/${user.empId}`}>
              <Button
                floated="right"
                basic
                color="red"
                content="View Details"
              ></Button>
            </NavLink>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default EmployeeCards;
