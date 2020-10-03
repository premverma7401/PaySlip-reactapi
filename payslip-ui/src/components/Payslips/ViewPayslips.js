import React, { useContext, useState } from 'react';
import { UserContext } from '../../store/UserContext';
import Navbar from '../Navbar';
import './ViewPayslips.css';
import { Col, Collapsible, CollapsibleItem, Row } from 'react-materialize';
import agent from '../../api/agent';
import { Modal } from '../../common/CustomModal/Modal';
import UserSelect from '../../common/CustomSelect/UserSelect';

const ViewPayslips = ({ match }) => {
  const [users, setUsers] = useContext(UserContext);
  // const [payslipList, setPayslipList] = useState('');
  const [payslipsList, setPayslipsList] = useState([]);
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);

  const getPayslip = async (id) => {
    try {
      const payslipsList = await agent.Payslip.list(id);
      setPayslipsList(payslipsList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar title="View Payslips" />
      <div className="main">
        <Row className="view-ps-header">
          <Col>
            <UserSelect onChange={(e) => getPayslip(e.target.value)} />
          </Col>
          {/* <Col>
            {payslipsList.length > 1 && (
              <Fragment>
                <button onClick={() => setShow(true)} className="btn-openModal">
                  Search By Date
                </button>
                <Modal show={show} close={closeModalHandler} />
              </Fragment>
            )}
          </Col> */}
        </Row>

        <Row>
          {payslipsList.length > 0 ? (
            <Collapsible accordion>
              {payslipsList.map((ps, i) => (
                <CollapsibleItem
                  key={i}
                  expanded={false}
                  header={`Created At ${ps.createdAtstr} `}
                  node="div"
                >
                  <Row>
                    <Col l={6}>Total Hours Worked: {ps.totalHours}</Col>
                    <Col l={6}>Total Earning: {ps.totalEarning}</Col>
                  </Row>
                  <Row>
                    <Col l={6}>Total Overtime Earning:{ps.overtimeEarning}</Col>
                    <Col l={6}>Total Overtime Hours:{ps.overtimeHours}</Col>
                  </Row>
                  <Row>
                    <Col l={6}>Total Deduction : {ps.totalDeduction}</Col>
                  </Row>
                </CollapsibleItem>
              ))}
            </Collapsible>
          ) : (
            <div style={{ marginLeft: '2em' }}>Please select employee:</div>
          )}
        </Row>
      </div>
    </div>
  );
};

export default ViewPayslips;
