import React, { useEffect, useState } from 'react';
import { Table } from 'react-materialize';
import agent from '../../api/agent';
import Navbar from '../Navbar';

const PayRecords = () => {
  const [payRecords, setPayRecords] = useState([]);

  const payStats = async () => {
    try {
      const payRecords = await agent.Payslip.payRecord();
      setPayRecords(payRecords);
      console.log(payRecords, 'PAYRECORD');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    payStats();
  }, []);

  return (
    <div>
      <Navbar title="Pay Records" />
      <div className="main">
        <Table hoverable responsive striped style={{ marginLeft: '2em' }}>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Total Earning</th>
              <th>Total Deduction</th>
              <th>Total Inhand Pay</th>
              <th>Total Working hours</th>
              <th>Total Overtime hours</th>
            </tr>
          </thead>
          <tbody>
            {payRecords &&
              payRecords.map((pay) => (
                <tr key={pay.empId}>
                  <td>{pay.firstName}</td>
                  <td>${pay.totalEarningSoFar}</td>
                  <td>${pay.totalDeductionFar}</td>
                  <td>${pay.totalIHPSoFar}</td>
                  <td>{pay.totalHoursSoFar}</td>
                  <td>{pay.totalOTHSoFar}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PayRecords;
