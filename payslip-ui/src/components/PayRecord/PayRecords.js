import React from 'react';
import Navbar from '../Navbar';
import { Collection, CollectionItem } from 'react-materialize';

const PayRecords = () => {
  return (
    <div>
      <Navbar title="Pay Records" />
      <div className="main">
        <Collection header="First Names">
          <CollectionItem>Alvin</CollectionItem>
        </Collection>
      </div>
    </div>
  );
};

export default PayRecords;
