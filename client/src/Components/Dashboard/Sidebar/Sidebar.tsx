/**@Librarys */
import { useState } from 'react'
import { Button, Offcanvas, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**@Others imports */
import '../../../../assets/styles/main.scss';

function Sidebar({ user }: { user: any }, { ...props }: { props: any }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function logout() {
        window.open('http://localhost:5000/auth/logout', '_self');
    }

    // const state = useSelector((state: any) => state.cartHandle)
    // <Button className="cart-btn-sidebar" variant=""> <i className="fa fa-shopping-cart"></i>({state.length})</Button>

    /**
    const usertext = user.toString(user)
    console.log(usertext)
     */
    return (
        <>
            <Button variant="" onClick={handleShow} className="sidebar-custom me-2">
            <Image
                        src={user.user.photos[0].value}
                        alt=""
                        className="side-bar-avatar"
                    />
            </Button>
            <Offcanvas className="sidebar-custom" placement='end' show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header>
                    <Offcanvas.Title className="sidebar-logo-title">CartStore</Offcanvas.Title>
                    
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Image
                        src={user.user.photos[0].value}
                        alt=""
                        className="side-bar-avatar"
                    />
                    <Link to="settings">
                        <Button className="sidebar-button">Configuraçoes</Button>
                    </Link>
                    <Link to="dashboard">
                        <Button className="sidebar-button">Painel</Button>
                    </Link>
                </Offcanvas.Body>
                <Button onClick={logout} className="sidebar-logout-button" variant="me-2">Sair</Button>
            </Offcanvas>
        </>
    );
}

export default Sidebar;
