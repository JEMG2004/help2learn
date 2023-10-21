import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardTitle,
  MDBRipple
} from 'mdb-react-ui-kit';
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from "../components/Logout";
import Call from "../components/Call";
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/calculo.png';

export default function Main() {
  const { user, isAuthenticated } = useAuth0();

  const navigate = useNavigate();

  console.log(user)
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={user.picture}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Welcome back {user.given_name}!</p>
                <LogoutButton />
                <div className="d-flex justify-content-center mb-2">
                </div>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
          <MDBCol lg="8">
            <MDBCard>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src={image1} fluid alt='...' />
                <a>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>
                <MDBBtn href='#'>Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>

            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}