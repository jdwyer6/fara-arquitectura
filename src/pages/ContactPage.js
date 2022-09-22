import { Container, Row, Col } from "react-bootstrap";
import { BsInstagram, BsTwitter } from 'react-icons/bs';


const ContactPage = () => {
    return ( 
        <Container fluid>
            <Row>
                <Col>
                    <h1 className='text-center border-bottom border-top'>Contáctanos</h1>
                </Col>
            </Row>
            <Row className='contact-wrapper' style={{height: '65vh'}}>
                <Col className="text-center">
                    <h3>Correo Electrónico</h3>
                    <p className="mt-5">proyectos@faraharquitectura.com</p>
                </Col>
                <Col className="text-center">
                    <h3>Teléfono</h3>
                    <p className="mt-5">+52 55 39644319</p>
                </Col>
                <Col className='text-center'>
                    <h3>Las Redes Sociales</h3>
                    <BsInstagram className="text-muted my-5 mx-2 "/>
                    <BsTwitter className="text-muted my-5 mx-2"/>
                </Col>
            </Row>
        </Container> 
    );
}
 
export default ContactPage;