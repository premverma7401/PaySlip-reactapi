import React, { useState } from 'react';
import { RadioGroup, Row, TextInput } from 'react-materialize';
import Navbar from '../Navbar';
import './CreatePayslips.css';
import agent from '../../api/agent';
import UserSelect from '../../common/CustomSelect/UserSelect';

const CreatePayslip = () => {
  const [createdSuccess, setCreatedSuccess] = useState(false);

  const [payslip, setPayslip] = useState({
    empId: '',
    payType: 'perHour',
    totalHours: 0,
    totalMonthly: 0,
  });

  const resetData = {
    empId: '',
    totalHours: 0,
    totalMonthly: 0,
  };
  const handleChange = (e) => {
    const newPay = { ...payslip };
    newPay[e.target.name] = e.target.value;
    newPay.empId = Number.parseInt(newPay.empId);
    newPay.totalHours = Number.parseFloat(newPay.totalHours);
    newPay.totalMonthly = Number.parseFloat(newPay.totalMonthly);
    setPayslip(newPay);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    agent.Payslip.create(payslip);
    setPayslip(resetData);
    setCreatedSuccess(true);
  };
  if (createdSuccess)
    return (
      <div>
        <Navbar title="Generate Payslips" />
        <div className="main">Payslip created Go back</div>
      </div>
    );

  return (
    <div>
      <Navbar title="Generate Payslips" />
      <div className="main">
        <div className="payslip-inputs">
          <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
            <Row>
              <UserSelect onChange={(e) => handleChange(e)} />
            </Row>
            {payslip.empId && (
              <div className="payslip-data">
                <Row className="radio-group-types">
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
                </Row>

                <Row>
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
                </Row>
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
