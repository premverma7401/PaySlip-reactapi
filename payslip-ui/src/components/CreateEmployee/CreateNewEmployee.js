import React, { useState } from 'react';
import Navbar from '../Navbar';
import InfotabComponent from '../../common/InfotabComponent';
import LoadingProgress from '../../common/LoadingProgress';
import agent from '../../api/agent';
import { Formik, Field, Form } from 'formik';
import './CreateEmployee.css';
import { TextInput, Button, Icon } from 'react-materialize';
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
                    <Field
                      name="firstname"
                      component={TextInput}
                      label="First Name"
                    />
                  </div>
                  <div>
                    <Field name="ird" component={TextInput} label="IRD" />
                    <Field
                      name="lastname"
                      component={TextInput}
                      label="Last Name"
                    />
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
                  <Field
                    name="email"
                    component={TextInput}
                    label="Email Address"
                  />
                  <Field
                    name="contactno."
                    component={TextInput}
                    label="Contact No."
                  />
                  <Field
                    name="dob"
                    component={TextInput}
                    type="date"
                    label="Date of Birth"
                  />
                </div>
                <div>
                  <Field
                    name="address"
                    className="address-bar"
                    component={TextInput}
                    label="Address"
                  />
                </div>
              </div>
            </div>
            <div className="create-contract-info">
              <InfotabComponent text="CONTRACT INFORMATION" />
              <div>
                <div>
                  <Field
                    name="Conracthours"
                    component={TextInput}
                    label="Contract Hours"
                  />
                  <Field
                    name="Payperhour"
                    component={TextInput}
                    label="Pay Per Hour"
                  />
                  <Field
                    name="overtimerate"
                    component={TextInput}
                    label="OverTime Rate"
                  />
                </div>
                <div>
                  <Field
                    name="kiwisaver"
                    component={TextInput}
                    label="Kiwi Saver"
                  />
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
