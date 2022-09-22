import {Row, Col} from 'react-bootstrap';

const InfoCard = ({image, title, body, imagePlacement}) => {

    return ( 
        <Row className='info-card-row'>
            {imagePlacement === 'left' ? (
                <Col md='5' className='px-0'>
                    <img width='100%' src={image} alt='image' />
                </Col>
            ) : ('')}

            <Col className={imagePlacement === 'bottom' ? 'px-0 text-center' : 'px-5 text-center'}>
                <h1>{title}</h1>
                <p className='fs-4 pb-4'>{body}</p>
                {imagePlacement === 'bottom' ? (
                    <img width='100%' src={image} alt='image' />
                ) : ('')}
            </Col>

            {imagePlacement === 'right' ? (
                <Col className='px-0' md='5'>
                    <img width='100%' src={image} alt='image' />
                </Col>
            ) : ('')} 
        </Row>
     );
}
 
export default InfoCard;