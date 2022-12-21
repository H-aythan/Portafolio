import Slider from 'react-slick'
import proyectos from '../proyectosComponents/ProjectosApi'
import React, {useState,useEffect } from 'react'



const SliderProyectos = ({slideRef}) => {
    const [id,setId]=useState()
    const [width,setWidth]=useState()
    
    const tamanioW=()=>{
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener("resize",tamanioW) 
    
        
        return()=>{
          window.removeEventListener("resize",tamanioW)
        }
    })
    const settings = {
        infinite: true,
        slidesToShow: window.innerWidth<1200?1:3,
        slidesToScroll: 1,
        autoplay:false,
        speed: 400,
        autoplaySpeed:0,
        cssEase: "linear",
        pauseOnHover:true,
        arrows:false,
        
       
    };
      
      // left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4/5
  return (
    <div className='w-full text-center h-4/5 relative'>
       <div className='absolute -top-10 left-0 text-2xl '>
            <button className='bg-rose-700 px-4 py-1 rounded-md hover:bg-rose-500 font-bold pb-2' onClick={()=>slideRef.current.slickPrev()}>{`<`}</button>
            <button className='bg-rose-700 ml-5 px-4 py-1 rounded-md hover:bg-rose-500 font-bold pb-2' onClick={()=>slideRef.current.slickNext()}>{`>`}</button>
        </div>
        <Slider {...settings} ref={slideRef}>
            {proyectos.map((item,i)=>{
                return(
                    <div className=' w-96 p-4' key={item.id}>
                        <div className='rounded-md overflow-hidden bg-white text-black'
                            onMouseOver={()=>setId(item.id)}
                            onMouseLeave={()=>setId(null)}
                        >
                            <div className='w-full mb-5 cursor-pointer h-full'>    
                                <img className={`w-full object-cover ${item.img&&"h-40"}`} alt='' src={item.img}/>
                            </div>
                                <span className='w-full h-min text-black text-xl md:text-2xl  flex justify-center '>
                                    <h1 className='w-min break-words overflow-hidden'>{item?.titulo}</h1>
                                </span>
                            <div className={`overflow-hidden ${item.id===id?"h-52":"h-0"} transition-height duration-500 ease-in-out`}>
                                <p className='mt-5 px-10 text-xs md:text-base'>{item?.info}</p>
                                <button className='p-2 bg-rose-500 mt-4 text-white rounded-md hover:bg-rose-400'>
                                    <a href={item?.link} target="_blank" rel="noreferrer">Ver Demo</a>
                                </button>
                            </div>
                            <div className='bg-gradient-to-r from-rose-500 to-rose-700 w-full h-8 mt-5'></div>
                        </div>
                    </div>
                )
            })}
          
        </Slider>
            {/* {slideRef?.current?.slickNext()} */}
      
      </div>)
}

export default SliderProyectos