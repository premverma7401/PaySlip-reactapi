import React from 'react';
import Navbar from './Navbar';

const ViewPayslips = () => {
  return (
    <div>
      <Navbar title="View Payslips" />
      <div className="parent"> 
        <div className="payslip-inputs">
        <span>
                <input type="text" placeholder="Employee Name" />
                <input type="text" placeholder="Employee ID" />
            </span>
            <span>
                <h1>PAYSLIP</h1>
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
            <button>GENERATE</button>
        </div>
    </div>
    </div>
  );
};

export default ViewPayslips;
