import { Container, Row, Col } from 'react-bootstrap';
// import { Parallax,  ParallaxLayer} from '@react-spring/parallax';
// import parallax_foreground from '../assets/images/parallax_foreground.png';
// import parallax_background from '../assets/images/parallax_background.png';
// import parallax_birds from '../assets/images/parallax_birds.png';
// import parallax_trees from '../assets/images/parallax_trees.png';

//Gallery images
import couch from '../assets/images/gallery/couch.jpg';
import balcony from '../assets/images/gallery/balcony.jpg';
import windows from '../assets/images/gallery/windows.jpg';
import stairs from '../assets/images/gallery/stairs.jpg';
import apartment from '../assets/images/gallery/apartment.jpg';
import mirror from '../assets/images/gallery/mirror.jpg';

const GalleryPage = () => {
    return ( 
        <Container fluid style={{height: '100vh'}}>
                {/* <Parallax pages={2} style={{top: '0', left: '0'}}>
                    <ParallaxLayer 
                        speed={0}
                    >
                        <img src={parallax_background} width='100%'/>
                    </ParallaxLayer>
                    <ParallaxLayer speed={.2}>
                    <img src={parallax_birds} width='100%'/>
                    </ParallaxLayer>
                    <ParallaxLayer 
                        speed={.4}
                    >
                        <img src={parallax_foreground} width='100%'/>
                    </ParallaxLayer>
                    <ParallaxLayer speed={.3}>
                        <h1 style={{position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center'}}className='text-white'>“NO HAY RETOS NI CONTRATIEMPOS, SINO OPORTUNIDADES DE DISEÑO.”</h1>
                    </ParallaxLayer>
                    <ParallaxLayer speed={.9}>
                        <img src={parallax_trees} width='100%'/>
                    </ParallaxLayer>
                </Parallax> */}
                <Row>
                    <Col md='12'>
                        <h1 className='border-bottom w-100 text-center'>Nuestro trabajo</h1>
                    </Col>
                    <Col md='6' lg='4' className='gallery-wrapper'>
                        <img width='100%' src={couch} alt='gallery_img_1' />
                    </Col>
                    <Col md='6' lg='4' className='gallery-wrapper'>
                        <img width='100%' src={balcony} alt='gallery_img_2' />
                    </Col>
                    <Col md='6' lg='4' className='gallery-wrapper'>
                        <img width='100%' src={windows} alt='gallery_img_3' />
                    </Col>
                    <Col md='6' lg='4' className='gallery-wrapper'>
                        <img width='100%' src={stairs} alt='gallery_img_3' />
                    </Col>
                    <Col md='6' lg='4' className='gallery-wrapper'>
                        <img width='100%' src={apartment} alt='gallery_img_3' />
                    </Col>
                    <Col md='6' lg='4' className='gallery-wrapper'>
                        <img width='100%' src={mirror} alt='gallery_img_3' />
                    </Col>

                </Row>
        </Container>
     );
}

export default GalleryPage;