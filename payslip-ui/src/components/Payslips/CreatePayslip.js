import Axios from 'axios';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../store/UserContext';
import Navbar from '../Navbar';
import './CreatePayslips.css';

const CreatePayslip = () => {
  const [users, setUsers] = useContext(UserContext);

  const [payData, setPayData] = useState({
    empId: '',
    th: '',
  });
  const url = `http://localhost:5000/api/payslip?id=${payData.empId}&th=${payData.th}`;

  const handleChange = (e) => {
    const newPay = { ...payData };
    newPay[e.target.name] = e.target.value;
    setPayData(newPay);
  };
  console.log(payData);
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(url, payData).then((res) => {
      console.log(res.data);
    });
    console.log('clicked');
  };
  return (
    <div>
      <Navbar title="Generate Payslips" />
      <div className="main">
        <div className="payslip-inputs">
          <form onSubmit={(e) => handleSubmit(e)}>
            <select
              name="empId"
              id="employee-list"
              value={payData.empId}
              onChange={(e) => handleChange(e)}
            >
              {users.map((user) => (
                <option key={user.empId} value={user.empId} name={user.empId}>
                  {user.firstName} {user.lastName}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="No of hours worked"
              onChange={(e) => handleChange(e)}
              value={payData.th}
              name="th"
            />
            <button className="btn-create">Generate Payslip</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePayslip;
