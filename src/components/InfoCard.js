import {Row, Col} from 'react-bootstrap';

const InfoCard = ({image, title, body, imagePlacement}) => {

    return ( 
        <Row className='info-card-row'>
            {imagePlacement === 'left' ? (
                <Col md='5' className='px-0 me-0 me-md-5 info-card-image-container'>
                    <img className='d-none d-md-inline' width='100%' src={image} alt='image' />
                </Col>
            ) : ('')}

            <Col className={imagePlacement === 'bottom' ? 'px-0 text-center info-card-text-container my-md-auto' : 'px-5 text-center info-card-text-container my-md-auto'}>
                <h1>{title}</h1>
                <p className=''>{body}</p>
                {imagePlacement === 'bottom' ? (
                    <img width='100%' src={image} alt='image' />
                ) : ('')}
            </Col>

            {imagePlacement === 'right' ? (
                <Col className='px-0 ms-0 ms-md-5 info-card-image-container' md='5'>
                    <img width='100%' src={image} alt='image' />
                </Col>
            ) : ('')} 
        </Row>
     );
}
 
export default InfoCard;