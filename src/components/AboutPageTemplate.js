import Card from '../components/Card';
import ButtonTertiary from '../components/ButtonTertiary';

const AboutPageTemplate = ({mainImage, icon1, icon2, icon3}) => {
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
                <Card icon={icon1} title='Lorem Ipsum' bg='bg-olive' description='Lorem ipsum dolor sit ametø consectetur adipisicing elit. Deleniti molestiae tempora corrupti necessitatibus.'/>
                <Card icon={icon2} title='Lorem Ipsum' bg='bg-sand' description='Lorem ipsum dolor sit ametø consectetur adipisicing elit. Deleniti molestiae tempora corrupti necessitatibus.'/>
                <Card icon={icon3} title='Lorem Ipsum' bg='bg-ivory' description='Lorem ipsum dolor sit ametø consectetur adipisicing elit. Deleniti molestiae tempora corrupti necessitatibus.'/>


            </div>

        </section>
    </div>
     );
}
 
export default AboutPageTemplate;