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
            aboutTextMain={<><span>'Cada proyecto es único y merece un análisis minucioso para integrar las necesidades del cliente, sus expectativas y su presupuesto. Farah Arquitectura y Construcción busca expandir el potencial de la idea inicial hasta llevarla a la solución de diseño ideal, siempre siguiendo un eje central: calidad y excelencia en el más mí</span><span style={{margin:'-6px'}}>nimo detalle. Para ello es fundamental crear una relación cercana y sólida entre el equipo creativo y el cliente, comunicando paso a paso estrategias y avances en el proyecto. De esta forma, el despacho ofrece su acompañamiento creativo y experiencia en el campo para proyectos de interiorismo y arquitectura de interiores, renovaciones espaciales, restauraciones inmuebles y proyectos residenciales y comerciales a cualquier escala.'</span></>}
            servicesText='Farah Arquitectura y Construcción ofrece un desarrollo de experiencias hechas a la medida para cada cliente y futuros usuarios por medio de una amplia variedad de servicios en soluciones arquitectónicas, arquictura de interiores y remodelación espacial, restauración de inmuebles, construcción y master planning. Con la participación coordinada de su equipo interdisciplinario especializado, el despacho lleva a cabo tanto proyectos propios, como proyectos para particulares y empresas.'
            title1='Construcción Integral'
            title2={<><span>Gestorí</span><span style={{margin:'-6px'}}>a</span></>}
            title3='Master Planning'
        />
        </>
     );
}
 
export default ConstruccionAboutPage;