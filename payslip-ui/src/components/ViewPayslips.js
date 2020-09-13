import React from 'react';
import Navbar from './Navbar';
import '../styles/ViewPayslips.css';

const ViewPayslips = () => {
  return (
    <div>
      <Navbar title="View Payslips" />
      <div className="main"> 
        <div className="payslip-inputs">
            <span>
                <select Name="employee-list" id="employee-list">
                <option>Name1</option>
                <option>Name2</option>
                <option>Name3</option>
                <option>Name4</option>
                </select>
                <input type="number" placeholder="NO. of hours worked" />
            </span>
        </div>
        <div className="select-date">
            <p>DATE :</p>
            <div>
                <span>
                    <label for="from">From</label>
                    <input type="date" id="from" placeholder="dd/mm/yy" />
                </span>
                <span>
                    <label for="To">&nbsp;&nbsp;&nbsp;&nbsp;To</label>
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
