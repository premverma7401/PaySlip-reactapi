import React from 'react';
import { Button, Icon, Select, TextInput } from 'react-materialize';
import InfotabComponent from '../../common/InfotabComponent';
import Navbar from '../Navbar';

const CreateUser = () => {
  return (
    <div>
      <Navbar title="Create Employee" />
      <form className="main">
        <div className="create-personal-info">
          <InfotabComponent text="PERSONAL INFORMATION" />
          <div>
            <div>
              <div>
                <TextInput label="Username" />
                <TextInput label="First Name" />
              </div>
              <div>
                <TextInput label="IRD" />
                <TextInput label="Last Name" />
              </div>
              <div className="emp-img">
                <input
                  id="file-upload"
                  type="file"
                  name="imageUrl"
                  //   onChange={(e) =>
                  //     formProps.setFieldValue('imageUrl', e.target.files[0])
                  //   }
                />
                {/* <TextInput  label="Designation" /> */}
              </div>
            </div>
            <div>
              <TextInput label="Email Address" />
              <TextInput label="Contact No." />
              <TextInput
                type="date"
                placeholder="DOB"
                value="none"
                label="Date Of Birth"
              />
            </div>
            <div>
              <TextInput className="address-bar" label="Address" />
            </div>
          </div>
        </div>
        <div className="create-contract-info">
          <InfotabComponent text="CONTRACT INFORMATION" />
          <div>
            <div>
              <TextInput label="Contract Hours" />
              <TextInput label="Pay Per Hour" />
              <TextInput label="Overtime Rate" />
            </div>
            <div>
              <TextInput label="Kiwi Saver" />
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
      </form>
    </div>
  );
};

export default CreateUser;
