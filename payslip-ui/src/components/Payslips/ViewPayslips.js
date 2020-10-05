import React, { useState } from 'react';
import Navbar from '../Navbar';
import './ViewPayslips.css';
import { Col, Collapsible, CollapsibleItem, Row } from 'react-materialize';
import agent from '../../api/agent';
import UserSelect from '../../common/CustomSelect/UserSelect';
import { Button } from 'semantic-ui-react';

const ViewPayslips = ({ match }) => {
  const [payslipsList, setPayslipsList] = useState([]);
  const [show, setShow] = useState(false);

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
        <Row className="payslip-inputs">
          <Col>
            <UserSelect onChange={(e) => getPayslip(e.target.value)} />
          </Col>
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
                    <Col l={6}>Total Overtime Hours:{ps.overtimeHours}</Col>
                    <Col l={6}>Total Overtime Earning:{ps.overtimeEarning}</Col>
                  </Row>
                  <Row>
                    <Col l={6}>
                      Total Contracted Hours : {ps.contractedHours}
                    </Col>
                    <Col l={6}>
                      Total Contracted Earning : {ps.contractedEarning}
                    </Col>
                  </Row>
                  <Row>
                    <Col l={6}>Total Deduction : {ps.totalDeduction}</Col>
                  </Row>
                  <Button
                    primary
                    floated="right"
                    compact
                    circular
                    onClick={() => {
                      alert('Feature coming soon');
                    }}
                  >
                    Download
                  </Button>
                </CollapsibleItem>
              ))}
            </Collapsible>
          ) : (
            <div style={{ marginLeft: '2em' }}>
              No Payslip to display, Select Employee
            </div>
          )}
        </Row>
      </div>
    </div>
  );
};

export default ViewPayslips;
