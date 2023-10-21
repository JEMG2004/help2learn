import React from 'react';
import { MDBCol, MDBContainer, MDBRow,MDBCard,MDBCardBody,MDBCardImage} from 'mdb-react-ui-kit';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../components/Logout';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import Call from "../components/Call";
import image1 from '../assets/calculo.png';
import image2 from '../assets/historia.png';
import image3 from '../assets/programacion.png';
import image4 from '../assets/quimica.png';

export default function Main() {
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

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4"><MDBCard className="mb-4">
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
          {cardContent.map((card, index) => (
              <Card
                key={index}
                imageSrc={card.imageSrc}
                title={card.title}
                text={card.text}
              />
            ))}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
