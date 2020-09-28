import React from 'react';
import { Table } from 'react-materialize';
import Navbar from '../Navbar';

const PayRecords = () => {
  return (
    <div>
      <Navbar title="Pay Records" />
      <div className="main">
        <Table>
          <thead>
            <tr>
              <th data-field="id">Employee Name</th>
              <th data-field="name">Item Name</th>
              <th data-field="price">Item Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alvin</td>
              <td>Eclair</td>
              <td>$0.87</td>
            </tr>
            <tr>
              <td>Alan</td>
              <td>Jellybean</td>
              <td>$3.76</td>
            </tr>
            <tr>
              <td>Jonathan</td>
              <td>Lollipop</td>
              <td>$7.00</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PayRecords;
