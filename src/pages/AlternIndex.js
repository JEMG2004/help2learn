import React from 'react';
import {
  
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  
}
from 'mdb-react-ui-kit';

import LoginButton from "../components/Login.js"
import Logo from "../logoOficial.svg"

function AlternIndex() {
  return (
    <MDBContainer className="my-5 "  style={{ maxWidth: '60%', maxHeight: '100%'}}>

      <MDBCard>
        <MDBRow className='g-0'>

        <MDBCol md='6' className='d-flex align-items-center justify-content-center'>
          <MDBCardImage
            src='https://img.freepik.com/vector-gratis/evento-vivo-transmision-ilustrada_23-2148520400.jpg'
            alt='login form'
            style={{ maxWidth: '100%', maxHeight: '100%', padding: '50px' }}
          />
        </MDBCol>

          
          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column' >
              <div className='d-flex flex-column align-items-center justify-content-center text-center mt-2' style={{height: '70vh'}}>
                <div className='d-flex flex-row mt-2' >
                  <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                  <img src={Logo} className="App-log"/>
                </div>

                <h5 center className="fw-normal my-4 pb-3 text-center" style={{letterSpacing: '1px'}}>  <LoginButton/></h5>

                <div className='d-flex flex-row justify-content-start'>
                  <a href="#!" className="small text-muted me-1">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </div>
              </div>
            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default AlternIndex;