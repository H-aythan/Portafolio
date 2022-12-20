import React from 'react'
import Frame from './Frame'

const Particles = ({colorFrame,colorIntensity}) => {
  
  return (
    <div  className='w-full h-full absolute flex justify-center items-center z-0 '>
        {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item,i)=>{
            return <Frame key={i} colorFrame={colorFrame} colorIntensity={colorIntensity}/>
        })}
    </div>
  )
}

export default Particles