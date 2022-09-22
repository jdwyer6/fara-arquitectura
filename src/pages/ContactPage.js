import { Container, Row, Col } from "react-bootstrap";
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import kitchen from '../assets/images/contact/kitchen.jpg'


const ContactPage = () => {
    return ( 
        <Container fluid>
            <Row>
                <Col>
                    <h1 className='text-center border-bottom border-top'>Contáctanos</h1>
                </Col>
            </Row>
            <Row className='contact-wrapper d-flex align-items-center'>
                <Col md='5'>
                    <img src={kitchen} width='100%' />
                </Col>
                <Col className='px-5 mx-5'>
                    <Row className="text-center border-top border-bottom py-5">
                        <h3>Correo Electrónico</h3>
                        <p className="mt-2">proyectos@faraharquitectura.com</p>
                    </Row>
                    <Row className="text-center border-top border-bottom py-5">
                        <h3>Teléfono</h3>
                        <p className="mt-2">+52 55 39644319</p>
                    </Row>
                    <Row className='text-center d-flex justify-content-center border-top border-bottom py-5'>
                        <h3>Las Redes Sociales</h3>
                        <BsInstagram className="text-muted" style={{width: '100px'}}/>
                        <BsTwitter className="text-muted" style={{width: '100px'}}/>
                    </Row>
                </Col>

            </Row>
        </Container> 
    );
}
 
export default ContactPage;