import React, { useContext, useEffect } from "react";
import { UserContext } from "../../store/UserContext";
import { Row, Col, Card, Icon, CardTitle } from "react-materialize";

const Insights = () => {
  const [stats, setStats] = useContext(UserContext);
  return (
    <div className="info-stats">
      <Row>
        <Col m={6} s={12}>
            <Card
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle
                  image="https://materializecss.com/images/sample-1.jpg"
                  reveal
                  waves="light"
                />
              }
              reveal={
                <ul className="inner">
                  {stats.map((desiCount, i) => (
                    <li key={i}>{desiCount.designation}</li>
                  ))}
                </ul>
              }
              revealIcon={<Icon>more_vert</Icon>}
              title="INSIGHTS"
            ></Card>
        </Col>
      </Row>
    </div>
  );
};

export default Insights;

