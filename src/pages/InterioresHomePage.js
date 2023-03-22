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
             whoAreWeText='- 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro omnis illo expedita! Perspiciatis, aut autem tenetur distinctio itaque voluptate ratione fuga aspernatur qui quidem animi blanditiis eum, quod, temporibus ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro omnis illo expedita! Perspiciatis, aut autem tenetur distinctio itaque voluptate ratione fuga aspernatur qui quidem animi blanditiis eum, quod, temporibus ullam!'
             conocemosElProcesoText='- 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro omnis illo expedita! Perspiciatis, aut autem tenetur distinctio itaque voluptate ratione fuga aspernatur qui quidem animi blanditiis eum, quod, temporibus ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro omnis illo expedita!'
             experenciaSinIgualTexto='- 3 - Con Farah Arquitectura, no hay retos ni contratiempos, sino oportunidades de diseño. Cualquier reto contextual es una gran oportunidad creativa para el desarrollo integral y potencial de proyecto, desde su desarrollo conceptual hasta su ejecución.'
             EquipoMultidisciplinarioTexto='- 4 - Fara Arquitectura ofrece un desarrollo de experiencias hechas a la medida de cada cliente con la participación coordinada de su equipo interdisciplinario especializado. '
             contactanosHoyTexto='- 5 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis at aspernatur fugiat aliquam, impedit veritatis deserunt laboriosam repellendus quibusdam deleniti sed dicta ex nam, voluptate enim tenetur quasi. Aperiam?'
             />
             
        </>
     );

}
 
export default InterioresHomePage;