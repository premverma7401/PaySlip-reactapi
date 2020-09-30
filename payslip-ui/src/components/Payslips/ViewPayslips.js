import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../store/UserContext";
import Navbar from "../Navbar";
import "./ViewPayslips.css";
import { Collapsible, CollapsibleItem, Icon, Select } from "react-materialize";
import agent from "../../api/agent";
import { Modal } from "../../common/CustomModal/Modal";

const ViewPayslips = ({ match }) => {
  const [users, setUsers] = useContext(UserContext);
  // const [payslipList, setPayslipList] = useState('');
  const [payslipsList, setPayslipsList] = useState([]);
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);

  // const currUserId = match.params.id;

  const getPayslip = async (id) => {
    try {
      const payslipsList = await agent.Payslip.list(id);
      setPayslipsList(payslipsList);
      console.log(payslipsList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar title="View Payslips" />
      <div className="main">
        <div className="payslip-inputs">
          <Select
            name="employee-list"
            id="employee-list"
            multiple={false}
            options={{
              dropdownOptions: {
                alignment: "left",
                autoTrigger: true,
                closeOnClick: true,
                constrainWidth: true,
                coverTrigger: false,
                hover: false,
              },
            }}
            value=""
            onChange={(e) => getPayslip(e.target.value)}
          >
            <option disabled value="">
              Select Employee
            </option>
            {users.map((user) => (
              <option key={user.empId} value={user.empId}>
                {user.firstName} {user.lastName}
              </option>
            ))}
          </Select>

          {payslipsList.length > 1 && (
            <div>
              <button onClick={() => setShow(true)} className="btn-openModal">
                Search By Date
              </button>
              <Modal show={show} close={closeModalHandler} />
            </div>
          )}
        </div>
        <div>
          {payslipsList.length > 0 ? (
            <Collapsible accordion>
              {payslipsList.map((ps, i) => (
                <CollapsibleItem
                  key={i}
                  expanded={false}
                  header={`Total Hours worked: ${ps.totalHours}`}
                  icon={<Icon>filter_drama</Icon>}
                  node="div"
                >
                  {ps.totalHours}
                </CollapsibleItem>
              ))}
            </Collapsible>
          ) : (
            <div style={{ marginLeft: "2em" }}>Please select employee:</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewPayslips;
