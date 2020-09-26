import React, { useState } from 'react';
import Navbar from '../Navbar';
import InfotabComponent from '../../common/InfotabComponent';
import LoadingProgress from '../../common/LoadingProgress';
import agent from '../../api/agent';
import { Formik, Field, Form } from 'formik';
import './CreateEmployee.css';
import { TextInput, DatePicker, Select, Button, Icon } from 'react-materialize';
const CreateNewEmployee = () => {
  const [loading, setLoading] = useState(false);

  if (loading) return <LoadingProgress text="creating new employee" />;
  return (
    <div>
      <Navbar title="Create Employee" />
      <Formik
        onSubmit={(values, actions) => {
          const image = new FormData();
          image.append('imageUrl', values.imageUrl);
          setLoading(true);
          setTimeout(() => {
            agent.Users.create(values);
            console.log(values);
            setLoading(false);
          }, 1000);
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
                <div>
                  <div>
                    <Field
                      name="username"
                      component={TextInput}
                      label="Username"
                    />
                    <TextInput id="TextInput-4" label="First Name" />
                  </div>
                  <div>
                    <TextInput id="TextInput-4" label="IRD" />
                    <TextInput id="TextInput-4" label="Last Name" />
                  </div>
                  <div className="emp-img">
                    <input
                      id="file-upload"
                      type="file"
                      name="imageUrl"
                      onChange={(e) =>
                        formProps.setFieldValue('imageUrl', e.target.files[0])
                      }
                    />
                    {/* <TextInput id="TextInput-4" label="Designation" /> */}
                  </div>
                </div>
                <div>
                  <TextInput id="TextInput-4" label="Email Address" />
                  <TextInput id="TextInput-4" label="Contact No." />
                  <TextInput
                    type="date"
                    placeholder="DOB"
                    value="none"
                    id="TextInput-4"
                    label="Date Of Birth"
                  />
                </div>
                <div>
                  <TextInput
                    className="address-bar"
                    id="TextInput-4"
                    label="Address"
                  />
                </div>
              </div>
            </div>
            <div className="create-contract-info">
              <InfotabComponent text="CONTRACT INFORMATION" />
              <div>
                <div>
                  <TextInput id="TextInput-4" label="Contract Hours" />
                  <TextInput id="TextInput-4" label="Pay Per Hour" />
                  <TextInput id="TextInput-4" label="Overtime Rate" />
                </div>
                <div>
                  <TextInput id="TextInput-4" label="Kiwi Saver" />
                  <Select
                    id="Select-9"
                    value="Select Type"
                    label="Contract Type"
                    multiple={false}
                    options={{
                      classes: '',
                      dropdownOptions: {
                        alignment: 'left',
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: true,
                        coverTrigger: true,
                        hover: false,
                        inDuration: 150,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 250,
                      },
                    }}
                    value="2"
                  >
                    <option value="1">Full Time</option>
                    <option value="2">Part Time</option>
                    <option value="3">Intern</option>
                  </Select>
                  <Select
                    id="Select-9"
                    value="select"
                    label="Union Member"
                    multiple={false}
                    options={{
                      classes: '',
                      dropdownOptions: {
                        alignment: 'left',
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: true,
                        coverTrigger: true,
                        hover: false,
                        inDuration: 150,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 250,
                      },
                    }}
                    value="2"
                  >
                    <option value="1">YES</option>
                    <option value="2">NO</option>
                  </Select>
                </div>
              </div>
            </div>
            <div className="submit-button">
              <Button node="button" type="submit" waves="light">
                Submit
                <Icon right>send</Icon>
              </Button>
              <Button
                node="button"
                style={{
                  marginRight: '5px',
                }}
                waves="light"
              >
                Reset
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateNewEmployee;
