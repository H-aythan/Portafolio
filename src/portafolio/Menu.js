import React, { useState } from 'react'
import Modal from './components/Modal'


const Menu = ({refInicio,refProyecto}) => {
   const [modal,setModal]=useState(false) 
   const [selectedOption,setSelectedOption]=useState("inicio")
   
   const btnInicio=()=>{
       refInicio.current.scrollIntoView({block: "start", behavior: "smooth"})
       setSelectedOption("inicio")
   }
   
   const btnProyectos=()=>{
        refProyecto.current.scrollIntoView({block: "start", behavior: "smooth"})
        setSelectedOption("proyectos")
    }


    return (
        <>
       {modal&&<Modal modal={modal} setModal={setModal}/>}
        <aside className="xl:h-screen flex-grow px-4 flex flex-col items-center bg-gray-900">
            <div className="mt-5 md:mt-16 xl:mt-32 w-40 flex-shrink-0 h-40 rounded-full bg-blueGray-400 overflow-y-hidden hidden md:block">
                <img className="w-full h-40 m-auto" src="/img/avatar.svg" alt="avatar.jpg"/>
            </div>
            <ul className="text-xs md:text-2xl xl:text-lg text-center w-full mb-2 flex md:flex-col items-start sm:items-center justify-center xl:h-32 mt-5 ">
                
                <button className={`p-1 sm:w-28 sm:py-1 flex-grow sm:flex-grow-0 ${selectedOption==="inicio"&&"border-b-4 outline-none bg-lightBlue-900 text-lightBlue-100"}`} onClick={btnInicio}>
                    Inicio
                </button>
               
                <button className={`p-1 sm:w-28 sm:py-1 flex-grow sm:flex-grow-0  ${selectedOption==="proyectos"&&"border-b-4 outline-none bg-rose-700"}`} onClick={btnProyectos}>
                    Proyectos
                </button>

                <button className="p-1 sm:w-28 focus:border-b-2 focus:outline-none focus:bg-gray-700 sm:py-1 flex-grow sm:flex-grow-0 hover:bg-gray-800" onClick={()=>setModal(!modal)}> 
                    Contacto
                </button>
            </ul>
           <div className="hidden h-72 mt-10 px-2 p-auto flex-shrink md:flex flex-col items-center justify-around flex-grow">
                <p className="border-b">Formas de contacto</p>
                <div className="flex w-40 justify-around">
                    <a href="https://www.linkedin.com/in/anthony-romero-93a1831b2" target="_blank" rel="noreferrer" ><img className="bg-white w-12 rounded-lg" src="/img/logo/link.png" alt="face.png"/></a>
                    {/* <a href="https://github.com/H-aythan" target="_blank" rel="noreferrer" ><img className="bg-white w-12 rounded-lg" src="/img/logo/github.png" alt="Linkedin.jpg"/></a> */}
                </div>
                <p className="text-xs">anthonyromeroromero014@gmail.com</p>
           </div>
               
        </aside> 
        </>
    )
}

export default Menu
