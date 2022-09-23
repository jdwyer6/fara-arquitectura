import { Container, Row, Col, Button } from 'react-bootstrap'
import HeroImage from '../assets/images/hero-image.jpg';
import apartment from '../assets/images/apartment.png';
import table from '../assets/images/table.png';
import couch from '../assets/images/couch.png';
import { Parallax,  ParallaxLayer} from '@react-spring/parallax';
import { Link } from 'react-router-dom';
import blueprints from '../assets/images/blueprints.png';
import heroImageMobile from '../assets/images/hero-image_mobile.jpg';
import livingroom from '../assets/images/livingroom.jpg';


const HomePage = () => {
    return ( 
        <Container fluid>
            <Row className='hero-image-container'>
                <img src={HeroImage} alt='main image' className='d-sm-inline d-none'/>
                <img src={heroImageMobile} alt='main-image' className='d-sm-none'/>
                <div className="hero-text">
                    <h1>DESARROLLO DE <strong>EXPERIENCIAS</strong></h1>
                    <h2>HECHAS A LA MEDIDA PARA CADA UNO DE LOS CLIENTES</h2>
                </div>
            </Row>
            <Row className='py-4 home-gallery-container'>
                <Col md='6' className='grid-col grid-section-tall grid-text-container-tall'>
                    <Link to='about'>
                        <img src={apartment} className='d-none d-md-inline' alt='apartment'/>
                        <h5 className='grid-text d-none d-md-inline'>Acerca de</h5>
                    </Link>
                </Col>
                <Col className='grid-col'>
                    <Col md='12' className='pb-md-2 grid-section mb-4 mb-md-0 grid-text-container'>
                        <Link to='services'>
                            <img src={table} alt='table'/>
                        </Link>
                        
                        <h5 className='grid-text'>Servicios</h5>
                    </Col>
                    <Col md='12' className='pt-md-2 grid-section grid-text-container'>
                        <Link to='gallery'>
                            <img src={couch} alt='couch'/>
                            <h5 className='grid-text'>Galería</h5>
                        </Link>

                    </Col>
                </Col>
            </Row>
            <Row className='info-container mt-4 mt-md-0 '>
                <Col className='info-wrapper'>
                    <div className='info-text-div'>
                        <h1 className='info-text'>Resolvemos desafíos aprovechando la experiencia colectiva y el ingenio de las mejores y más brillantes mentes en desarrollo, diseño y construcción.</h1>
                        <Link to='contact' class='text-decoration-none'>
                            <Button  className='d-md-inline d-none'>Reservar una Consulta</Button>
                        </Link>
                    </div>
                    <img width='100%' src={blueprints} alt='blueprints'/>
                </Col>
            </Row>

        </Container>
     );
}
 
export default HomePage;