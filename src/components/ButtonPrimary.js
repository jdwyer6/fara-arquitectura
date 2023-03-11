const ButtonPrimary = ({text}) => {
    return ( 
        <button style={{width: 'clamp(40px, 50%, 400px)'}} className={`bg-brown px-8 text-xs md:text-sm text-white font-medium tracking-widest py-6 rounded-xl md:mx-8 hover:bg-gray-dark ease-out duration-300 my-1`}>{text}</button>
     );
}
 
export default ButtonPrimary;