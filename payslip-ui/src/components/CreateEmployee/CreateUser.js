import React, { useState } from 'react';
import { Button, Col, Icon, Row } from 'react-materialize';
import agent from '../../api/agent';
import CustomInput from '../../common/CustomInput';
import InfotabComponent from '../../common/InfotabComponent';
import LoadingProgress from '../../common/LoadingProgress';
import Navbar from '../Navbar';
import './CreateEmployee.css';
import { randomDate, getRandomNumberBetween } from '../../helper/RandomData.js';

const CreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [createdSuccess, setCreatedSuccess] = useState(false);
  const defaultImage = '/user.png';
  const [employee, setEmployee] = useState({
    username: '',
    firstName: '',
    ird: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    city: '',
    designation: '',
    contractHours: '',
    perHourPay: '',
    overtimeRate: '',
    kiwiSaver: '',
    union: true,
    contractType: 0,
    reportingManager: '',
    imageName: defaultImage,
    imageFile: null,
  });
  const resetData = {
    username: '',
    firstName: '',
    ird: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    city: '',
    designation: '',
    contractHours: '',
    perHourPay: '',
    overtimeRate: '',
    kiwiSaver: '',
    union: true,
    contractType: '',
    reportingManager: '',
    imageName: '',
    imageFile: null,
  };
  const handleChange = (e) => {
    const newEmp = { ...employee };
    newEmp[e.target.name] = e.target.value;
    newEmp.union = newEmp.union === '1' ? true : false;
    newEmp.contractHours = Number.parseFloat(newEmp.contractHours);
    newEmp.perHourPay = Number.parseFloat(newEmp.perHourPay);
    newEmp.overtimeRate = Number.parseFloat(newEmp.overtimeRate);
    newEmp.kiwiSaver = Number.parseFloat(newEmp.kiwiSaver);
    console.log(newEmp);
    setEmployee(newEmp);
  };

  const handleSample = () => {
    let sampleData = {
      username: 'pre32',
      firstName: '',
      ird: '3232-323-1',
      lastName: '',
      email: 'psv@gmail.com',
      phone: '0245-555-56856',
      dateOfBirth: randomDate(new Date(1970, 0, 1), new Date(2004, 0, 1))
        .toISOString()
        .split('T')[0],
      city: 'Auckland',
      designation: 'Software Developer',
      contractHours: getRandomNumberBetween(30, 70),
      perHourPay: getRandomNumberBetween(18.9, 100),
      overtimeRate: getRandomNumberBetween(1.5, 3),
      kiwiSaver: getRandomNumberBetween(3, 8),
      union: 1,
      contractType: 'Full Time',
      reportingManager: 'Sam Mattos',
      imageName: defaultImage,
      imageFile: null,
    };
    setEmployee(sampleData);
  };
  const handleReset = () => {
    setEmployee(resetData);
  };
  const showPreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setEmployee({
          ...employee,
          imageFile: imageFile,
          imageName: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      setEmployee({
        ...employee,
        imageFile: null,
        imageName: defaultImage,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', employee.username);
    formData.append('ird', employee.ird);
    formData.append('reportingManager', employee.reportingManager);
    formData.append('firstName', employee.firstName);
    formData.append('lastName', employee.lastName);
    formData.append('phone', employee.phone);
    formData.append('designation', employee.designation);
    formData.append('email', employee.email);
    formData.append('dateOfBirth', employee.dateOfBirth);
    formData.append('city', employee.city);
    formData.append('contractHours', employee.contractHours);
    formData.append('perHourPay', employee.perHourPay);
    formData.append('overtimeRate', employee.overtimeRate);
    formData.append('kiwiSaver', employee.kiwiSaver);
    formData.append('contractType', employee.contractType);
    formData.append('union', employee.union);
    formData.append('imageFile', employee.imageFile);
    formData.append('imageName', employee.imageName);
    agent.Users.create(formData);
    setEmployee(resetData);

    setCreatedSuccess(true);
  };
  if (loading) return <LoadingProgress />;
  if (createdSuccess)
    return (
      <div>
        <Navbar title="Create Employee" />
        <div className="main">User created Go back</div>
      </div>
    );

  return (
    <div>
      <Navbar title="Create Employee" />
      <div className="main">
        <InfotabComponent text="Personal Information" />
        <form className="ui-wrapper" autoComplete="off">
          <Row>
            <Col className="image-setter">
              <img
                className="image-size"
                src={employee.imageName}
                alt="userimage"
              />
              <input
                type="file"
                accept="image/*"
                onChange={showPreview}
                name="imageFile"
              />
            </Col>
          </Row>
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
                label="Manager Name"
                value={employee.reportingManager}
                onChange={(e) => handleChange(e)}
                name="reportingManager"
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
            <Col s={12} l={4}>
              <CustomInput
                label="Contact No."
                value={employee.phone}
                onChange={(e) => handleChange(e)}
                name="phone"
              />
            </Col>
          </Row>
          <Row>
            <Col s={12} l={4}>
              <CustomInput
                value={employee.designation}
                name="designation"
                onChange={(e) => handleChange(e)}
                label="Designation"
              />
            </Col>
            <Col s={12} l={4}>
              <CustomInput
                name="email"
                label="Email Address"
                value={employee.email}
                onChange={(e) => handleChange(e)}
              />
            </Col>
            <Col s={12} l={4}>
              <CustomInput
                type="date"
                name="dateOfBirth"
                label="Date Of Birth"
                value={employee.dateOfBirth}
                onChange={(e) => handleChange(e)}
              />
            </Col>

            <Col s={12} l={12}>
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
                value={employee.perHourPay}
                onChange={(e) => handleChange(e)}
                name="perHourPay"
              />
            </Col>
            <Col s={12} l={4}>
              <CustomInput
                label="Overtime Rate"
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
                type="number"
              />
            </Col>
            <Col s={12} l={4}>
              <label htmlFor="contractType"> Contract Type </label>
              <select
                className="customSelect"
                name="contractType"
                id="contractType"
                value={employee.contractType}
                onChange={(e) => handleChange(e)}
              >
                <option value="0">Contract type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Casual">Casual </option>
              </select>
            </Col>
            <Col s={12} l={4}>
              <label htmlFor="union"> Union Member</label>
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
              disabled={!employee.firstName || !employee.lastName}
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
