import { Parallax,  ParallaxLayer} from '@react-spring/parallax';
import parallax_foreground from '../assets/images/parallax_foreground.png';
import parallax_background from '../assets/images/parallax_background.png';
import parallax_birds from '../assets/images/parallax_birds.png';
import parallax_trees from '../assets/images/parallax_trees.png';

const ParallaxSection = () => {
    return ( 
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
            <ParallaxLayer speed={.3}>
                <h1 style={{position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center'}}className='text-white'>“NO HAY RETOS NI CONTRATIEMPOS, SINO OPORTUNIDADES DE DISEÑO.”</h1>
            </ParallaxLayer>
            <ParallaxLayer speed={.9}>
                <img src={parallax_trees} width='100%'/>
            </ParallaxLayer>
        </Parallax> 
     );
}
 
export default ParallaxSection;