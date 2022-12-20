import React, { useEffect, useState } from 'react'
import emailjs from 'emailjs-com'
import validator from 'validator'
const initialForm={
    nombre:"",
    correo:"",
    mensaje:"",
}

const Modal = ({modal,setModal}) => {
    const [form,setForm]=useState(initialForm);
    const [loading,setLoading]=useState(false)
    const [notificacion,setNotificacion]=useState(false)
    const [notificacionColor,setNotificacionColor]=useState("")
    const [emailValided,setEmailValided]=useState(false)
    // validator react
    const datosForm=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    }
    
    const validEmail=(email="")=>{
        if (validator.isEmail(email)) {
            setEmailValided(false)
          } else {
            setEmailValided(true)
          }
    };
    
    const enviarEmail=async (e)=>{
        e.preventDefault()
        setLoading(true)
        try {
            const res=await emailjs.send('service_gmdigib','template_jcg72cp',form,'R31YfRejv2uH5e_XL')
            
            if(res.status===200){
                setForm(initialForm)
                setLoading(false)
                setNotificacion("Mensaje enviado")
                setNotificacionColor("bg-emerald-600")
            }
        } catch (error) {
            console.log(error)
            setNotificacion("El mensaje no pudo ser enviado ")
            setNotificacionColor("bg-red-600")
            setLoading(false)
        }
        
    }
    
    useEffect(()=>{
        
        const timer=setTimeout(()=>{
            setNotificacion(null)
        },8000)
        
        return ()=>clearTimeout(timer)
    },[notificacion])
    
    useEffect(()=>{
        form.correo&&validEmail(form.correo)        
    },[form.correo])
    
    return (
        <div className="h-screen flex justify-center items-center w-screen bg-gray-800 bg-opacity-75 fixed top-0 z-40 " onClick={()=>setModal(!modal)}>
            <div className="md:w-1/2 xl:w-1/3 bg-gray-900 flex flex-wrap relative animate-move-t " onClick={(e)=>e.stopPropagation()}>
                <div className="w-full h-10 float-right">
                    <button className="float-right text-xl focus:outline-none mt-2 mr-4"
                        onClick={()=>setModal(!modal)}
                    >
                        X
                    </button>
                </div>
                <p className="w-full text-xl text-center">Contáctame</p>
                <div className="borde h-4/5 w-full px-10">
                    <form className="flex flex-wrap flex-col py-10 ">
                        <div className="flex flex-col flex-shrink text-xs sm:text-lg">
                            <p className="mb-2">Nombre y apellido:</p>
                            <input className=" pl-2 focus:outline-none focus:border-b-2  h-6 border-orange-600 sm:h-10 bg-gray-800 rounded" type="text"
                                onChange={(e)=>datosForm(e)}
                                name="nombre"
                                value={form.nombre}
                            />
                        </div>
                        <div className="flex flex my-14 flex-col text-xs sm:text-lg">
                            <p className="mb-2 ">Correo electronico:</p>
                            <input className="focus:border-b-2 focus:outline-none h-6 border-orange-600 pl-2 sm:h-10 bg-gray-800 rounded" type="text"
                                onChange={(e)=>datosForm(e)}
                                name="correo"
                                value={form.correo}
                            />
                            {emailValided&&<span className='text-xs text-red-500 mt-2'>Este correo no es valido</span>}
                            
                        </div>
                        <div className="flex flex flex-col max-h-24 sm:max-h-32 text-xs sm:text-lg">
                            <p className="mb-2">Mensaje:</p>
                            <textarea className="focus:outline-none focus:border-2 h-6 border-orange-600 pl-2 max-h-32 h-32 bg-gray-800 rounded text-xs px-2"
                                onChange={(e)=>datosForm(e)}
                                name="mensaje"
                                value={form.mensaje}
                            ></textarea>
                        </div>
                        <div className="flex justify-end mt-4 ">
                            {!loading?<button className={`bg-gray-800 px-3 py-1 hover:bg-orange-500 ${(!emailValided)&&(form.nombre!=="")&&(form.correo!=="")&&(form.mensaje!=="")?"block":"hidden"}`} onClick={(e)=>enviarEmail(e)}>
                                    Enviar
                                </button>
                                // spin loader
                            :<span className='bg-orange-500 px-3 py-1 flex'>
                                Enviando 
                                <div className='relative animate-spin ml-2 w-6 h-6 border-4 border-l-blue-400 rounded-full overflow-hidden'>
                                    <div className='absolute top-0 bg-black w-4 h-1 '></div>
                                    <div className='absolute bottom-0 bg-black w-4 h-1 '></div>
                                </div>
                            </span>}
                        </div>
                    </form>
                    {notificacion&&<p className={`${notificacionColor} text-center py-2`}>{notificacion}</p>}
                    <div className="flex flex-row flex-wrap sm:flex-nowrap w-full items-center justify-around sm:justify-between flex-grow-0 py-4">
                        <a href="https://www.linkedin.com/in/anthony-romero-93a1831b2" target="_blank" rel="noreferrer" ><img className="bg-white w-8 sm:w-12 rounded-lg" src="/img/logo/link.png" alt="linkedin.png"/></a>
                        <p className="order-3 text-center w-full mt-2 sm:static flex-shrink text-xs sm:text-sm">anthonyromeroromero014@gmail.com</p>
                        {/* <a href="https://github.com/H-aythan" target="_blank" rel="noreferrer" className="bg-white sm:order-3 w-8 flex-shrink sm:w-12 rounded-lg"><img src="/img/logo/github.png" alt="Linkedin.jpg"/></a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
