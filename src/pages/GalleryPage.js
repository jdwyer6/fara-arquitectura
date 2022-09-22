import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import ImagePreviewModal from '../components/ImagePreviewModal';
import {GALLERYTHUMBNAILS} from '../shared/GALLERY_THUMBNAILS';



const GalleryPage = () => {

    const [currentImg, setCurrentImg] = useState();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setCurrentImg(e)
        setShow(true);
    }

    return ( 
        <Container fluid>
            {/* <ParallaxSection /> */}
            <ImagePreviewModal handleClose={handleClose} show={show} handleShow={handleShow} img={currentImg}/>
                <Row>
                    <Col md='12'>
                        <h1 className='border-bottom border-top w-100 text-center'>Nuestro trabajo</h1>
                    </Col>

                    {GALLERYTHUMBNAILS.map((thumbnail, idx) => (
                        
                        <Col key={idx} md='6' lg='4' className='image-wrapper'>
                            <img onClick={(e)=>{handleShow(e.target.src)}} src={thumbnail} alt='gallery_img'/>
                        </Col>
                    ))}

                </Row>
        </Container>
     );
}

export default GalleryPage;