import { Link } from "react-router-dom";
const ButtonPrimary = ({text, link}) => {
    return ( 
        <Link to={link} className={`bg-brown w-full px-8 text-xs md:text-sm text-white font-medium tracking-widest py-6 rounded-xl md:mx-8 hover:bg-gray-dark ease-out duration-300 my-1`}>{text}</Link>
        
     );
}
 
export default ButtonPrimary;