import React from 'react';
import Navbar from '../Navbar';
import { Row, Col, Collection, CollectionItem, Icon } from 'react-materialize';

const PayRecords = () => {
  return (
    <div>
      <Navbar title="Pay Records" />
      <div className="main">
        <Collection header="First Names">
          <CollectionItem>
            Alvin
            <a className="secondary-content" href="javascript:void(0)">
              <Icon>send</Icon>
            </a>
          </CollectionItem>
          <CollectionItem>
            Alvin
            <a className="secondary-content" href="javascript:void(0)">
              <Icon>send</Icon>
            </a>
          </CollectionItem>
          <CollectionItem>
            Alvin
            <a className="secondary-content" href="javascript:void(0)">
              <Icon>send</Icon>
            </a>
          </CollectionItem>
          <CollectionItem>
            Alvin
            <a className="secondary-content" href="javascript:void(0)">
              <Icon>send</Icon>
            </a>
          </CollectionItem>
        </Collection>
      </div>
    </div>
  );
};

export default PayRecords;
