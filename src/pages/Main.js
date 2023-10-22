import React from 'react';
import { MDBCol, MDBContainer, MDBRow,MDBCard,MDBCardBody,MDBCardImage} from 'mdb-react-ui-kit';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../components/Logout';
import Card from '../components/Card';
import { useNavigate, Link } from 'react-router-dom';
import Call from "../components/Call";
import image1 from '../assets/calculo.png';
import image2 from '../assets/historia.png';
import image3 from '../assets/programacion.png';
import image4 from '../assets/quimica.png';

export default function Main() {
  const { user,isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  console.log(user)
  const handleCardButtonClick = () => {
    navigate('/Call')
  }
const cardContent = [
  {
    imageSrc: image1,
    title: 'Calculus Consulting',
    text: 'The best Calculus Consulting',
    buttonLText: 'Click here to more information',
  },
  {
    imageSrc: image2,
    title: 'History Consulting',
    text: 'The best History Consulting',
    buttonLText: 'Click here to more information',
  },
  {
    imageSrc: image3,
    title: 'Programming Consulting',
    text: 'The best Programming Consulting',
    buttonLText: 'Click here to more information',
  },
  {
    imageSrc: image4,
    title: 'Chemistry Consulting',
    text: 'The best Chemistry Consulting',
    buttonLText: 'Click here to more information',
  },
  {
    imageSrc: image1,
    title: 'Chemistry Consulting',
    text: 'The best Chemistry Consulting',
    buttonLText: 'Click here to more information',
  },
  {
    imageSrc: image4,
    title: 'Chemistry Consulting',
    text: 'The best Chemistry Consulting',
    buttonLText: 'Click here to more information',
  },
];

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="15">
            <MDBRow>
          {cardContent.slice(0,3).map((card, index) => (
            <MDBCol key={index} md="4">
              <Card
                key={index}
                imageSrc={card.imageSrc}
                title={card.title}
                text={card.text}
                buttonText={card.buttonLText}
                buttonClick={handleCardButtonClick}
      
              />
              </MDBCol>
            ))}
            </MDBRow>
            <MDBRow>
            {cardContent.slice(3,6).map((card, index) => (
            <MDBCol key={index} md="4">
              <Card
                key={index}
                imageSrc={card.imageSrc}
                title={card.title}
                text={card.text}
                buttonText={card.buttonLText}
                buttonClick={handleCardButtonClick}
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
