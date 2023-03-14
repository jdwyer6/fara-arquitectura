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
             />
        </>
     );

}
 
export default InterioresHomePage;