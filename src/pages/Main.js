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

export default function Main() {
<<<<<<< HEAD
  const { user, isAuthenticated } = useAuth0();
=======
  const { user,isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  console.log(user)
const cardContent = [
  {
    imageSrc: image1,
    title: 'Card 1 Title',
    text: 'Content for Card 1...',
  },
  {
    imageSrc: image2,
    title: 'Card 2 Title',
    text: 'Content for Card 2...',
  },
  {
    imageSrc: image3,
    title: 'Card 3 Title',
    text: 'Content for Card 3...',
  },{
    imageSrc: image4,
    title: 'Card 3 Title',
    text: 'Content for Card 3...',
  },
];
>>>>>>> 79f0f0854f2720e745332b40f8ebedcb6f6e6e90

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
                <MDBCardImage src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fconceptodefinicion.de%2Fwp-content%2Fuploads%2F2020%2F05%2Fcalculo.jpg&f=1&nofb=1&ipt=7571f0249dd0b80f0ffe0e74cb7b66f790b91f4885c0b60fd66e3b10699b968d&ipo=images' fluid alt='...' />
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
            <MDBCard>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
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
            <MDBCard>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
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
            <MDBCard>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
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