// import { Container } from "react-bootstrap";
import { BsInstagram } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        
        <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center flex justify-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a className="hover:underline">FARAH ARQUITECTURA™</a>. All Rights Reserved.
            </span>
            <ul className="flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 hidden md:flex">
                <li>
                    <a href="https://www.instagram.com/farah_arquitectura/" className="mr-4 hover:underline md:mr-6 ">Instagram</a>
                </li>
                <li>
                    <Link to='/contact' className="hover:underline">Contacto</Link>
                </li>
            </ul>
        </footer>

     );
}
export default Footer;