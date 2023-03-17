const ButtonPrimary = ({text}) => {
    return ( 
        <button className={`bg-brown w-full px-8 text-xs md:text-sm text-white font-medium tracking-widest py-6 rounded-xl md:mx-8 hover:bg-gray-dark ease-out duration-300 my-1`}>{text}</button>
     );
}
 
export default ButtonPrimary;