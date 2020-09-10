import React from 'react';
import Navbar from './Navbar';

const CreateEmployee = () => {
  return (
    <div>
      <Navbar title="Create Employee" />
      <div class="page-title">
            <div class="nav-options">
                <ul>
                    <li>
                        PERSONAL
                    </li>
                    <li>
                        CONTRACT
                    </li>
                </ul>
            </div>
        </div>
        <div class="contract-id-input">
            <input type="text" placeholder="Employee Contract ID" />
            <label>Employee Contract ID</label>
        </div>
        <div class="form">
            <div>
                <input type="number" placeholder="Contract Hours" />
                <label>Contract Hours</label>
                <input type="number" placeholder="Pay Per Hours" />
                <label>Pay Per Hours</label>
                <input type="number" placeholder="Overtime Rate" />
                <label>Overtime Rate</label>
            </div>
            <div>
                <input type="text" placeholder="Contract Type" />
                <label>Contract Type</label>
                <input type="number" placeholder="Kiwi Saver" />
                <label>Kiwi Saver</label>
                <input type="text" placeholder="Union" />
                <label>Union</label>
            </div>
        </div>
    </div>
  );
};

export default CreateEmployee;
