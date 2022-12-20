import React,{useEffect, useRef} from 'react'
import {BrowserRouter as Router}from 'react-router-dom'
import Menu from './Menu'
import Inicio from './paginas/Inicio'
import Proyectos from './paginas/Proyectos'


const AppRouter = () => {
    const refInicio=useRef()
    const refProyecto=useRef()

    useEffect(()=>{
        
    },[])
    return (
        <Router>
            <Menu refInicio={refInicio} refProyecto={refProyecto}/>     
            <div className="relative w-full h-screen overflow-x-hidden flex flex-wrap overflow-hidden">
                
                <Inicio refInicio={refInicio}/>
                <Proyectos refProyecto={refProyecto}/>   
                
            </div>    
        </Router>
    )
}

export default AppRouter;
