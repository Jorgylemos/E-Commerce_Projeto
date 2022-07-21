/**@Librarys */
import { useState } from 'react';
import { Card, Container, Button, Image } from 'react-bootstrap';
import Axios from 'axios';

/**@Middlewares */
import GoogleLogo from '../../../../assets/images/social-media-logos/google.png';

/**@Others imports */
import '../../../../assets/styles/main.scss';

interface LoginComponent {
    login: any;
    setLoginUsername: any;
    setLoginPassword: any;
}

function Login(props: LoginComponent) {

    const { login, setLoginPassword, setLoginUsername } = props;


    const google = () => {
        window.open('http://localhost:5000/auth/google', '_self');
    }

    return (
        <>
            <Image src="/assets/images/bg.jpg" alt="Background" className="card-img" />
            <Card.ImgOverlay style={{ marginTop: '60px' }}>
                <Container className="login-custom">
                    <Container className="loginContainer">
                        <Card.Title className="title-color">Usuário</Card.Title>
                        <input
                            type="text"
                            autoFocus
                            required
                            placeholder='E-mail'
                            onChange={(e) => setLoginUsername(e.target.value)}
                        />
                        <Card.Title className="title-color py-3 mb-0">Password</Card.Title>
                        <input
                            type="password"
                            required
                            placeholder='Password'
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />

                        <Container className="btn-container">
                            <Button onClick={login}>Entrar</Button>
                        </Container>
                        <Button className="btn-social-logo" onClick={google}><Image src={GoogleLogo} /></Button>
                    </Container>
                </Container>
            </Card.ImgOverlay>
        </>
    )
}

export default Login;