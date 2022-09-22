import { Container, Navbar } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import  { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';



function Navigation() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
        <Navbar bg="transparent" expand="lg" className='py-4'>
            <Container fluid>
                <Navbar.Brand as={Link} to='/'>
                    <img src={logo} alt='logo' aria-details='logo' width='250px'/>
                </Navbar.Brand>
                <GiHamburgerMenu className='hamburger-menu' variant="primary" onClick={handleShow}>Launch</GiHamburgerMenu>

                <Offcanvas show={show} onHide={handleClose} placement='end'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>EXPLORAR</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul className='nav-drawer'>
                            <Link to='/' style={{textDecoration:'none', color: 'black'}}>
                                <li>Home</li>
                            </Link>
                            <Link to='about' style={{textDecoration:'none', color: 'black'}}>
                                <li>Acerca de</li>
                            </Link>
                            <Link to='services' style={{textDecoration:'none', color: 'black'}}>
                                <li>Servicios</li>
                            </Link>
                            <Link to='gallery' style={{textDecoration:'none', color: 'black'}}>
                                <li>Galería</li>
                            </Link>
                            <Link to='contact' style={{textDecoration:'none', color: 'black'}}>
                                <li>Contactar</li>
                            </Link>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>

        </Navbar>
  );
}

export default Navigation;