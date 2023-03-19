import ButtonPrimary from '../components/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary';
import ButtonTertiary from '../components/ButtonTertiary';

const HomePageTemplate = ({primaryImage, secondaryImage, galleryImage1, galleryImage2, galleryImage3, galleryImage4, whoAreWeText}) => {
    return ( 
        <div className="flex flex-wrap px-2 md:px-16 xl:px-32">
            <section className='flex w-screen xl:h-screen md:mb-32 mb-8'>
                <div className='relative flex-1 overflow-hidden hidden xl:flex h-full ' >
                    <img className='absolute'  src={primaryImage}/>
                </div>
                <div className='flex-1 text-center flex flex-col justify-start xl:justify-center'>
                    <h1 className="md:text-brand-md leading-none text-xxl">FARAH</h1>
                    <h5 className="text-2xl mb-8">DISEÑO DE INTERIORES</h5>
                    <img src={secondaryImage} className='w-full h-80 sm:h-full object-cover z-10 mb-8 md:hidden rounded-xl'/>
                    <div className='flex flex-wrap xl:flex-nowrap'>
                        {/* <ButtonPrimary text='RESERVA UNA CONSULTA' to='#first-section'/> */}
                        <ButtonSecondary text='RESERVA UNA CONSULTA'/>
                    </div>
                </div>
            </section>

            <div id='first-section'></div>
            <section className='lg:hidden'>
                <div className='bg-brown text-white px-4 py-8 rounded-xl'>
                <p className='mb-8'>¿QUIÉNES SOMOS?</p>
                <p>{whoAreWeText}</p> 
                </div>
            </section>
            <section className='hidden lg:block relative w-full' style={{height: '920px'}}>
                <div className='flex h-4/5 items-center overflow-hidden'>
                    <img src={secondaryImage} className='w-1/2 object-fill z-10 hidden md:block'/>
                    <div className='z-10 text-white p-16'>
                        <div className='mb-16'>
                            <p className='font-bold'>¿QUIÉNES SOMOS?</p>
                            <p>{whoAreWeText}</p>
                        </div>
                        <div>
                            <ButtonTertiary text='APRENDER MÁS' color='white'/>
                        </div>
                       
                    </div>
                </div>


                <div className='bg-brown text-white absolute right-0 top-20 w-2/3 h-4/5'></div>
            </section>

            <section className='flex flex-wrap lg:flex-nowrap mb-8 md:mb-32 w-full'>
                <div className='py-16 lg:pr-16 md:h-screen lg:h-full flex flex-col md:flex-1 justify-start md:justify-between text-left'>
                    <h1 className='hidden md:block'>CONOCEMOS EL PROCESO</h1>
                    <h1 className='text-2xl md:hidden mb-8'>CONOCEMOS EL PROCESO</h1>
                    <p className='mb-8 md:mb-0'>El estudio planifica y coordina los trabajos de construcción directamente para garantizar los más altos estándares de proyecto, cuidando cada aspecto arquitectónico: desde los estudios y evaluaciones preliminares hasta la planificación ejecutiva y las tecnologías de construcción, hasta el mobiliario de sastrería.</p>
                    <div>
                        <ButtonTertiary text='NUESTROS PROYECTOS'/>
                    </div>
                    
                </div>
                <div className='md:py-16 lg:pl-16 w-full flex-1'>
                    <div className='mb-16 text-left'>
                        <h2 className='mb-8 hidden md:block'>EXPERIENCIA SIN IGUAL</h2>
                        <h2 className='mb-8 text-2xl md:hidden'>EXPERIENCIA SIN IGUAL</h2>
                        <p>Con Farah Arquitectura, no hay retos ni contratiempos, sino oportunidades de diseño. Cualquier reto contextual es una gran oportunidad creativa para el desarrollo integral y potencial de proyecto, desde su desarrollo conceptual hasta su ejecución.</p>
                    </div>
                    <div className='text-left'>
                        <h2 className='mb-8 hidden md:block'>EQUIPO MULTIDISCIPLINARIO</h2>
                        <h2 className='mb-8 text-2xl md:hidden'>EQUIPO MULTIDISCIPLINARIO</h2>
                        <p>Fara Arquitectura ofrece un desarrollo de experiencias hechas a la medida de cada cliente con la participación coordinada de su equipo interdisciplinario especializado. </p>
                    </div>

                </div>
            </section>

            <section className='flex flex-wrap mb-8 md:mb-32 w-full'>

                <img src={galleryImage1} className='w-full md:w-1/3 md:pr-8 pb-8 object-cover'/>
                <img src={galleryImage2} className='w-full md:w-2/3 md:pl-8 pb-8 object-cover'/>
                <img src={galleryImage3} className='w-full md:w-2/3 md:pr-8 pb-8 object-cover'/>
                <img src={galleryImage4} className='w-full md:w-1/3 md:pl-8 pb-8 object-cover'/>
            </section>


            <section className='flex justify-center pb-16'>
                <div className='text-start md:text-center w-full md:w-3/4'>
                    <strong>CONTÁCTANOS HOY</strong>
                    <p className='mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis at aspernatur fugiat aliquam, impedit veritatis deserunt laboriosam repellendus quibusdam deleniti sed dicta ex nam, voluptate enim tenetur quasi. Aperiam?</p>
                    <ButtonSecondary text='CONTACTO' link='/contact'/>
                </div>

            </section>






        </div>
     );
}
 
export default HomePageTemplate;