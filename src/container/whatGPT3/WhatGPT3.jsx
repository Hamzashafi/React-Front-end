import React from 'react';
import {image1, image2, image3} from './import';
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
    <div className='section__header__margin' >
    <div className='header__content'>
      <h1><b>Everything <br />you need</b> </h1>
      <h2>you need to build better <br />business.</h2>
      <div className='header__button'>
        <button type='button'>Start Streaming</button>
      </div>
    </div>
    <div className='container__box'>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={image1}
          />
          <MDBCardBody>
            <MDBCardTitle>Shop Creation</MDBCardTitle>
            <MDBCardText>
            Quickly create a custom online shop which can be integrated into future livestreams.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={image2}
          />
          <MDBCardBody>
            <MDBCardTitle>Live Streaming</MDBCardTitle>
            <MDBCardText>
            Ready to make some sales? Effortlessly stream direct to social media channels.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={image3}
          />
          <MDBCardBody>
            <MDBCardTitle>Product Graphics</MDBCardTitle>
            <MDBCardText>
            Create beautiful, custom on-screen product graphics that help drive eyeballs and attention.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
    </div>
  )
}

export default WhatGPT3;