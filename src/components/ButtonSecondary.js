const ButtonSecondary = ({text}) => {
    return ( 
        <button className={`bg-ivory w-full px-8 text-xs md:text-sm text-gray-dark font-medium tracking-widest py-6 rounded-xl md:mx-8 hover:bg-sand ease-out duration-300 my-1`}>{text}</button>
     );
}
 
export default ButtonSecondary;