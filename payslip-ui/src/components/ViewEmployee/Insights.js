import React from 'react';
import { Row, Col } from 'react-materialize';

const Insights = ({ desiStats }) => {
  return (
    <div className="info-stats">
      <Row>
        <Col m={6} s={12}>
          <div className="card">
            <div className="card-header">Insights</div>
            <div className="inner">
              {desiStats.map((desiCount, i) => (
                <Row key={i}>
                  <Col l={7}> {desiCount.designation}</Col>
                  <Col> {desiCount.designationCount}</Col>
                </Row>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Insights;
