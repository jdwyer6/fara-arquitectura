const Card = ({title, description, icon, bg}) => {
    return ( 
        <div className="text-center w-80 flex flex-col justify-center">
            <div className={`${bg} w-80 h-80 mb-8 flex justify-center items-center`}>
                {icon}
            </div>
            <p>{title}</p>
            <p className='font-small'>{description}</p>
        </div>
     );
}
 
export default Card;