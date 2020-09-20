import React from 'react';
import Navbar from '../Navbar';
import InfotabComponent from '../../common/InfotabComponent';
import { Formik, Field, Form } from 'formik';
import './CreateEmployee.css';
import agent from '../../api/agent';

const CreateNewEmployee = () => {
  return (
    <div>
      <Navbar title="Create Employee" />
      <Formik
        initialValues={{
          firstName: 'Shiv',
          lastName: 'Verma',
          imageUrl: '',
          email: 'psag@gmail.com',
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
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const image = new FormData();
          image.append('imageUrl', values.imageUrl);

          // agent.Users.create(image);

          // fetch('http://localhost:5000/api/employee', {
          //   method: 'post',
          //   headers: new Headers({
          //     Accept: 'application/json',
          //     // Authorization: 'Bearer ' + token,
          //   }),
          //   body: image,
          // })
          //   .then((response) => response.json())
          //   .catch((error) => console.log(error));
        }}
      >
        {(formProps) => (
          <Form className="main" autoComplete="off">
            <div className="create-personal-info">
              <InfotabComponent text="PERSONAL INFORMATION" />
              <div>
                <Field
                  type="input"
                  placeholder="Employee ID"
                  name="empId"
                  disabled
                />
                <Field type="input" placeholder="Username" name="username" />
                <Field
                  type="input"
                  placeholder="IRD"
                  name="employeePersonal.ird"
                />
              </div>
              <div>
                <Field type="input" placeholder="First Name" name="firstName" />
                <Field type="input" placeholder="Last Name" name="lastName" />
                <Field
                  type="input"
                  placeholder="Date Of Birth"
                  name="employeePersonal.dateOfBirth"
                />
              </div>
              <div>
                <Field
                  name="designation"
                  type="input"
                  placeholder="Designation"
                />
                <Field
                  name="employeePersonal.phone"
                  type="input"
                  placeholder="Contact number"
                />
                <Field type="input" placeholder="E-Mail" name="email" />
              </div>
              <div>
                <Field
                  className="address-bar"
                  type="input"
                  placeholder="Address"
                  name="employeePersonal.city"
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
                  name="employeeContract.contractHours"
                />
                <Field
                  type="input"
                  placeholder="Pay Per Hours"
                  name="employeeContract.perHourPay"
                />
                <Field
                  type="input"
                  placeholder="Overtime Rate"
                  name="employeeContract.overtimeRate"
                />
              </div>
              <div>
                <Field
                  type="input"
                  placeholder="Kiwi Saver"
                  name="employeeContract.kiwiSaver"
                />
                <label htmlFor="contract">Contract Type:</label>
                <Field
                  name="employeeContract.contractType"
                  id="contract"
                  component="select"
                >
                  <option value="---------">
                    -------------------------------
                  </option>
                  <option value="0">Full Time</option>
                  <option value="1">Part Time</option>
                  <option value="2">Casual</option>
                </Field>
                <label htmlFor="union">Union Member:</label>
                <Field
                  name="employeeContract.union"
                  id="union"
                  component="select"
                >
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
