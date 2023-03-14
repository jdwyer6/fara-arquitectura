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
             />
        </>
     );
}
 
export default ConstruccionHomePage;