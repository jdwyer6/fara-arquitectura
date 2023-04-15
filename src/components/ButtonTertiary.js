import { Link } from "react-router-dom";

const ButtonTertiary = ({text, color, link}) => {
    return ( 
        <Link to={link} className={`bg-transparent border border-${color} px-8 w-full text-xs md:text-sm text-${color} font-medium tracking-widest py-6 rounded-xl hover:text-gray-dark hover:bg-ivory ease-out duration-300 my-1`}>{text}</Link>
     );
}
 
export default ButtonTertiary;