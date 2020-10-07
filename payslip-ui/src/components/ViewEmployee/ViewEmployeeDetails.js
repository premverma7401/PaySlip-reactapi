import React, { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import agent from '../../api/agent';
import InfotabComponent from '../../common/InfotabComponent';
import Navbar from '../Navbar';
import '../ViewEmployee/viewEmployeeDetails.css';

const ViewEmployeeDetails = ({ match }) => {
  const [selectedUser, setSelectedUser] = useState({});
  const currUserId = match.params.id;

  const loadUser = async (id) => {
    try {
      const selectedUser = await agent.Users.details(id);
      setSelectedUser(selectedUser);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const employeeId = currUserId;
    loadUser(employeeId);
  }, [currUserId]);

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
            <img
              className="image-details"
              src={selectedUser.imageName || '/user.png'}
              alt="image"
            />
          </div>
          <div>
            <p>Employee Id : {selectedUser.empId}</p>
            <p>Username : {selectedUser.username}</p>
            <p>
              IRD :
              {selectedUser &&
                selectedUser.employeePersonal &&
                selectedUser.employeePersonal.ird}
            </p>
          </div>
          <div>
            <p>First Name : {selectedUser.firstName}</p>
            <p>Last Name : {selectedUser.lastName}</p>
            <p>
              DOB :
              {selectedUser.employeePersonal &&
                new Date(
                  selectedUser.employeePersonal.dateOfBirth
                ).toLocaleDateString()}
            </p>
          </div>
          <div>
            <p>
              Contact no. :
              {selectedUser.employeePersonal &&
                selectedUser.employeePersonal.phone}
            </p>
            <p>E-mail Id : {selectedUser.email}</p>
            <p>
              Age :
              {selectedUser.employeePersonal &&
                selectedUser.employeePersonal.age}
            </p>
          </div>
          <div>
            <p className="address-bar">
              Address :
              {selectedUser.employeePersonal &&
                selectedUser.employeePersonal.city}
            </p>
          </div>
        </div>
        <div className="contract-info">
          <InfotabComponent text="CONTRACT INFORMATION" />
          <div>
            <p>
              Contract Hours :
              {selectedUser.employeeContract &&
                selectedUser.employeeContract.contractHours}
            </p>
            <p>
              Per hours Pay :
              {selectedUser.employeeContract &&
                selectedUser.employeeContract.perHourPay}
            </p>
            <p>
              Overtime rate :
              {selectedUser.employeeContract &&
                selectedUser.employeeContract.overtimeRate}
            </p>
          </div>
          <div>
            <p>
              Union Member :
              {selectedUser.employeeContract &&
              selectedUser.employeeContract.union
                ? 'YES'
                : 'NO'}
            </p>
            <p>
              {' '}
              kiwi Saver :
              {selectedUser.employeeContract &&
                selectedUser.employeeContract.kiwiSaver}
            </p>
            <p>
              Contract Type :
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
