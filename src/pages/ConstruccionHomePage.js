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
                whoAreWeText='- 11 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque maxime voluptas minima nihil. Mollitia ut cupiditate alias minima, perspiciatis obcaecati eius? Voluptatibus, velit odio sed animi a ex magnam. Ducimus?'
                conocemosElProcesoText='- 12 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro omnis illo expedita! Perspiciatis, aut autem tenetur distinctio itaque voluptate ratione fuga aspernatur qui quidem animi blanditiis eum, quod, temporibus ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro omnis illo expedita!'
                experenciaSinIgualTexto='- 13 - Con Farah Arquitectura, no hay retos ni contratiempos, sino oportunidades de diseño. Cualquier reto contextual es una gran oportunidad creativa para el desarrollo integral y potencial de proyecto, desde su desarrollo conceptual hasta su ejecución.'
                EquipoMultidisciplinarioTexto='- 14 - Fara Arquitectura ofrece un desarrollo de experiencias hechas a la medida de cada cliente con la participación coordinada de su equipo interdisciplinario especializado. '
                contactanosHoyTexto='- 15 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis at aspernatur fugiat aliquam, impedit veritatis deserunt laboriosam repellendus quibusdam deleniti sed dicta ex nam, voluptate enim tenetur quasi. Aperiam?'
             />
        </>
     );
     
}
 
export default ConstruccionHomePage;