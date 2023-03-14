import { useState } from "react";
import ButtonPrimary from "../components/ButtonPrimary";

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    console.log(name, email, subject, phone, message)


    return ( 
        <div className="h-screen px-40">
            <form action="https://formsubmit.co/9b9906a5003ad4c65cbd82615315fc4d" method="POST">
                <div className='text-center'>
                    <h2>CONTÁCTANOS</h2>
                    <p className='font-small'><span className='text-red-600'>*</span> Campos Obligatorios</p>
                </div>

                <div className='flex'>
                    <div className='flex-1 p-8'>
                        <div className="flex flex-col mb-8">
                            <label htmlFor="name" className="mb-2">Nombre <span className='text-red-600'>*</span></label>
                            <input name="name" onChange={(e)=>setName(e.target.value)} type='text' id='name' className='bg-ivory rounded-lg h-12 focus:outline-sand' placeholder="Escribe tu nombre" style={{textIndent: '16px'}} required/>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-2">Correo Electrónico <span className='text-red-600'>*</span></label>
                            <input name="email" onChange={(e)=>setEmail(e.target.value)} type='text' id='name' className='bg-ivory rounded-lg h-12 focus:outline-sand' placeholder="Escribe tu correo electrónico" style={{textIndent: '16px'}} required/>
                        </div>
                    </div>
                    <div className="flex-1 p-8">
                        <div className="flex flex-col mb-8">
                            <label htmlFor="subject" className="mb-2">Asunto <span className='text-red-600'>*</span></label>
                            <input name="subject" onChange={(e)=>setSubject(e.target.value)} type='text' id='name' className='bg-ivory rounded-lg h-12 focus:outline-sand' placeholder="Escribe el asunto" style={{textIndent: '16px'}} required/>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="phone" className="mb-2">Número de teléfono</label>
                            <input name="phone" onChange={(e)=>setPhone(e.target.value)} type='text' id='name' className='bg-ivory rounded-lg h-12 focus:outline-sand' placeholder="Escribe tu número" style={{textIndent: '16px'}}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col px-8 mb-8'>
                    <label htmlFor="message">Mensaje <span className='text-red-600'>*</span></label>
                    <textarea name="message" onChange={(e)=>setMessage(e.target.value)} className='h-40 bg-ivory rounded-lg focus:outline-sand' placeholder="Escribe tu mensaje..." style={{textIndent: '16px', lineHeight: '40px'}}></textarea>
                </div>
                <ButtonPrimary type="submit" text='ENVIAR'/>
            </form>
                

            
        </div>
     );
}

 
export default ContactPage;