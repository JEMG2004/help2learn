import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import LogoutButton  from "./Logout.js";
import { MDBCol, MDBContainer, MDBRow,MDBCard,MDBCardBody,MDBCardImage} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

export const Profile= () => {
    const {user, isAuthenticated, isLoading}= useAuth0();
    const navigate = useNavigate();
    console.log(user)

    if(isLoading){
        return<div>Loading... </div>
    }
    return(
        isAuthenticated &&(
            <section style={{ backgroundColor: '#eee' }}>
                <MDBContainer className="py-5">
                <MDBRow className='d-flex align-items-center justify-content-center'>
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
                </MDBRow>
                </MDBContainer>
            </section>
        )
    );
};

export default Profile;