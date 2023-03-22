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
            aboutTextMain='- 6 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis voluptatem assumenda error harum! Iusto repudiandae unde expedita eius iure debitis temporibus vero perferendis? Et vel exercitationem nobis! Eligendi, modi cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, possimus tempore ad facere nihil modi facilis similique expedita voluptas illum odit exercitationem incidunt totam? Accusantium nesciunt veritatis excepturi libero quasi.'
            servicesText='- 7 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sed, et corrupti alias reiciendis, fugit ex illum quaerat nostrum quibusdam quisquam omnis architecto facere? Error deleniti neque possimus necessitatibus. Facere?Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, natus veniam excepturi saepe ex vitae, nulla dicta sapiente cupiditate error dolorem iste provident, eaque libero nostrum quasi placeat suscipit quod!'
            service1='- 8 - Lorem ipsum dolor sit ametø consectetur adipisicing elit. Deleniti molestiae tempora corrupti necessitatibus.'
            service2='- 9 - Lorem ipsum dolor sit ametø consectetur adipisicing elit. Deleniti molestiae tempora corrupti necessitatibus.'
            service3='- 10 - Lorem ipsum dolor sit ametø consectetur adipisicing elit. Deleniti molestiae tempora corrupti necessitatibus.'
        />

     );
}
 
export default InterioresAboutPage;