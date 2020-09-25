import React, { useContext, useEffect } from "react";
import Navbar from "../Navbar";
import "../ViewEmployee/viewEmployee.css";
import { UserContext } from "../../store/UserContext";
import { Link } from "react-router-dom";
import Insights from "./Insights";
import PieChart from "./PieChart";
import LoadingProgress from "../../common/LoadingProgress";
import { Row, Col, Card, CardTitle, Icon } from "react-materialize";

const ViewEmployees = () => {
  const [users, setusers, loadUsers, loading, stats, setStats] = useContext(
    UserContext
  );
  useEffect(() => {
    loadUsers();
  }, []);

  if (loading) return <LoadingProgress text="Loading users" />;

  return (
    <div>
      <Navbar title="Employees List" />
      <div className="info-parent main">
        <div className="card-group">
          {users.map((user) => (
            <Link to={`/viewemp/${user.empId}`} key={user.empId}>
              <Row className="user-summary-card">
                <Col m={6} s={12}>
                  <Card
                    actions={[
                      <a key="1" href="#">
                        View Employee
                      </a>,
                    ]}
                    closeIcon={<Icon>close</Icon>}
                    header={
                      <CardTitle image="https://materializecss.com/images/sample-1.jpg" />
                    }
                    horizontal
                    revealIcon={<Icon>more_vert</Icon>}
                    >
                    <div>
                      <p>
                        {user.firstName} {user.lastName}
                      </p>
                      <br />
                      <span>{user.username}</span>
                      <br />
                      <span>{user.email}</span>
                      <br/>
                      <span>{user.designation}</span>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Link>
          ))}
        </div>
        <div>
          <Insights />
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default ViewEmployees;
