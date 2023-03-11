import mainInteriorsImage from '../assets/images/new/interior_home_main.jpg';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary';
import ButtonTertiary from '../components/ButtonTertiary';

const InterioresHomePage = () => {
    return ( 
        <div class="container flex flex-wrap mx-auto">
            <section className='flex w-screen'>
                <div className='relative flex-1 overflow-hidden' style={{height:'920px'}}>
                    <img className='absolute' style={{bottom:'-80px'}} src={mainInteriorsImage}/>
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

            <section>
                <img />
                <div className='w-3/4 bg-brown text-white'>
                    <h5>¿QUIÉNES SOMOS?</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum aliquam id dolore sequi numquam iure nemo illum laborum fuga accusamus voluptatum, tempore quo qui ea ducimus, atque ratione, animi adipisci.</p>
                    <ButtonTertiary text='APRENDER MÁS' color='white'/>
                </div>
            </section>


            






        </div>
     );
     //Replace with a component
}
 
export default InterioresHomePage;