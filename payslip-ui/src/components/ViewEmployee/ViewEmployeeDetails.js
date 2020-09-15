import React, { useContext } from 'react';
import { IoIosAlert, IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import InfotabComponent from '../../common/InfotabComponent';
import { UserContext } from '../../store/UserContext';
import Navbar from '../Navbar';
import '../ViewEmployee/viewEmployeeDetails.css';

const ViewEmployeeDetails = () => {
  const { selectedUser } = useContext(UserContext);
  return (
    <div>
      <Navbar
        title="View Employee"
        isBtn
        Icon={<IoIosArrowBack />}
        IconText="Back"
        rightText="Edit Details"
        redirectLink="/createemp"
        redirectIcon={'/viewemp'}
      />
      <div className="main">
        <div className="personal-info">
          <InfotabComponent text="PERSONAL INFORMATION" />
          <div>
            <p>{selectedUser && selectedUser.firstName}</p>
            <p>user.username</p>
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

export default ViewEmployeeDetails;
