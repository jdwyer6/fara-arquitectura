import HomePageTemplate from '../components/HomePageTemplate';

import mainImage from '../assets/images/new/construction_home.jpg';
import secondaryImage from '../assets/images/new/construction_secondary.jpg';
import gallery1 from '../assets/images/new/construction_gallery_1.png';
import gallery2 from '../assets/images/new/construction_gallery_2.jpg';
import gallery3 from '../assets/images/new/construction_gallery_3.jpg';
import gallery4 from '../assets/images/new/construction_gallery_4.jpg';

const ConstruccionHomePage = () => {
    return ( 
        <>
            <HomePageTemplate
                primaryImage={mainImage}
                secondaryImage={secondaryImage}
                galleryImage1={gallery1}
                galleryImage2={gallery2}
                galleryImage3={gallery3}
                galleryImage4={gallery4}
                whoAreWeText={<><span>Marfa Arquitectura y Construcción es un despacho mexicano dedicado al diseño arquitectónico y construcción con sede en la Ciudad de México. Con diez años de experiencia, el despacho cuenta con un portafolio de más de 50 proyectos construidos en diversas ciudades dentro del área metropolitana y sus </span><span>cercaní</span><span style={{margin:'-6px'}}>as.</span></>}
                conocemosElProcesoText='FAC opera con un equipo interdisciplinario de profesionales expertos en el desarrollo integral de soluciones arquitectónicas, master planning y en la gestión y ejecución de proyectos de construcción estratégica a cualquier escala. De entre su extenso portafolio, la producción creativa del despacho abarca la vivienda residencial, hoteles, plazas comerciales, torres médicas y de oficinas, entre muchos otros proyectos de interiorismo y restauraciones espaciales. Para Marfa Arquitectura y Construcción, '
                experenciaSinIgualTexto='Con Marfa Arquitectura, no hay retos ni contratiempos, sino oportunidades de diseño. Cualquier reto contextual es una gran oportunidad creativa para el desarrollo integral y potencial de proyecto, desde su desarrollo conceptual hasta su ejecución.'
                EquipoMultidisciplinarioTexto='Fara Arquitectura ofrece un desarrollo de experiencias hechas a la medida de cada cliente con la participación coordinada de su equipo interdisciplinario especializado. '
                contactanosHoyTexto='Soluciones arquitectónicas integrales.'
                aprenderMasLink='/construccion-about'
             />
        </>
     );
     
}
 
export default ConstruccionHomePage;