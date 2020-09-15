import { observer } from 'mobx-react-lite';
import React from 'react';
import InfotabComponent from '../../common/InfotabComponent';
import Navbar from '../Navbar';
import './CreateEmployee.css';

const CreateEmployee = () => {
  return (
    <div>
      <Navbar title="Create Employee" />
      <form className="main" autoComplete="off">
        <div className="create-personal-info">
          <InfotabComponent text="PERSONAL INFORMATION" />
          <div>
            <input type="text" placeholder="Employee ID" />
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="IRD" />
          </div>
          <div>
            <input type="number" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="taxt" placeholder="Date Of Birth" />
          </div>
          <div>
            <input
              autoComplete="off"
              type="number"
              placeholder="Contact number"
            />
            <input type="email" placeholder="E-Mail" />
            <input type="number" placeholder="Age" />
          </div>
          <div>
            <input className="address-bar" type="text" placeholder="Address" />
          </div>
        </div>
        <div className="create-contract-info">
          <InfotabComponent text="CONTRACT INFORMATION" />
          <div>
            <input type="number" placeholder="Contract Hours" />
            <input type="text" placeholder="Contract Type" />
            <input type="number" placeholder="Pay Per Hours" />
          </div>
          <div>
            <input type="number" placeholder="Overtime Rate" />
            <input type="number" placeholder="Kiwi Saver" />
            <input type="text" placeholder="Union" />
          </div>
        </div>
        <div className="submit-button">
          <button>submit</button>
          <button>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default observer(CreateEmployee);
