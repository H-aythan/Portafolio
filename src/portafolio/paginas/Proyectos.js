import React,{useRef} from 'react'
import Slider from '../paginas/proyectosComponents/Slider'
import Particles from './inicioComponents/Particles'

const Proyectos = ({refProyecto}) => {
    const slideRef=useRef(null)
    return (
        <div className="relative w-full h-screen bg-gradient-to-b from-rose-400 to-rose-900" ref={refProyecto}>
            <Particles colorFrame={"red"} colorIntensity={"300"}/>
            <title>Proyectos</title>
            
            <div className="flex justify-center item-center p-20 h-full" >
                <Slider slideRef={slideRef}/>
            </div>
        </div>
    )
}

export default Proyectos
