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
        <Container fluid className='mt-5'>
            {/* <ParallaxSection /> */}
            <ImagePreviewModal handleClose={handleClose} show={show} handleShow={handleShow} img={currentImg}/>
                <Row>
                    <Col md='12'>
                        <h1 className='border-bottom w-100 text-center'>Nuestro trabajo</h1>
                    </Col>

                    {GALLERYTHUMBNAILS.map((thumbnail, idx) => (
                        
                        <Col key={idx} md='6' lg='4' className='image-wrapper'>
                            <img onClick={(e)=>{handleShow(e.target.src)}} src={thumbnail} alt='gallery_img'/>
                        </Col>
                    ))}


                    {/* // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={couch} alt='gallery_img'/>
                    // </Col>
                    // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={livingroom} alt='gallery_img'/>
                    // </Col>
                    // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={walkway} alt='gallery_img'/>
                    // </Col>
                    // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={balcony_3} alt='gallery_img'/>
                    // </Col>
                    // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={terrace} alt='gallery_img'/>
                    // </Col>
                    // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={balcony_2} alt='gallery_img'/>
                    // </Col>
                    // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={terrace_3} alt='gallery_img'/>
                    // </Col>
                    // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={windows} alt='gallery_img'/>
                    // </Col>
                    // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={patio} alt='gallery_img'/>
                    // </Col>
                    // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={stairs} alt='gallery_img_'/>
                    // </Col>
                    // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={apartment} alt='gallery_img' />
                    // </Col>
                    // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={mirror} alt='gallery_img' />
                    // </Col>
                    // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={table} alt='gallery_img' />
                    // </Col>
                    // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={hall} alt='gallery_img' />
                    // </Col>
                    // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={livingroom_2} alt='gallery_img' />
                    // </Col>
                    // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={livingroom_3} alt='gallery_img' />
                    // </Col>
                    // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={lawn} alt='gallery_img' />
                    // </Col>
                    // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={walkway_2} alt='gallery_img' />
                    // </Col>
                    // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={building} alt='gallery_img' />
                    // </Col>
                    // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={terrace_2} alt='gallery_img' />
                    // </Col>
                    // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={window_2} alt='gallery_img' />
                    // </Col>
                    // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={livingroom_4} alt='gallery_img' />
                    // </Col>
                    // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={terrace_4} alt='gallery_img' />
                    // </Col>
                    // <Col md='6' lg='4' className='image-wrapper'>
                    //     <img onClick={(e)=>{handleShow(e.target.src)}} src={kitchen} alt='gallery_img' />
                    // </Col> */}
                </Row>
        </Container>
     );
}

export default GalleryPage;