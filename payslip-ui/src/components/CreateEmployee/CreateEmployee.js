import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import agent from '../../api/agent';
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

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const validate = () => {
    let err = {};
    if (!user.firstName) {
      err.title = 'First name is required';
    }
    return err;
  };
  // const showError = (errorObj) => {
  //   let errMsg = '';
  //   for (let err in errMsg) {
  //     errMsg += `${errorObj[err]}. `;
  //   }
  //   alert(`Errors ${errMsg}`);
  // };
  const saveData = async (data) => {
    await agent.Users.create(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    saveData(user);
    const errs = validate();
    if (Object.keys(errs).length === 0) {
    } else {
      console.log(errs);
    }
  };
  return (
    <div>
      <Navbar title="Create Employee" />
      <form className="main" autoComplete="off" onSubmit={handleSubmit}>
        <div className="create-personal-info">
          <InfotabComponent text="PERSONAL INFORMATION" />
          <div>
            <input type="text" placeholder="Employee ID" disabled />
            <input
              type="text"
              placeholder="Username"
              value={user.username}
              onChange={handleChange}
              name="username"
            />
            <input
              type="text"
              placeholder="IRD"
              name="ird"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="First Name"
              name="first"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="last"
              onChange={handleChange}
            />
            <input
              type="taxt"
              placeholder="Date Of Birth"
              name="dob"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              name="phone"
              onChange={handleChange}
              type="number"
              placeholder="Contact number"
            />
            <input
              type="email"
              placeholder="E-Mail"
              name="email"
              onChange={handleChange}
            />
            <input type="number" placeholder="Age" disabled />
          </div>
          <div>
            <input
              className="address-bar"
              type="text"
              placeholder="Address"
              name="address"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="create-contract-info">
          <InfotabComponent text="CONTRACT INFORMATION" />
          <div>
            <input
              type="number"
              placeholder="Contract Hours"
              name="contractHours"
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Pay Per Hours"
              name="perhour"
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Overtime Rate"
              name="overtime"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Kiwi Saver"
              name="kiwisaver"
              onChange={handleChange}
            />
            <label htmlFor="contract">Contract Type:</label>
            <select name="contract" id="contract" onChange={handleChange}>
              <option value="---------">-------------------------------</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Casual">Casual</option>
            </select>
            <label htmlFor="union">Union Member:</label>
            <select name="union" id="union" onChange={handleChange}>
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
