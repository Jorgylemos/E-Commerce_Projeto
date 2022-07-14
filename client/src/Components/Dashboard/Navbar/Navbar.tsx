/**@Librarys */
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';

/**@Middlewares */
import Sidebar from '../Sidebar/Sidebar';

/**@Others imports */
import '../../../../assets/styles/main.scss';

const Index = ({user}: {user: any}) => {
    
const state = useSelector((state: any) => state.cartHandle)

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="navbar-custom">
                    <Container>

                        <Navbar.Brand className="logo-title"><Link to="/">CartStore</Link></Navbar.Brand>

                        <Navbar.Toggle className="toggle-custom" aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto my-2 my-lg-2">
                                <Link to="/">
                                    <Button className="nav-btn-custom" variant="me-2">Inicio</Button>
                                </Link>
                                <Link to="/produtos">
                                    <Button className="nav-btn-custom" variant="me-2">Produtos</Button>
                                </Link>
                                <Button className="nav-btn-custom" variant="me-2" disabled>Sobre</Button>
                                <Button className="nav-btn-custom" variant="me-2" disabled>Contato</Button>
                            </Nav>
                            <Sidebar user={user} />
                            <Button className="cart-btn" variant=""> <i className="fa fa-shopping-cart"></i>({state.length})</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
  )
}

export default Index;