import React, { useContext } from 'react';
import InfotabComponent from '../../common/InfotabComponent';
import UserStore from '../../store/UserStore';
import Navbar from '../Navbar';
import '../ViewEmployee/viewEmployeeDetails.css';
import { observer } from 'mobx-react-lite';

const ViewEmployeeDetails = () => {
  const userStore = useContext(UserStore);
  const { selecteduser: user, loadingInitial } = userStore;

  return (
    <div>
      <Navbar title="View Employee" />
      <div className="main">
        <div className="personal-info">
          <InfotabComponent text="PERSONAL INFORMATION" />
          <div>
            <p>Employee ID</p>
            <p>{user.username}</p>
            <p>IRD</p>
          </div>
          <div>
            <p>First name</p>
            <p>Last name</p>
            <p>Date of Birth</p>
          </div>
          <div>
            <p>Contact No.</p>
            <p>E-mail ID</p>
            <p>Age</p>
          </div>
          <div>
            <p className="address-bar">Address</p>
          </div>
        </div>
        <div className="contract-info">
          <InfotabComponent text="CONTRACT INFORMATION" />
          <div>
            <p>Contract Hours</p>
            <p>Contract Type</p>
            <p>Pay per Hour</p>
          </div>
          <div>
            <p>Overtime Rate</p>
            <p>Kiwi Saver</p>
            <p>Union</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(ViewEmployeeDetails);
