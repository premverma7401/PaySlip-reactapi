import React from 'react';
import Navbar from './Navbar';

const CreatePayslip = () => {
  return (
    <div>
      <Navbar title="Generate Payslips" />
        <div className="main">
        <div class="payslip-inputs">
            <span>
                <label for="employee-list">Employee Name </label>
                <select Name="employee-list" id="employee-list">
                <option>Name1</option>
                <option>Name2</option>
                <option>Name3</option>
                <option>Name4</option>
                </select>
                <input type="number" placeholder="NO. of hours worked" />
            </span>
            <span>
                <h1>PAYSLIP</h1>
            </span>
        </div> 
        <div class="record">
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
            <table class="deduction">
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
        <div class="total-pay">
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
