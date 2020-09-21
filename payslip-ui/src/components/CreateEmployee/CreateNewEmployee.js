import React, { useState } from 'react';
import Navbar from '../Navbar';
import InfotabComponent from '../../common/InfotabComponent';
import LoadingProgress from '../../common/LoadingProgress';
import agent from '../../api/agent';
import { Formik, Field, Form } from 'formik';
import './CreateEmployee.css';

const CreateNewEmployee = () => {
  const [loading, setLoading] = useState(false);

  if (loading) return <LoadingProgress text="creating new employee" />;
  const initialFilledValues = {
    firstName: 'Shiv',
    lastName: 'Verma',
    //   imageUrl: '',
    email: 'psag@gmail.com',
    designation: 'Software Developer',
    username: 'skhv',
    employeePersonal: {
      dateOfBirth: new Date(),
      phone: '0275113822',
      ird: '456-898-85',
      city: 'Sirsa',
    },
    employeeContract: {
      contractHours: 43,
      perHourPay: 23,
      overtimeRate: 1.5,
      contractType: 0,
      union: true,
      kiwiSaver: 3,
    },
  };
  const initValues = {
    FirstName: 'joy',
    LastName: 'Verma',
    Email: 'psag@gmail.com',
    Username: 'skhv',
    Designation: 'Software Developer',
    DateOfBirth: '1990-09-05T07:54:18.6821159',
    Phone: '0275113822',
    IRD: '456-898-85',
    City: 'Sirsa',
    ContractHours: 43,
    PerHourPay: 23,
    OvertimeRate: 1.5,
    ContractType: 0,
    Union: true,
    KiwiSaver: 3,
  };
  const initialValues = {
    FirstName: '',
    LastName: '',
    Email: '',
    Username: '',
    Designation: '',
    DateOfBirth: new Date(),
    Phone: '',
    IRD: '',
    City: '',
    ContractHours: 0,
    PerHourPay: 1,
    OvertimeRate: 1,
    ContractType: 0,
    Union: false,
    KiwiSaver: 0,
  };

  return (
    <div>
      <Navbar title="Create Employee" />
      <Formik
        initialValues={initValues}
        onSubmit={(values, actions) => {
          const image = new FormData();
          image.append('imageUrl', values.imageUrl);
          setLoading(true);
          setTimeout(() => {
            agent.Users.create(values);
            console.log(values);
            setLoading(false);
          }, 2000);
          actions.resetForm();
        }}
      >
        {(formProps) => (
          <Form
            className="main"
            autoComplete="off"
            onSubmit={formProps.handleSubmit}
          >
            <div className="create-personal-info">
              <InfotabComponent text="PERSONAL INFORMATION" />
              <div>
                <Field
                  type="input"
                  placeholder="Employee ID"
                  name="empId"
                  disabled
                />
                <Field type="input" placeholder="Username" name="Username" />
                <Field type="input" placeholder="IRD" name="IRD" />
              </div>
              <div>
                <Field type="input" placeholder="First Name" name="FirstName" />
                <Field type="input" placeholder="Last Name" name="LastName" />
                <Field
                  type="input"
                  placeholder="Date Of Birth"
                  name="DateOfBirth"
                />
              </div>
              <div>
                <Field
                  name="Designation"
                  type="input"
                  placeholder="Designation"
                />
                <Field name="Phone" type="input" placeholder="Contact number" />
                <Field type="input" placeholder="E-Mail" name="Email" />
              </div>
              <div>
                <Field
                  className="address-bar"
                  type="input"
                  placeholder="Address"
                  name="City"
                />

                <input
                  id="file-upload"
                  type="file"
                  name="imageUrl"
                  onChange={(e) =>
                    formProps.setFieldValue('imageUrl', e.target.files[0])
                  }
                />
              </div>
            </div>
            <div className="create-contract-info">
              <InfotabComponent text="CONTRACT INFORMATION" />
              <div>
                <Field
                  type="input"
                  placeholder="Contract Hours"
                  name="ContractHours"
                />
                <Field
                  type="input"
                  placeholder="Pay Per Hours"
                  name="PerHourPay"
                />
                <Field
                  type="input"
                  placeholder="Overtime Rate"
                  name="OvertimeRate"
                />
              </div>
              <div>
                <Field type="input" placeholder="Kiwi Saver" name="KiwiSaver" />
                <label htmlFor="contract">Contract Type:</label>
                <Field name="ContractType" id="contract" component="select">
                  <option value="---------">
                    -------------------------------
                  </option>
                  <option value="0">Full Time</option>
                  <option value="1">Part Time</option>
                  <option value="2">Casual</option>
                </Field>
                <label htmlFor="union">Union Member:</label>
                <Field name="Union" id="union" component="select">
                  <option value="---------">
                    ----------------------------------
                  </option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Field>
              </div>
            </div>
            <div className="submit-button">
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
            </div>
          </Form>

          //   <Form className="main">
          //     <Field name="firstName" type="Field" />
          //     <Field name="lastName" type="Field" />
          //     <Field name="email" type="Field" />
        )}
      </Formik>
    </div>
  );
};

export default CreateNewEmployee;
