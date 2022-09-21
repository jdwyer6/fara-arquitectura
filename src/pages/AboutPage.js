import { Container, Row, Col } from "react-bootstrap";
import hero from '../assets/images/about/hero.png';

const AboutPage = () => {
    return ( 
        <Container fluid>
            <Row>
                <Col>
                    <img width='100%' src={hero}/>
                    <h1 style={{position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center'}}className='text-white'>“NO HAY RETOS NI CONTRATIEMPOS, SINO OPORTUNIDADES DE DISEÑO.”</h1>
                </Col>
            </Row>
            <Row>
                <Col className='about-text-1'>
                    <h1>PROYECTO Y CONSTRUCCIÓN</h1>
                    <p className='fs-4'>El primer paso en el proceso creativo del despacho se refiere al acercamiento entre el cliente y nuestro equipo, con el propósito de conocer sus ideas y expectativas para conceptualizarlas y reconciliarlas con los alcances esperados. Se realiza una preselección de materiales, paletas cromáticas, sketching visual y se determina una ruta crítica que integre y gestione los trabajos necesarios a emprender dentro del tiempo adecuado para que los expertos en decoración, planeación y construcción creen, formulen y ejecuten el proyecto de inicio a fin. </p>
                </Col>
            </Row>
            <Row>
                <Col className='about-text-2'>
                    <h1>ANTEPROYECTO</h1>
                    <p>Para el despacho es fundamental identificar el potencial de cada proyecto dentro de sí mismo y su contexto inmediato. Es a través de un análisis colaborativo entre cada una de las disciplinas que integran el equipo creativo como el proyecto se adaptará al espacio existente y a las necesidades específicas del cliente para así presentar todas y cada una de las posibilidades potenciales que definirán las funcionalidades del diseño final. </p>
                </Col>
            </Row>
        </Container> 
    );
}
 
export default AboutPage;