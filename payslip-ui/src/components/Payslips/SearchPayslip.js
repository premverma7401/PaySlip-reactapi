import React from 'react';

const SearchPayslip = () => {
  return (
    <div className="select-date">
      <p>DATE :</p>
      <div>
        <span>
          <label htmlFor="from">From</label>
          <input type="date" id="from" placeholder="dd/mm/yy" />
        </span>
        <span>
          <label htmlFor="To">&nbsp;&nbsp;&nbsp;&nbsp;To</label>
          <input type="date" id="to" placeholder="dd/mm/yy" />
        </span>
      </div>
      <button>View Payslip</button>
    </div>
  );
};

export default SearchPayslip;
