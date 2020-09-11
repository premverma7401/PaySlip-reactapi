import React from 'react';
import Navbar from './Navbar';

const CreatePayslip = () => {
  return (
    <div>
      <Navbar title="Create Payslips" />
      <div class="payslip-heading">
            <span>
                <input type="text" placeholder="Employee Name" />
                <input type="text" placeholder="Employee ID" />
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
  );
};

export default CreatePayslip;
