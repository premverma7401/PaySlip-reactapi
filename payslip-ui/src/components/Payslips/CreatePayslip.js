import React from 'react';
import Navbar from '../Navbar';
import './CreatePayslips.css';

const CreatePayslip = () => {
  return (
    <div>
      <Navbar title="Generate Payslips" />
      <div className="main">
        <div className="payslip-inputs">
          <span>
            <select name="employee-list" id="employee-list">
              <option value="list" hidden>
                select employee
              </option>
              <option>Name1</option>
              <option>Name2</option>
              <option>Name3</option>
              <option>Name4</option>
              <option>Name1</option>
              <option>Name2</option>
              <option>Name3</option>
              <option>Name4</option>
            </select>
            <input type="number" placeholder="NO. of hours worked" />
          </span>
        </div>
        <div className="record">
          <table>
            <tr>
              <th>Earnings</th>
              <th>Hours</th>
              <th>Rate</th>
            </tr>
            <tr>
              <td>Contract Work</td>
              <td>8</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Overtime Work</td>
              <td>8</td>
              <td>10</td>
            </tr>
            <tr>
              <th>TOTAL</th>
              <th>16</th>
              <th>20</th>
            </tr>
          </table>
          <table className="deduction">
            <tr>
              <th>Deductions</th>
              <th>Rate</th>
            </tr>

            <tr>
              <td>Kiwi Saver</td>
              <td>8</td>
            </tr>
            <tr>
              <td>Union</td>
              <td>200</td>
            </tr>
            <tr>
              <th>TOTAL</th>
              <th>300</th>
            </tr>
          </table>
        </div>
        <div className="total-pay">
          <table>
            <tr>
              <th> TOTAL IN-HAND PAY</th>
              <th>3000</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreatePayslip;
