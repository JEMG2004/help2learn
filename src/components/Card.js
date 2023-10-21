import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from 'mdb-react-ui-kit';

const Card = ({ imageSrc, title, text }) => (
  <MDBCard>
    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
      <MDBCardImage src={imageSrc} fluid alt='...' />
      <a>
        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
      </a>
    </MDBRipple>
    <MDBCardBody>
      <MDBCardTitle>{title}</MDBCardTitle>
      <MDBCardText>{text}</MDBCardText>
      <MDBBtn href='#'>Button</MDBBtn>
    </MDBCardBody>
  </MDBCard>
);


export default Card;
