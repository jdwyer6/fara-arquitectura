import { Container, Row, Col } from 'react-bootstrap';
import { Parallax,  ParallaxLayer} from '@react-spring/parallax';
import parallax_foreground from '../assets/images/parallax_foreground.png';
import parallax_background from '../assets/images/parallax_background.png';
import parallax_birds from '../assets/images/parallax_birds.png';

const ServicesPage = () => {
    return ( 
        <Container style={{height: '100vh'}}>
                <Parallax pages={2} style={{top: '0', left: '0'}}>
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

                </Parallax>
        </Container>
     );
}
 
export default ServicesPage;