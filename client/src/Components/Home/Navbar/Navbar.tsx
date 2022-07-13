/**@Librarys */
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';

/**@Middlewares */
//import Sidebar from '../Sidebar/Sidebar';

/**@Others imports */
import '../../../../assets/styles/main.scss';


const Index = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="navbar-custom">
                    <Container>
                        <Link to="/">
                            <Navbar.Brand className="logo-title">CartStore</Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto my-2 my-lg-2">
                                <Link to="/">
                                    <Button className="nav-btn-custom" variant="me-2" >Inicio</Button>
                                </Link>
                                <Button className="nav-btn-custom" variant="me-2">Produtos</Button>
                                <Button className="nav-btn-custom" variant="me-2" disabled>Sobre</Button>
                                <Button className="nav-btn-custom" variant="me-2" disabled>Contato</Button>
                            </Nav>
                            <Link to="/login">
                                <Button className="outline-custom" variant="me-2">Entrar</Button>     
                            </Link>
                            <Link to="/register">
                                <Button className="outline-custom" variant="me-2">Registrar</Button>
                            </Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
  )
}

export default Index;