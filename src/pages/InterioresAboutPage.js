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
        />

     );
}
 
export default InterioresAboutPage;