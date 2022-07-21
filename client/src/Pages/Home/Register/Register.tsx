/**@Librarys */
import { Card, Container, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';

/**@Middlewares */
import GoogleLogo from '../../../../assets/images/social-media-logos/google.png';

/**@Others imports */
import '../../../../assets/styles/main.scss';

function Register() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = () => {
        Axios({
            method: 'POST',
            data: {
                username: registerEmail,
                password: registerPassword,
            },
            withCredentials: true,
            url: 'http://localhost:5000/register',
        }).then((res) => {
            console.log(res);
        })
    }

    return (
        <>
            <Image src="/assets/images/bg.jpg" alt="Background" className="card-img" />
            <Card.ImgOverlay>
                <Container className="login-custom">
                    <Container className="loginContainer">
                        <Card.Title className="title-color">Email</Card.Title>
                        <input
                            type="text"
                            autoFocus
                            required
                            placeholder='E-mail'
                            onChange={(e) => setRegisterEmail(e.target.value)}
                        />
                        <Card.Title className="title-color py-3 mb-0">Password</Card.Title>
                        <input
                            type="password"
                            required
                            placeholder='Password'
                            onChange={(e) => setRegisterPassword(e.target.value)}
                        />

                        <Container className="btn-container">
                            <Button onClick={register}>Registrar</Button>
                        </Container>
                        <Link to="/login" style={{ textAlign: 'center', color: 'white' }}>
                            <p>Fazer Login?</p>
                        </Link>
                    </Container>
                </Container>
            </Card.ImgOverlay>
        </>
    )
}

export default Register