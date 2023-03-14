import ButtonPrimary from '../components/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary';
import ButtonTertiary from '../components/ButtonTertiary';

const HomePageTemplate = ({primaryImage, secondaryImage, galleryImage1, galleryImage2, galleryImage3, galleryImage4}) => {
    return ( 
        <div className="container flex flex-wrap m-auto">
            <section className='flex w-screen mb-32'>
                <div className='relative flex-1 overflow-hidden' style={{height:'920px'}}>
                    <img className='absolute' style={{bottom:'-80px'}} src={primaryImage}/>
                </div>
                <div className='flex-1 text-center flex flex-col justify-center'>
                    <h1 className="text-brand-md leading-none">FARAH</h1>
                    <h5 className="text-2xl mb-8">DISEÑO DE INTERIORES</h5>
                    <div className='flex'>
                        <ButtonPrimary text='EMPIEZA AQUÍ'/>
                        <ButtonSecondary text='RESERVA UNA CONSULTA'/>
                    </div>
                    
                </div>
            </section>

            <section className='relative w-full' style={{height: '920px'}}>
                <div className='flex h-4/5 items-center overflow-hidden'>
                    <img src={secondaryImage} className='w-1/2 object-fill z-10'/>
                    <div className='z-10 text-white p-16'>
                        <div className='mb-16'>
                            <p className='font-bold'>¿QUIÉNES SOMOS?</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum aliquam id dolore sequi numquam iure nemo illum laborum fuga accusamus voluptatum, tempore quo qui ea ducimus, atque ratione, animi adipisci. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum aliquam id dolore sequi numquam iure nemo illum laborum fuga accusamus voluptatum, tempore quo qui ea ducimus, atque ratione, animi adipisci.</p>
                        </div>

                        <ButtonTertiary text='APRENDER MÁS' color='white'/>
                    </div>
                </div>


                <div className='bg-brown text-white absolute right-0 top-20 w-2/3 h-4/5'></div>
            </section>

            <section className='flex mb-32'>
                <div className='py-16 pr-16 h-full flex flex-col justify-between'>
                    <h1>CONOCEMOS EL PROCESO</h1>
                    <p>El estudio planifica y coordina los trabajos de construcción directamente para garantizar los más altos estándares de proyecto, cuidando cada aspecto arquitectónico: desde los estudios y evaluaciones preliminares hasta la planificación ejecutiva y las tecnologías de construcción, hasta el mobiliario de sastrería.</p>
                    <ButtonTertiary text='NUESTROS PROYECTOS'/>
                </div>
                <div className='py-16 pl-16'>
                    <div className='mb-16'>
                        <h2 className='mb-8'>EXPERIENCIA SIN IGUAL</h2>
                        <p>Con Farah Arquitectura, no hay retos ni contratiempos, sino oportunidades de diseño. Cualquier reto contextual es una gran oportunidad creativa para el desarrollo integral y potencial de proyecto, desde su desarrollo conceptual hasta su ejecución.</p>
                    </div>
                    <div>
                        <h2 className='mb-8'>EQUIPO MULTIDISCIPLINARIO</h2>
                        <p>Fara Arquitectura ofrece un desarrollo de experiencias hechas a la medida de cada cliente con la participación coordinada de su equipo interdisciplinario especializado. </p>
                    </div>

                </div>
            </section>

            <section className='flex flex-wrap mb-32'>

                <img src={galleryImage1} className='w-1/3 pr-8 py-8 object-cover'/>
                <img src={galleryImage2} className='w-2/3 pl-8 py-8 object-cover'/>
                <img src={galleryImage3} className='w-2/3 pr-8 py-8 object-cover'/>
                <img src={galleryImage4} className='w-1/3 pl-8 py-8 object-cover'/>
            </section>


            <section className='flex justify-center'>
                <div className='text-center w-3/4'>
                    <strong>CONTÁCTANOS HOY</strong>
                    <p className='mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis at aspernatur fugiat aliquam, impedit veritatis deserunt laboriosam repellendus quibusdam deleniti sed dicta ex nam, voluptate enim tenetur quasi. Aperiam?</p>
                    <ButtonSecondary text='CONTACTO' />
                </div>

            </section>






        </div>
     );
}
 
export default HomePageTemplate;