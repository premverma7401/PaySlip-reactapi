import React, { useContext } from 'react';
import { UserContext } from '../../store/UserContext';
import Navbar from '../Navbar';
import './ViewPayslips.css';

const ViewPayslips = () => {
  const [users, setUsers] = useContext(UserContext);

  return (
    <div>
      <Navbar title="View Payslips" />
      <div className="main">
        <div className="payslip-inputs">
          <span>
            <select name="employee-list" id="employee-list">
              {users.map((user) => (
                <option key={user.EmpId} value={user.FirstName}>
                  {user.FirstName}
                </option>
              ))}
            </select>
          </span>
        </div>
        <div className="select-date">
          <p>DATE :</p>
          <div>
            <span>
              <label htmlFor="from">From</label>
              <input type="date" id="from" placeholder="dd/mm/yy" />
            </span>
            <span>
              <label htmlFor="To">&nbsp;&nbsp;&nbsp;&nbsp;To</label>
              <input type="date" id="to" placeholder="dd/mm/yy" />
            </span>
          </div>
          <button>View Payslip</button>
        </div>
      </div>
    </div>
  );
};

export default ViewPayslips;
