import { Container, Row, Col } from 'react-bootstrap';
import ParallaxSection from '../components/ParallaxSection';

//Gallery images
import couch from '../assets/images/gallery/couch.jpg';
import balcony from '../assets/images/gallery/balcony.jpg';
import windows from '../assets/images/gallery/windows.jpg';
import stairs from '../assets/images/gallery/stairs.jpg';
import apartment from '../assets/images/gallery/apartment.jpg';
import mirror from '../assets/images/gallery/mirror.jpg';
import { useState } from 'react';
import ImagePreviewModal from '../components/ImagePreviewModal';

const GalleryPage = () => {

    const [currentImg, setCurrentImg] = useState();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setCurrentImg(e)
        setShow(true);
    }

    return ( 
        <Container fluid className='mt-5'>
            {/* <ParallaxSection /> */}
            <ImagePreviewModal handleClose={handleClose} show={show} handleShow={handleShow} img={currentImg}/>
                <Row>
                    <Col md='12'>
                        <h1 className='border-bottom w-100 text-center'>Nuestro trabajo</h1>
                    </Col>

                    <Col md='6' lg='4' className='image-wrapper'>
                        <img onClick={(e)=>{handleShow(e.target.src)}} src={couch} alt='gallery_img_1'/>
                    </Col>
                    <Col md='6' lg='4' className='image-wrapper'>
                        <img onClick={(e)=>{handleShow(e.target.src)}} src={balcony} alt='gallery_img_2'/>
                    </Col>
                    <Col md='6' lg='4' className='image-wrapper'>
                        <img onClick={(e)=>{handleShow(e.target.src)}} src={windows} alt='gallery_img_3'/>
                    </Col>
                    <Col md='6' lg='4' className='image-wrapper'>
                        <img onClick={(e)=>{handleShow(e.target.src)}} src={stairs} alt='gallery_img_3'/>
                    </Col>
                    <Col md='6' lg='4' className='image-wrapper'>
                        <img onClick={(e)=>{handleShow(e.target.src)}} src={apartment} alt='gallery_img_3' />
                    </Col>
                    <Col md='6' lg='4' className='image-wrapper'>
                        <img onClick={(e)=>{handleShow(e.target.src)}} src={mirror} alt='gallery_img_3' />
                    </Col>
                </Row>
        </Container>
     );
}

export default GalleryPage;