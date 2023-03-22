import Card from '../components/Card';
import ButtonTertiary from '../components/ButtonTertiary';

const AboutPageTemplate = ({mainImage, 
    icon1, 
    icon2, 
    icon3,
    aboutTextMain,
    servicesText,
    service1,
    service2,
    service3
}) => {
    return ( 
        <div className="flex flex-wrap px-2 md:px-16 xl:px-32">
            <section className='flex w-screen mb-8 md:mb-32'>
                <div className='relative flex-1 overflow-hidden mr-8 h-screen hidden lg:block'>
                    <img className='absolute' style={{top:'0'}} src={mainImage}/>
                </div>
                <div className='flex-1 text-start flex flex-col justify-start xl:justify-center lg:ml-8'>
                    <h1 className='hidden md:block'>ACERCA DE</h1>
                    <h1 className='text-5xl md:hidden py-8'>ACERCA DE</h1>
                    <p>{aboutTextMain}</p>
                    
                </div>
            </section>
            <section className='w-full'>
                <div className='mb-16'>
                    <h2>Nuestros Servicios</h2>
                    <p>{servicesText}</p>
                </div>
                <div className='flex flex-wrap justify-between'>
                    <Card icon={icon1} title='Lorem Ipsum' bg='bg-olive' description={service1}/>
                    <Card icon={icon2} title='Lorem Ipsum' bg='bg-sand' description={service2}/>
                    <Card icon={icon3} title='Lorem Ipsum' bg='bg-ivory' description={service3}/>


                </div>

            </section>
        </div>
     );
}
 
export default AboutPageTemplate;