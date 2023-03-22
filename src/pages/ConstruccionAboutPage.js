import AboutPageTemplate from "../components/AboutPageTemplate";
import mainImage from "../assets/images/new/construction_about_main.jpg";
import {MdConstruction} from 'react-icons/md';
import {GiBulldozer} from 'react-icons/gi';
import {TbBuildingSkyscraper} from 'react-icons/tb'

const ConstruccionAboutPage = () => {
    return ( 
        <>
            <AboutPageTemplate 
            mainImage={mainImage}
            icon1={<MdConstruction size={200}/>}
            icon2={<GiBulldozer size={160}/>}
            icon3={<TbBuildingSkyscraper size={200}/>} 
            aboutTextMain='- 16 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis voluptatem assumenda error harum! Iusto repudiandae unde expedita eius iure debitis temporibus vero perferendis? Et vel exercitationem nobis! Eligendi, modi cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, possimus tempore ad facere nihil modi facilis similique expedita voluptas illum odit exercitationem incidunt totam? Accusantium nesciunt veritatis excepturi libero quasi.'
            servicesText='- 17 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sed, et corrupti alias reiciendis, fugit ex illum quaerat nostrum quibusdam quisquam omnis architecto facere? Error deleniti neque possimus necessitatibus. Facere?Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, natus veniam excepturi saepe ex vitae, nulla dicta sapiente cupiditate error dolorem iste provident, eaque libero nostrum quasi placeat suscipit quod!'
            service1='- 18 - Lorem ipsum dolor sit ametø consectetur adipisicing elit. Deleniti molestiae tempora corrupti necessitatibus.'
            service2='- 19 - Lorem ipsum dolor sit ametø consectetur adipisicing elit. Deleniti molestiae tempora corrupti necessitatibus.'
            service3='- 20 - Lorem ipsum dolor sit ametø consectetur adipisicing elit. Deleniti molestiae tempora corrupti necessitatibus.'
        />
        </>
     );
}
 
export default ConstruccionAboutPage;