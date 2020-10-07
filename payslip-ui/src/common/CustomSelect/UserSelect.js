import React, { useContext } from 'react';
import { Col, Row } from 'react-materialize';
import { UserContext } from '../../store/UserContext';
import './userSelect.css';
const UserSelect = ({ onChange }) => {
  const [users, setUsers] = useContext(UserContext);

  return (
    <Row className="select-wrapper">
      <select
        htmlFor="users"
        name="empId"
        className="user-select"
        onChange={onChange}
      >
        <option value="">Select Employee</option>
        {users.map((user) => (
          <option key={user.empId} value={user.empId} name={user.empId}>
            {user.firstName}
            {user.lastName}
          </option>
        ))}
      </select>
    </Row>
  );
};

export default UserSelect;
