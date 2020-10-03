import React from 'react';
import Navbar from './Navbar';
import '../styles/information.css';
const Information = () => {
  return (
    <div>
      <Navbar title="Information" />
      <div className="main">
        <div className="info-wrapper">
          <h5>Payslip v2, React & WebAPI</h5>
          <div className="project-description">
            <p>
              Payslip generator is a simple tool for Payroll team to generate
              payslips for there employees based on the invoice or timesheet
              they receive. The tool can be used independent with only
              requirement to create Employees with in the application.
            </p>
            <h4>Main Features:</h4>
            <li>Create Users in app and Sample data for quick registration.</li>
            <li>View List on employees and company Insights.</li>
            <li>
              React ChartJs - PIE Chart to view employees by designations.
            </li>
            <li>
              Auto Calculate Overtime, deduction, contracted and Inhand
              Earnings.
            </li>
            <li>PDF download option (Todo)</li>
            <li>Web Preview option with 1-Click print </li>
          </div>
          <ul className="extra-info">
            <li>
              <span>Date: </span> Sept 1, 2020
            </li>
            <li>
              <span>Technology Used: </span> .NETCore API 3.1, React &
              Materialize CSS
            </li>
            <li>
              <span>Client: </span> Payslip Generator
            </li>
            <li>
              <span>Github link: </span>
              <a
                href="https://github.com/premverma7401/PaySlip-reactapi"
                target="_blank"
              >
                Payslip Generator
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Information;
