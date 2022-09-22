import { Container, Row, Col, Button } from 'react-bootstrap'
import HeroImage from '../assets/images/hero-image.jpg';
import apartment from '../assets/images/apartment.png';
import table from '../assets/images/table.png';
import couch from '../assets/images/couch.png';
import { Parallax,  ParallaxLayer} from '@react-spring/parallax';
import { Link } from 'react-router-dom';
import blueprints from '../assets/images/blueprints.png';


const HomePage = () => {
    return ( 
        <Container fluid>
            <Row className='hero-image-container'>
                <img src={HeroImage} alt='main image'/>
                <div className="hero-text">
                    <h1>DESARROLLO DE <strong>EXPERIENCIAS</strong></h1>
                    <h2>HECHAS A LA MEDIDA PARA CADA UNO DE LOS CLIENTES</h2>
                </div>
            </Row>
            <Row className='py-md-4 home-gallery-container'>
                <Col md='6' className='grid-col grid-section-tall grid-text-container-tall'>
                    <img src={apartment} alt='apartment'/>
                    <h5 className='grid-text'>Acerca de</h5>
                </Col>
                <Col className='grid-col'>
                    <Col md='12' className='pb-md-2 grid-section grid-text-container'>
                        <Link to='services'>
                            <img src={table} alt='table'/>
                        </Link>
                        
                        <h5 className='grid-text'>Servicios</h5>
                    </Col>
                    <Col md='12' className='pt-md-2 grid-section grid-text-container'>
                        <img src={couch} alt='couch'/>
                        <h5 className='grid-text'>Galería</h5>
                    </Col>
                </Col>
            </Row>
            <Row className='info-container'>
                <Col className='info-wrapper'>
                    <div className='info-text-div'>
                        <h1>Resolvemos desafíos aprovechando la experiencia colectiva y el ingenio de las mejores y más brillantes mentes en desarrollo, diseño y construcción.</h1>
                        <Button>Reservar una Consulta</Button>
                    </div>
                    <img width='100%' src={blueprints} alt='blueprints'/>
                </Col>
            </Row>

        </Container>
     );
}
 
export default HomePage;