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
                    <Col md='12' className='d-none d-md-inline' style={{margin: '12px 0'}}>
                        <div style={{position: 'relative', height: '60vh', width: '100%'}}><iframe allow="clipboard-write" sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox" allowFullScreen={false} style={{position: 'absolute', border: 'none', width:'100%', height: '100%', left: 0, right: 0, top: '50%', bottom: 0, transform: 'translateY(-50%)'}} src="https://e.issuu.com/embed.html?d=book_farah_2&hideIssuuLogo=true&u=faraharquitectura"></iframe></div>
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