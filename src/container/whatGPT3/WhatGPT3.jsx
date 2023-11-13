import React from 'react';
import {RiShoppingBagLine} from 'react-icons/ri';
import {CiStreamOn} from 'react-icons/ci';
import {RiComputerLine} from 'react-icons/ri';
/*import {image1, image2, image3} from './import'; */
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <><div className="container-fluid p-0 bg-grey">
      <div className="row">
        <div className="col-md-6">
          <h1>Everything <br />you need</h1>
          <p>you need to build better business.</p>
        </div>
        <div className="col-md-6">
        </div>
      </div>
    </div><div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <RiShoppingBagLine/>
                <h5 className="card-title">Shop Creation</h5>
                <p className="card-text">Quickly create a custom online shop which can be integrated into future</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <CiStreamOn/>
                <h5 className="card-title">Live Streaming</h5>
                <p className="card-text">Ready to make some sales? Effortlessly stream direct to social media channels</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <RiComputerLine/>
                <h5 className="card-title">Product Graphics</h5>
                <p className="card-text">Create beautiful custom onscreen product graphics that help drive eyeballs and attention</p>
              </div>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default WhatGPT3;