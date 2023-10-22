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
    title: 'Asesorias en Calculo',
    text: 'E ',
    buttonLText: 'hola',
    buttonLink: 'https://mdbootstrap.com/docs/react/components/cards/#!'
  },
  {
    imageSrc: image2,
    title: 'Asesorias en Historia',
    text: 'Content for Card 2...',
    buttonLText: '',
    buttonLink: 'https://chat.openai.com/c/54b0c2ca-15fe-4667-9616-2c231c5c8944'
  },
  {
    imageSrc: image3,
    title: 'Asesorias en Programacion',
    text: 'Content for Card 3...',
    buttonLText: '',
    buttonLink: 'https://bard.google.com/chat/6ecb2a2035fa8848'
  },{
    imageSrc: image4,
    title: 'Asesorias en Quimica',
    text: 'Content for Card 3...',
    buttonLText: '',
    buttonLink: 'https://stackoverflow.com/questions/37644265/correct-path-for-img-on-react-js',
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
            <MDBRow>
          {cardContent.slice(0,2).map((card, index) => (
            <MDBCol key={index} md="6">
              <Card
                key={index}
                imageSrc={card.imageSrc}
                title={card.title}
                text={card.text}
                buttonText={card.buttonLText}
                buttonLink={card.buttonLink}
      
              />
              </MDBCol>
            ))}
            </MDBRow>
            <MDBRow>
            {cardContent.slice(2,4).map((card, index) => (
            <MDBCol key={index} md="6">
              <Card
                key={index}
                imageSrc={card.imageSrc}
                title={card.title}
                text={card.text}
                buttonText={card.buttonLText}
                buttonLink={card.buttonLink}
              />
              </MDBCol>
            ))}
              </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
