import mainInteriorsImage from '../assets/images/new/interior_home_main.jpg';
import aboutUsInteriorsImage from '../assets/images/new/interior_home_aboutUs.jpg';
import galleryImage1 from '../assets/images/new/interior_home_gallery.jpg';
import galleryImage2 from '../assets/images/new/interior_home_gallery_2.jpg';
import galleryImage3 from '../assets/images/new/interior_home_gallery_3.jpg';
import galleryImage4 from '../assets/images/new/interior_home_gallery_4.jpg';
import HomePageTemplate from '../components/HomePageTemplate';

const InterioresHomePage = () => {
    return ( 
        <>
            <HomePageTemplate
             primaryImage={mainInteriorsImage}
             secondaryImage={aboutUsInteriorsImage}
             galleryImage1={galleryImage1}
             galleryImage2={galleryImage2}
             galleryImage3={galleryImage3}
             galleryImage4={galleryImage4}
             whoAreWeText={<><span>Farah Arquitectura y Construcción es un despacho mexicano dedicado al diseño arquitectónico y construcción con sede en la Ciudad de México. Con diez años de experiencia, el despacho cuenta con un portafolio de más de 50 proyectos construidos en diversas ciudades dentro del área metropolitana y sus </span><span>cercaní</span><span style={{margin:'-6px'}}>as.</span></>}
             conocemosElProcesoText={<><span>El primer paso en el proceso creativo del despacho se refiere al acercamiento entre el cliente y nuestro equipo, con el propósito de conocer sus ideas y expectativas para conceptualizarlas y reconciliarlas con los alcances esperados. Se realiza una preselección de materiales, paletas cromáticas, sketching visual y se determina una ruta crí</span><span style={{margin:'-4px'}}>tica que integre y gestione los trabajos necesarios a emprender dentro del tiempo adecuado para que los expertos en decoración, planeación y construcción creen, formulen y ejecuten el proyecto de inicio a fin.</span></>}
             experenciaSinIgualTexto='Con Farah Arquitectura, no hay retos ni contratiempos, sino oportunidades de diseño. Cualquier reto contextual es una gran oportunidad creativa para el desarrollo integral y potencial de proyecto, desde su desarrollo conceptual hasta su ejecución.'
             EquipoMultidisciplinarioTexto='Fara Arquitectura ofrece un desarrollo de experiencias hechas a la medida de cada cliente con la participación coordinada de su equipo interdisciplinario especializado. '
             contactanosHoyTexto='Soluciones arquitectónicas integrales.'
             />
             
        </>
     );

}
 
export default InterioresHomePage;