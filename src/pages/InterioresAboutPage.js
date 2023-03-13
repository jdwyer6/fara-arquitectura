import mainImage from '../assets/images/new/interior_about_main.jpg';
import ButtonTertiary from '../components/ButtonTertiary';
import { RiBuilding2Line } from 'react-icons/ri';
import { FaDraftingCompass } from 'react-icons/fa';
import {MdDesignServices} from 'react-icons/md';
import Card from '../components/Card';

const InterioresAboutPage = () => {
    return ( 
        <div className="container flex flex-wrap mx-auto">
            <section className='flex w-screen mb-32'>
                <div className='relative flex-1 overflow-hidden mr-8' style={{height:'920px'}}>
                    <img className='absolute' style={{bottom:'-80px'}} src={mainImage}/>
                </div>
                <div className='flex-1 text-start flex flex-col justify-center ml-8'>
                    <h1>ACERCA DE</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis voluptatem assumenda error harum! Iusto repudiandae unde expedita eius iure debitis temporibus vero perferendis? Et vel exercitationem nobis! Eligendi, modi cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, possimus tempore ad facere nihil modi facilis similique expedita voluptas illum odit exercitationem incidunt totam? Accusantium nesciunt veritatis excepturi libero quasi.</p>
                    
                </div>
            </section>
            <section>
                <div className='text-center mb-16'>
                    <h2>Nuestros Servicios</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sed, et corrupti alias reiciendis, fugit ex illum quaerat nostrum quibusdam quisquam omnis architecto facere? Error deleniti neque possimus necessitatibus. Facere?Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, natus veniam excepturi saepe ex vitae, nulla dicta sapiente cupiditate error dolorem iste provident, eaque libero nostrum quasi placeat suscipit quod!</p>
                </div>
                <div className='flex justify-between'>
                    <Card icon={<RiBuilding2Line size={200}/>} title='Lorem Ipsum' bg='bg-olive' description='Lorem ipsum dolor sit ametø consectetur adipisicing elit. Deleniti molestiae tempora corrupti necessitatibus.'/>
                    <Card icon={<FaDraftingCompass size={160}/>} title='Lorem Ipsum' bg='bg-sand' description='Lorem ipsum dolor sit ametø consectetur adipisicing elit. Deleniti molestiae tempora corrupti necessitatibus.'/>
                    <Card icon={<MdDesignServices size={200}/>} title='Lorem Ipsum' bg='bg-ivory' description='Lorem ipsum dolor sit ametø consectetur adipisicing elit. Deleniti molestiae tempora corrupti necessitatibus.'/>


                </div>

            </section>
        </div>
     );
}
 
export default InterioresAboutPage;