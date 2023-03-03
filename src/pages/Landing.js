import landingImage from '../assets/images/new/landing.jpg';
import { Link } from "react-router-dom";
import logo from '../assets/images/new/logo_no_text.png';

const LandingPage = () => {
    return ( 
        <div className='relative h-screen'> 
            <div className='relative h-screen w-screen'>
                <img src={landingImage} className="absolute top-0 object-bottom"/>
                <div className='absolute h-screen w-screen bg-gradient-to-b from-gray-600 to-transparent'></div>
            </div>

            <nav class="bg-transparent px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 absolute z-10 top-0">
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="https://flowbite.com/" class="flex items-center">
                        <img src={logo} class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">DISEÑO DE INTERIORISMO</a>
                        </li>
                        <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ARQUITECTURA Y CONSTRUCCIÓN</a>
                        </li>
                        <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTACTO</a>
                        </li>

                    </ul>
                    </div>
                </div>
            </nav>


            <p className="text-green-600">Landing page text</p>
        </div> 
    );
}
 
export default LandingPage;