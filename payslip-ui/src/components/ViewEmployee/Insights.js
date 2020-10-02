import React from 'react';
import { Row, Col, Card } from 'react-materialize';

const Insights = ({ desiStats }) => {
  return (
    <div className="info-stats">
      <Row>
        <Col m={6} s={12}>
          <Card className="white" title="Insights">
            <span className="white-text">
              {desiStats.map((desiCount, i) => (
                <div key={i}>
                  {desiCount.designation} - {desiCount.designationCount}
                </div>
              ))}
            </span>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Insights;
