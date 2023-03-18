const ButtonTertiary = ({text, color}) => {
    return ( 
        <button className={`bg-transparent border border-${color} px-8 w-full text-xs md:text-sm text-${color} font-medium tracking-widest py-6 rounded-xl hover:text-gray-dark hover:bg-ivory ease-out duration-300 my-1`}>{text}</button>
     );
}
 
export default ButtonTertiary;