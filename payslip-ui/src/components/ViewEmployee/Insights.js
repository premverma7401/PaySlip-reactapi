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
          {/* <Card
            closeIcon={<Icon>close</Icon>}
            reveal={
              <ul className="inner">
                {desiStats.map((desiCount, i) => (
                  <div>
                    <li key={i}>{desiCount.designation} </li>
                    <li>{desiCount.designationCount}</li>
                  </div>
                ))}
              </ul>
            }
            revealIcon={<Icon>more_vert</Icon>}
            title="INSIGHTS"
          ></Card> */}
        </Col>
      </Row>
    </div>
  );
};

export default Insights;
