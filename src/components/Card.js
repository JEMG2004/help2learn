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

const Card = ({ imageSrc, title, text, buttonText, buttonClick }) => (
  <MDBCard style={{width: '90%', height: '90%'}}>
    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
      <MDBCardImage src={imageSrc} fluid alt='...' style={{width: '100%', height: '100%'}}/>
      <a>
        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
      </a>
    </MDBRipple>
    <MDBCardBody>
      <MDBCardTitle>{title}</MDBCardTitle>
      <MDBCardText>{text}</MDBCardText>
      <MDBBtn onClick={buttonClick} target='_blank' rel='noopener noreferrer'>
        {buttonText}
      </MDBBtn>
    </MDBCardBody>
  </MDBCard>
);


export default Card;
