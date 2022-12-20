import React, { useEffect, useState } from 'react'

const Frame = ({colorFrame,colorIntensity}) => {
    const [width,setWidth]=useState(0)
    const [height,setHeight]=useState(0)
    
    const resetFrame=()=>{
        setHeight(0)
        setWidth(0)
    }
    
    useEffect(()=>{
        const interval=setInterval(()=>{
            setHeight(Math.floor(Math.random()*window.innerHeight))
            setWidth(Math.floor(Math.random()*window.innerWidth))

        },3000)

        return ()=>{
            clearInterval(interval)
        }
    },[])
    
    return (
        <span style={{top:`${height}px`,left:`${width}px`,boxShadow:"2px 2px 0px 0px white"}} onClick={()=>resetFrame()} 
            className={`w-16 h-16 absolute transition-all duration-2000 rounded-md bg-${colorFrame}-${colorIntensity} bg-opacity-40 `}
            >
                
        </span>
  )
}

export default Frame