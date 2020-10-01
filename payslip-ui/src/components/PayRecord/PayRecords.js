import React from "react";
import { Table } from "react-materialize";
import Navbar from "../Navbar";
import { Row, Col, Collection, CollectionItem, Icon } from "react-materialize";
const PayRecords = () => {
  return (
    <div>
      <Navbar title="Pay Records" />
      <div className="main">
        <Table hoverable responsive striped style={{ marginLeft: "2em" }}>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Total Earning</th>
              <th>Total Working hours</th>
              <th>Total Deduction</th>
              <th>Total Inhand Pay</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alvin</td>
              <td>$100</td>
              <td>37</td>
              <td>$20</td>
              <td>$80</td>
            </tr>
            <tr>
              <td>Alvin</td>
              <td>$100</td>
              <td>37</td>
              <td>$20</td>
              <td>$80</td>
            </tr>
            <tr>
              <td>Alvin</td>
              <td>$100</td>
              <td>37</td>
              <td>$20</td>
              <td>$80</td>
            </tr>
            <tr>
              <td>Alvin</td>
              <td>$100</td>
              <td>37</td>
              <td>$20</td>
              <td>$80</td>
            </tr>
            <tr>
              <td>Alvin</td>
              <td>$100</td>
              <td>37</td>
              <td>$20</td>
              <td>$80</td>
            </tr>
            <tr>
              <td>Alvin</td>
              <td>$100</td>
              <td>37</td>
              <td>$20</td>
              <td>$80</td>
            </tr>
            <tr>
              <td>Alvin</td>
              <td>$100</td>
              <td>37</td>
              <td>$20</td>
              <td>$80</td>
            </tr>
            <tr>
              <td>Alvin</td>
              <td>$100</td>
              <td>37</td>
              <td>$20</td>
              <td>$80</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PayRecords;
