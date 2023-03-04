import mainInteriorsImage from '../assets/images/new/interior_home_main.jpg';

const InterioresHomePage = () => {
    return ( 
        <div class="container flex flex-wrap mx-auto">
            <div className='flex w-screen border border-red-400'>
                <div className='relative overflow-hidden flex-1 border border-blue-600' style={{height:'800px'}}>
                    <img className='absolute' style={{bottom:'-80px'}} src={mainInteriorsImage}/>
                </div>
                <div className='flex-grow-2 text-center flex flex-col justify-center'>
                    <h1 className="text-brand-md">FARAH</h1>
                    <h5 className="text-2xl">DISEÑO DE INTERIORES</h5>
                </div>
            </div>
        </div>
     );
     //Replace with a component
}
 
export default InterioresHomePage;