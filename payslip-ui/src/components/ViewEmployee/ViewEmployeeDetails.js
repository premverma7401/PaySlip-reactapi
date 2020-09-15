import React, { useContext, useEffect, useState } from 'react';
import { IoIolert, IoIosArrowBack } from 'react-icons/io';
import agent from '../../api/agent';
import InfotabComponent from '../../common/InfotabComponent';
import { UserContext } from '../../store/UserContext';
import Navbar from '../Navbar';
import '../ViewEmployee/viewEmployeeDetails.css';

const ViewEmployeeDetails = ({ match }) => {
  const [selectedUser, setSelectedUser] = useState({});
  const currUserId = match.params.id;

  useEffect(() => {
    const employeeId = currUserId;
    loadUser(employeeId);
  }, []);

  const loadUser = async (id) => {
    try {
      const selectedUser = await agent.Users.details(id);
      console.log(selectedUser);
      setSelectedUser(selectedUser);
    } catch (error) {
      console.log(error);
    }
  };

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
            <p>{selectedUser.employeeId}</p>
            <p>{selectedUser.username}</p>
            <p>
              {selectedUser.employeePersonal &&
                selectedUser.employeePersonal.ird}
            </p>
          </div>
          <div>
            <p>{selectedUser.firstName}</p>
            <p>{selectedUser.lastName}</p>
            <p>
              {selectedUser.employeePersonal &&
                new Date(
                  selectedUser.employeePersonal.dateOfBirth
                ).toLocaleDateString()}
            </p>
          </div>
          <div>
            <p>
              {selectedUser.employeePersonal &&
                selectedUser.employeePersonal.phone}
            </p>
            <p>{selectedUser.email}</p>
            <p>
              {selectedUser.employeePersonal &&
                selectedUser.employeePersonal.age}
            </p>
          </div>
          <div>
            <p className="address-bar">
              {selectedUser.employeePersonal &&
                selectedUser.employeePersonal.city}
            </p>
          </div>
        </div>
        <div className="contract-info">
          <InfotabComponent text="CONTRACT INFORMATION" />
          <div>
            <p>
              {selectedUser.employeeContract &&
                selectedUser.employeeContract.contractHours}
            </p>
            <p>
              {selectedUser.employeeContract &&
                selectedUser.employeeContract.perHourPay}
            </p>
            <p>
              {selectedUser.employeeContract &&
                selectedUser.employeeContract.overtimeRate}
            </p>
          </div>
          <div>
            <p>
              {selectedUser.employeeContract &&
              selectedUser.employeeContract.union
                ? 'YES'
                : 'NO'}
            </p>
            <p>
              {selectedUser.employeeContract &&
                selectedUser.employeeContract.kiwiSaver}
            </p>
            <p>
              {selectedUser.employeeContract &&
                selectedUser.employeeContract.contractType}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployeeDetails;
