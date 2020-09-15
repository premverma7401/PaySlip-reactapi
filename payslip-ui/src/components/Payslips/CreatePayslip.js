import React, { useContext } from 'react';
import { UserContext } from '../../store/UserContext';
import Navbar from '../Navbar';
import './CreatePayslips.css';

const CreatePayslip = () => {
  const [users, setUsers] = useContext(UserContext);

  return (
    <div>
      <Navbar title="Generate Payslips" />
      <div className="main">
        <div className="payslip-inputs">
          <span>
            <select name="employee-list" id="employee-list">
              {users.map((user) => (
                <option key={user.empId} value={user.firstName}>
                  {user.firstName}
                </option>
              ))}
            </select>
            <input type="number" placeholder="NO. of hours worked" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreatePayslip;
