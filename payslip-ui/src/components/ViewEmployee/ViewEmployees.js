import React, { useContext, useEffect } from 'react';
import Navbar from '../Navbar';
import '../ViewEmployee/viewEmployee.css';
import { UserContext } from '../../store/UserContext';
import { Link } from 'react-router-dom';
import Insights from './Insights';
import PieChart from './PieChart';
import LoadingProgress from '../../common/LoadingProgress';

const ViewEmployees = () => {
  const [users, setusers, loadUsers, loading] = useContext(UserContext);
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
              <div className="user-summary-card">
                <div>
                  <img
                    src={'https://randomuser.me/api/portraits/men/75.jpg'}
                    alt="profile two"
                  />
                  <h2>
                    <p>
                      {user.firstName} {user.lastName}
                    </p>
                    <br />
                    <span>{user.username}</span>
                    <br />
                    <span>{user.email}</span>
                  </h2>
                </div>

                <button>View Info</button>
              </div>
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
