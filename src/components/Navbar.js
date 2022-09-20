import { Container, Navbar } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import  { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/images/logo.png';



function Navigation() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
        <Navbar bg="transparent" expand="lg" className='py-4'>
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img src={logo} alt='logo' aria-details='logo' width='250px'/>
                </Navbar.Brand>
                <GiHamburgerMenu variant="primary" onClick={handleShow}>Launch</GiHamburgerMenu>

                <Offcanvas show={show} onHide={handleClose} placement='end'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the
                        elements you have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>

        </Navbar>
  );
}

export default Navigation;