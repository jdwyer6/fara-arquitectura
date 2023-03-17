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
        />
        </>
     );
}
 
export default ConstruccionAboutPage;