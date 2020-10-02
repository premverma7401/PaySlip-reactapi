import React, { useState } from 'react';
import { Button, Col, Icon, Row } from 'react-materialize';
import agent from '../../api/agent';
import CustomInput from '../../common/CustomInput';
import InfotabComponent from '../../common/InfotabComponent';
import Navbar from '../Navbar';
import './CreateEmployee.css';

const CreateUser = () => {
  const [employee, setEmployee] = useState({
    username: '',
    firstName: '',
    ird: '',
    lastName: '',
    email: '',
    contact: '',
    dob: '',
    city: '',
    designation: '',
    contractHours: '',
    payPerHour: '',
    overtimeRate: '',
    kiwiSaver: '',
    union: true,
    contractType: 0,
  });
  const resetData = {
    username: '',
    firstName: '',
    ird: '',
    lastName: '',
    email: '',
    contact: '',
    dob: '',
    city: '',
    designation: '',
    contractHours: '',
    payPerHour: '',
    overtimeRate: '',
    kiwiSaver: '',
    union: true,
    contractType: 0,
  };
  const handleChange = (e) => {
    const newEmp = { ...employee };
    newEmp[e.target.name] = e.target.value;
    newEmp.union = newEmp.union === '1' ? true : false;
    newEmp.contractHours = Number.parseFloat(newEmp.contractHours);
    newEmp.payPerHour = Number.parseFloat(newEmp.payPerHour);
    newEmp.overtimeRate = Number.parseFloat(newEmp.overtimeRate);
    newEmp.kiwiSaver = Number.parseFloat(newEmp.kiwiSaver);
    newEmp.contractType = Number.parseInt(newEmp.contractType);
    setEmployee(newEmp);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(employee);
    agent.Users.create(employee);
    setEmployee(resetData);
    console.log(employee);
  };
  const handleSample = () => {
    let sampleData = {
      username: 'pre32',
      firstName: '',
      ird: '3232-323-1',
      lastName: '',
      email: 'psv@gmail.com',
      contact: '0245-555-56856',
      //    dob: Date.parse(new Date()),
      city: 'Auckland',
      designation: 'Software Developer',
      contractHours: '50',
      payPerHour: '25',
      overtimeRate: '2',
      kiwiSaver: 2,
      union: 0,
      contractType: 1,
    };
    setEmployee(sampleData);
  };
  const handleReset = () => {
    setEmployee(resetData);
  };
  return (
    <div>
      <Navbar title="Create Employee" />
      <div className="main">
        <InfotabComponent text="Personal Information" />
        <form className="ui-wrapper" autoComplete="off">
          <Row>
            <Col s={12} l={4}>
              <CustomInput
                label="Username"
                value={employee.username}
                name="username"
                onChange={(e) => handleChange(e)}
              />
            </Col>
            <Col s={12} l={4}>
              <CustomInput
                label="IRD"
                value={employee.ird}
                onChange={(e) => handleChange(e)}
                name="ird"
              />
            </Col>
            <Col s={12} l={4}>
              <CustomInput
                id="file-upload"
                type="file"
                name="imageUrl"
                label="Upload"
                //   onChange={(e) =>
                //     formProps.setFieldValue('imageUrl', e.target.files[0])
                //   }
              />
            </Col>
          </Row>
          <Row>
            <Col s={12} l={4}>
              <CustomInput
                label="First Name"
                name="firstName"
                value={employee.firstName}
                onChange={(e) => handleChange(e)}
              />
            </Col>
            <Col s={12} l={4}>
              <CustomInput
                label="Last Name"
                name="lastName"
                value={employee.lastName}
                onChange={(e) => handleChange(e)}
              />
            </Col>
            <Col>
              <CustomInput
                label="Contact No."
                value={employee.contact}
                onChange={(e) => handleChange(e)}
                name="contact"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <CustomInput
                value={employee.designation}
                name="designation"
                onChange={(e) => handleChange(e)}
                label="Designation"
              />
            </Col>
            <Col>
              <CustomInput
                name="email"
                label="Email Address"
                value={employee.email}
                onChange={(e) => handleChange(e)}
              />
            </Col>
            <Col>
              <CustomInput
                type="date"
                placeholder="DOB"
                name="dob"
                label="Date Of Birth"
                value={employee.dob}
                onChange={(e) => handleChange(e)}
              />
            </Col>

            <Col s={8} l={9}>
              <CustomInput
                label="Address"
                value={employee.city}
                onChange={(e) => handleChange(e)}
                name="city"
              />
            </Col>
          </Row>
        </form>
        <InfotabComponent text="Contract Information" />
        <form className="ui-wrapper">
          <Row>
            <Col s={12} l={4}>
              <CustomInput
                label="Contract Hours"
                type="number"
                value={employee.contractHours}
                onChange={(e) => handleChange(e)}
                name="contractHours"
              />
            </Col>
            <Col s={12} l={4}>
              <CustomInput
                label="Pay Per Hour"
                type="number"
                value={employee.payPerHour}
                onChange={(e) => handleChange(e)}
                name="payPerHour"
              />
            </Col>
            <Col s={12} l={4}>
              <CustomInput
                label="Overtime Rate"
                type="number"
                value={employee.overtimeRate}
                onChange={(e) => handleChange(e)}
                name="overtimeRate"
              />
            </Col>
          </Row>
          <Row className="contract-select-group">
            <Col s={12} l={4}>
              <CustomInput
                label="Kiwi Saver"
                value={employee.kiwiSaver}
                onChange={(e) => handleChange(e)}
                name="kiwiSaver"
              />
            </Col>
            <Col s={12} l={4}>
              <label htmlFor="Contract Type" />
              <select
                className="customSelect"
                name="contractType"
                id="contractType"
                value={employee.contractType}
                onChange={(e) => handleChange(e)}
              >
                <option value="0">Contract type</option>
                <option value="1">Full Time</option>
                <option value="2">Part Time</option>
                <option value="3">Casual </option>
              </select>
            </Col>
            <Col s={12} l={4}>
              <label htmlFor="Union Member" />
              <select
                className="customSelect"
                name="union"
                id="union"
                value={employee.union}
                onChange={(e) => handleChange(e)}
              >
                <option value="0">Union Member</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>
            </Col>
          </Row>
        </form>
        <Row className="submit-button">
          <Col>
            <Button
              node="button"
              type="submit"
              waves="light"
              onClick={handleSample}
            >
              Sample Data
            </Button>
          </Col>
          <Col>
            <Button
              node="button"
              type="submit"
              waves="light"
              onClick={handleSubmit}
            >
              Submit
              <Icon right>send</Icon>
            </Button>
          </Col>
          <Col>
            <Button
              type="reset"
              onClick={handleReset}
              style={{
                marginRight: '5px',
              }}
              waves="light"
            >
              Reset
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CreateUser;
