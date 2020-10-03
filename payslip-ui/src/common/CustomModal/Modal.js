import React from 'react';
import './Modal.css';

export const Modal = ({ show, close }) => {
  return (
    <div
      className="modal-wrapper"
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-80vh)',
        opacity: show ? '1' : '0',
      }}
    >
      <div className="modal-header">
        <p>Select Dates</p>
        <span onClick={close} className="close-modal-btn">
          x
        </span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <div>
            <span>
              <label htmlFor="from">From</label>
              <input type="date" id="from" placeholder="dd/mm/yy" />
            </span>
            <span>
              <label htmlFor="To">To</label>
              <input type="date" id="to" placeholder="dd/mm/yy" />
            </span>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={close} className="btn-cancel">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
