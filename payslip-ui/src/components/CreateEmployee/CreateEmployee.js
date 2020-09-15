import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import InfotabComponent from '../../common/InfotabComponent';
import { UserContext } from '../../store/UserContext';
import Navbar from '../Navbar';
import './CreateEmployee.css';

const CreateEmployee = () => {
  const [users, setUsers] = useContext(UserContext);
  const [user, setUser] = useState({
    empId: '',
    username: '',
    ird: '',
    firstName: '',
    lastName: '',
    dob: '',
    phone: '',
    email: '',
    age: '',
    address: '',
    contractHours: '',
    payPerHour: '',
    overTimeRate: '',
  });

  const handleOnChange = (e) => {
    // setUser(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUsers((preMovies) => [...preMovies, { user }]);
    console.log(setUsers(user));
  };

  return (
    <div>
      <Navbar title="Create Employee" />
      <form className="main" autoComplete="off" onSubmit={handleSubmit}>
        <div className="create-personal-info">
          <InfotabComponent text="PERSONAL INFORMATION" />
          <div>
            <input type="text" placeholder="Employee ID" />
            <input
              type="text"
              placeholder="Username"
              value={user.username}
              onChange={handleOnChange}
              name="username"
            />
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
            <input type="number" placeholder="Pay Per Hours" />
            <input type="number" placeholder="Overtime Rate" />
          </div>
          <div>
            <input type="number" placeholder="Kiwi Saver" />
            <label htmlFor="contract">Contract Type:</label>
            <select name="contract" id="contract">
              <option value="---------">-------------------------------</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Casual">Casual</option>
            </select>
            <label htmlFor="union">Union Member:</label>
            <select name="union" id="union">
              <option value="---------">
                ----------------------------------
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="submit-button">
          <button>Submit</button>
          <button>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default observer(CreateEmployee);
