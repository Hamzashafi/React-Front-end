import React from 'react';
import { card1, card2, card3 } from './import';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import './possibility.css';

const Possibility = () => {
  return (
    <div className='column__cards'>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={card1}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Best Cyber Monday Deals</MDBCardTitle>
            <MDBBtn className='me-1' color='dark'>
        24 hours ago
      </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={card2}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Best Cyber Monday Deals</MDBCardTitle>
            <MDBBtn className='me-1' color='dark'>
        24 hours ago
      </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={card3}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Best Cyber Monday Deals</MDBCardTitle>
            <MDBBtn className='me-1' color='dark'>
        24 hours ago
      </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
  )
}

export default Possibility;