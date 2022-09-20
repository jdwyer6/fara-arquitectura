import { Container, Row, Col } from 'react-bootstrap'
import HeroImage from '../assets/images/hero-image.jpg';
import apartment from '../assets/images/apartment.png';
import table from '../assets/images/table.png';
import couch from '../assets/images/couch.png';

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
                <Col md='6' className='grid-col grid-text-container-tall'>
                    <img src={apartment} alt='apartment'/>
                    <h5 className='grid-text'>Text</h5>
                </Col>
                <Col className='grid-col'>
                    <Col md='12' className='pb-md-2 grid-section grid-text-container'>
                        <img src={table} alt='table'/>
                        <h5 className='grid-text'>Text</h5>
                    </Col>
                    <Col md='12' className='pt-md-2 grid-section grid-text-container'>
                        <img src={couch} alt='couch'/>
                        <h5 className='grid-text'>Text</h5>
                    </Col>
                </Col>
            </Row>
        </Container>
     );
}
 
export default HomePage;