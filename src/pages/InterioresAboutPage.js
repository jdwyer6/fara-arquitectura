import mainImage from '../assets/images/new/interior_about_main.jpg';
import { RiBuilding2Line } from 'react-icons/ri';
import { FaDraftingCompass } from 'react-icons/fa';
import {MdDesignServices} from 'react-icons/md';
import AboutPageTemplate from '../components/AboutPageTemplate';

const InterioresAboutPage = () => {
    return ( 
        <AboutPageTemplate 
            mainImage={mainImage}
            icon1={<RiBuilding2Line size={200}/>}
            icon2={<FaDraftingCompass size={160}/>}
            icon3={<MdDesignServices size={200}/>} 
            aboutTextMain='Para el despacho es fundamental identificar el potencial de cada proyecto dentro de sí mismo y su contexto inmediato. Es a través de un análisis colaborativo entre cada una de las disciplinas que integran el equipo creativo como el proyecto se adaptará al espacio existente y a las necesidades específicas del cliente para así presentar todas y cada una de las posibilidades potenciales que definirán las funcionalidades del diseño final.'
            servicesText='Farah Arquitectura y Construcción ofrece un desarrollo de experiencias hechas a la medida para cada cliente y futuros usuarios por medio de una amplia variedad de servicios en soluciones arquitectónicas, arquictura de interiores y remodelación espacial, restauración de inmuebles, construcción y master planning. Con la participación coordinada de su equipo interdisciplinario especializado, el despacho lleva a cabo tanto proyectos propios, como proyectos para particulares y empresas.'
            title1='Diseño'
            title2 ='Remodelación y restauración'
            title3='Master Planning'
        />

     );
}
 
export default InterioresAboutPage;