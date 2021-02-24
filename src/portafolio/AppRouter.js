import React from 'react'
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import Menu from './Menu'
import Inicio from './paginas/Inicio'
import Proyectos from './paginas/Proyectos'


const AppRouter = () => {
    return (
        <Router>
            <Menu/>     
            <div className="relative w-full h-screen overflow-x-hidden xl:overflow-hidden flex">
                <Switch>
                    <Route exact path="/" component={Inicio}/>
                    <Route exact path="/proyectos" component={Proyectos}/>
                </Switch>
            </div>    
        </Router>
    )
}

export default AppRouter;
