import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/new/logo_no_text.png';


const Navbar = ({section}) => {
    const [navOpen, setNavOpen] = useState(false);


    return ( 
        <>
            <nav className="bg-white border-gray-200 px-2 md:px-16 xl:px-32 py-2 md:py-8 rounded dark:bg-gray-900">
                <div className="flex items-start justify-between">
                    <Link to={'/'} className="flex items-center p-2 md:p-0">
                        <img className='w-8' src={logo} height="auto"  alt="Logo" />
                    </Link>


                    <div className={`${navOpen === true ? '' : 'hidden'} md:block md:w-auto" id="navbar-default`}>
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            
                            <Link onClick={()=>setNavOpen(!navOpen)} to={section === 0 ? '/interiores-home' : '/construccion-home'}  href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:p-0 md:hover:text-olive dark:text-white" aria-current="page">HOME</Link>
                            <Link onClick={()=>setNavOpen(!navOpen)} to={section === 0 ? '/interiores-about' : '/construccion-about'} className="block py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-olive md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ACERCA DE</Link>
                            
                            <Link onClick={()=>setNavOpen(!navOpen)} to='/gallery' className="block py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-olive md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">GALERIA</Link>
                            
                            <Link onClick={()=>setNavOpen(!navOpen)} to='/contact' className="block py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-olive md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTACTO</Link>
                        </ul>
                    </div>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg onClick={()=>setNavOpen(!navOpen)} className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
            </nav>
            
        </>


     );
}
 
export default Navbar;