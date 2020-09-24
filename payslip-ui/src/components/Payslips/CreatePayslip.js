import React, { useContext, useState } from 'react';
import axios from 'axios';
import { RadioGroup, Select, TextInput } from 'react-materialize';
import { UserContext } from '../../store/UserContext';
import Navbar from '../Navbar';
import './CreatePayslips.css';

const CreatePayslip = () => {
  const [users, setUsers] = useContext(UserContext);

  const [payData, setPayData] = useState({
    empId: '',
    payType: 'perHour',
    totalHours: '',
    totalMonthly: '',
  });

  const url = `http://localhost:5000/api/payslip/createPayslip?id=${payData.empId}&totalHours=${payData.th}`;
  const handleChange = (e) => {
    console.log(e.target.value);
    const newPay = { ...payData };
    newPay[e.target.name] = e.target.value;
    setPayData(newPay);
  };
  // console.log(payData);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(url, payData).then((res) => {
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
            <Select
              multiple={false}
              options={{
                dropdownOptions: {
                  alignment: 'left',
                  autoTrigger: true,
                  closeOnClick: true,
                  constrainWidth: true,
                  coverTrigger: false,
                  hover: false,
                },
              }}
              name="empId"
              id="employee-list"
              value={payData.empId}
              onChange={(e) => handleChange(e)}
            >
              <option disabled value="">
                Select Employee
              </option>
              {users.map((user) => (
                <option key={user.empId} value={user.empId} name={user.empId}>
                  {user.firstName} {user.lastName}
                </option>
              ))}
            </Select>
            {payData.empId && (
              <div className="payslip-data">
                <div>
                  <RadioGroup
                    label="Select Preference"
                    name="payType"
                    onChange={(e) => handleChange(e)}
                    options={[
                      {
                        label: 'Total Hours',
                        value: 'perHour',
                      },
                      {
                        label: 'Monthly Salary',
                        value: 'monthly',
                      },
                    ]}
                    value={payData.payType}
                  />
                </div>
                <div>
                  {payData.payType === 'perHour' ? (
                    <TextInput
                      type="number"
                      placeholder="No of hours worked"
                      onChange={(e) => handleChange(e)}
                      value={payData.totalHours}
                      name="totalHours"
                    />
                  ) : (
                    <TextInput
                      type="number"
                      placeholder="Total Monthly"
                      onChange={(e) => handleChange(e)}
                      value={payData.totalMonthly}
                      name="totalMonthly"
                    />
                  )}
                </div>
              </div>
            )}
            {payData.empId && (
              <button className="btn-create">Generate Payslip</button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePayslip;
