import { Container, Row, Col } from "react-bootstrap";
import hero from '../assets/images/services/hero.png';
import drawing from '../assets/images/services/drawing.jpg';
import InfoCard from "../components/InfoCard";
import concrete from '../assets/images/services/concrete.jpg';
import demo from '../assets/images/services/demo.jpg';

const ServicesPage = () => {
    return ( 
        <Container fluid>
            <Row>
                <Col className='services-hero-wrapper'>
                    <img src={hero} alt='services-img' />
                </Col>
            </Row>

            <InfoCard
                title='ARQUITECTURA'
                body='Cada proyecto es único y merece un análisis minucioso para integrar las necesidades del cliente, sus expectativas y su presupuesto. Farah Arquitectura y Construcción busca expandir el potencial de la idea inicial hasta llevarla a la solución de diseño ideal, siempre siguiendo un eje central: calidad y excelencia en el más mínimo detalle. Para ello es fundamental crear una relación cercana y sólida entre el equipo creativo y el cliente, comunicando paso a paso estrategias y avances en el proyecto. De esta forma, el despacho ofrece su acompañamiento creativo y experiencia en el campo para proyectos de interiorismo y arquitectura de interiores, renovaciones espaciales, restauraciones inmuebles y proyectos residenciales y comerciales a cualquier escala.'
                image={drawing}
                imagePlacement='bottom'
            />

            <InfoCard 
                title='CONSTRUCCIÓN'
                body='Farah Arquitectura y Construcción se distingue por una manufactura impecable durante cada etapa del progreso de obra y su ejecución dentro del tiempo programado. Con ojo crítico, el despacho es responsable de supervisar a fondo cada proceso constructivo de inicio a fin, de la mano de un equipo experto en técnica y construcción sin importar la escala. De acuerdo al contexto inmediato de cada proyecto, la estrecha relación con el cliente y las constantes conversaciones entre este y nuestro equipo creativo son de gran importancia para hacer de cada posible eventualidad y contratiempo, una oportunidad de diseño.'
                image={concrete}
                imagePlacement='left'
            />

            <InfoCard 
                title='GESTORIAS, DEMOLICIONES Y EXCAVACIONES'
                body='El despacho ofrece un servicio integral de construcción el cual, inicia con la gestoría directa y ordenada de cada uno de los permisos oficiales que atañen al proceso constructivo y a la demolición y excavación consecutivas. Nuestro equipo de gestores capacitados se especializa en resolver de manera pronta y expedita cualquier contingencia o eventualidad. En Farah Arquitectura y Construcción, cada proyecto debe comenzar sobre un lienzo en blanco, desde su concepción hasta el inicio de su construcción. Por ello, nuestro equipo experto de demolición y excavación se ocupará de preparar el terreno de la mano de nuestros gestores, para asegurarse de plantar cimientos fuertes desde el inicio.'
                image={demo}
                imagePlacement='right'
            />

        

        </Container> 
    );
}
 
export default ServicesPage;