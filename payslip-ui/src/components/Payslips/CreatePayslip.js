import React, { useContext, useState } from 'react';
import { RadioGroup, Select, TextInput } from 'react-materialize';
import { UserContext } from '../../store/UserContext';
import Navbar from '../Navbar';
import './CreatePayslips.css';
import agent from '../../api/agent';

const CreatePayslip = () => {
  const [users, setUsers] = useContext(UserContext);

  const [payslip, setPayslip] = useState({
    empId: '',
    payType: 'perHour',
    totalHours: +0,
    totalMonthly: +0,
  });

  const handleChange = (e) => {
    const newPay = { ...payslip };
    newPay[e.target.name] = e.target.value;
    console.log(newPay);

    setPayslip(newPay);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('sending', payslip);
    agent.Payslip.create(payslip);
    console.log('sent');
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
              onChange={(e) => handleChange(e)}
            >
              <option disabled value="">
                Select Employee
              </option>
              {users.map((user) => (
                <option key={user.empId} value={user.empId}>
                  {user.firstName} {user.lastName}
                </option>
              ))}
            </Select>
            {payslip.empId && (
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
                    value={payslip.payType}
                  />
                </div>
                <div>
                  {payslip.payType === 'perHour' ? (
                    <TextInput
                      type="number"
                      placeholder="No of hours worked"
                      onChange={(e) => handleChange(e)}
                      name="totalHours"
                    />
                  ) : (
                    <TextInput
                      type="number"
                      placeholder="Total Monthly"
                      onChange={(e) => handleChange(e)}
                      name="totalMonthly"
                    />
                  )}
                </div>
              </div>
            )}
            {payslip.empId && (
              <button className="btn-create">Generate Payslip</button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePayslip;
