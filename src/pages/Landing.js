import landingImage from '../assets/images/new/landing.jpg';
import landingImageMobile from '../assets/images/new/landing_mobile.jpg';
import { Link } from "react-router-dom";
import logo from '../assets/images/new/logo_no_text.png';
import ButtonPrimary from '../components/ButtonPrimary';

const LandingPage = () => {
    return ( 
        <div className='relative h-full w-full'> 
            <div className='relative hidden md:block h-screen w-full'>
                <img src={landingImage} className="absolute top-0 object-bottom"/>
                <div className='absolute h-screen w-full bg-gradient-to-b from-gray-800 to-transparent'></div>
            </div>

            <div className='relative block md:hidden border h-screen'>
                <img src={landingImageMobile} className="absolute top-0 h-full object-cover"/>
                <div className='absolute h-screen w-full bg-gradient-to-b from-gray-800 to-transparent'></div>
            </div>

            <nav class="bg-transparent px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 absolute z-10 top-0 w-full">
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="https://flowbite.com/" class="flex items-center">
                        <img src={logo} width="80px" height="auto"  alt="Flowbite Logo" />
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:hover:text-ivory" aria-current="page">DISEÑO DE INTERIORISMO</a>
                        </li>
                        <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-ivory md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ARQUITECTURA Y CONSTRUCCIÓN</a>
                        </li>
                        <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-ivory md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTACTO</a>
                        </li>

                    </ul>
                    </div>
                </div>
            </nav>

            <div className='absolute z-10 top-52 w-full flex items-center flex-col'>
                <h1 className="text-white text-8xl md:text-brand font-light text-center mb-40 md:mb-24">FARAH</h1>
                <div className='px-4'>
                    <ButtonPrimary btnText='DISEÑO DE INTERIORES'/>
                    <ButtonPrimary btnText='ARQUITECTURA Y CONSTRUCCIÓN'/>
                </div>
            </div>

        </div> 
    );
}
 
export default LandingPage;