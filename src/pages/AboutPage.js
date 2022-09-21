import { Container, Row, Col } from "react-bootstrap";
import hero from '../assets/images/about/hero.png';
import building from '../assets/images/about/building.jpg';

const AboutPage = () => {
    return ( 
        <Container fluid>
            <Row>
                <Col>
                    <img width='100%' src={hero}/>
                    <h1 style={{position: 'absolute', top: '8%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center'}}className='text-white'>“NO HAY RETOS NI CONTRATIEMPOS, SINO OPORTUNIDADES DE DISEÑO.”</h1>
                </Col>
            </Row>
            <Row>
                <Col className='about-text'>
                    <h1>PROYECTO Y CONSTRUCCIÓN</h1>
                    <p className='fs-4'>El primer paso en el proceso creativo del despacho se refiere al acercamiento entre el cliente y nuestro equipo, con el propósito de conocer sus ideas y expectativas para conceptualizarlas y reconciliarlas con los alcances esperados. Se realiza una preselección de materiales, paletas cromáticas, sketching visual y se determina una ruta crítica que integre y gestione los trabajos necesarios a emprender dentro del tiempo adecuado para que los expertos en decoración, planeación y construcción creen, formulen y ejecuten el proyecto de inicio a fin. </p>
                </Col>
            </Row>
            <Row>
                <Col md='5'>
                    <img src={building} width='100%'/>
                </Col>
                <Col className='about-text-with-image'>

                    <h1>ANTEPROYECTO</h1>
                    <p className='fs-4'>Para el despacho es fundamental identificar el potencial de cada proyecto dentro de sí mismo y su contexto inmediato. Es a través de un análisis colaborativo entre cada una de las disciplinas que integran el equipo creativo como el proyecto se adaptará al espacio existente y a las necesidades específicas del cliente para así presentar todas y cada una de las posibilidades potenciales que definirán las funcionalidades del diseño final. </p>
                </Col>

            </Row>

            <Row>
            <Col className='about-text'>
                    <h1>PROYECTO BÁSICO Y  PROYECTO EJECUTIVO</h1>
                    <p>De acuerdo al seguimiento de la ruta crítica, en esta etapa se concretan licencias, permisos, detalles constructivos, materiales según la estética buscada y trabajos a realizar y a su vez, se prevén posibles eventualidades acordes a la ubicación y tipología del proyecto. Farah Arquitectura y Construcción sobresale por su acompañamiento meticuloso y supervisión rigurosa del proceso de obra y de la manufactura impoluta y prolija de cada elemento que dará equilibrio conjunto al proyecto. A partir de esta etapa, el estudio ofrece al cliente dos opciones a seguir: dar continuidad hasta la ejecución de obra y acabados o asumir una dirección facultativa que acompañe el proceso de obra con otro equipo de expertos que al cliente convenga. </p>
                </Col>
            </Row>

        </Container> 
    );
}
 
export default AboutPage;