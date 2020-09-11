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
        </div>
        <div class="form">
            <div>
                <input type="number" placeholder="Contract Hours" />
                <input type="number" placeholder="Pay Per Hours" />
                <input type="number" placeholder="Overtime Rate" />
            </div>
            <div>
                <button>Update</button>
            </div>
            <div>
                <input type="text" placeholder="Contract Type" />
                <input type="number" placeholder="Kiwi Saver" />
                <input type="text" placeholder="Union" />
            </div>
        </div>
    </div>
  );
};

export default CreateEmployee;
