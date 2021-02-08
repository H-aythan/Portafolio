import React from 'react'

const Tailwind = () => {
    return (
        <div className="container mx-auto my-20 mx-20 text-center">
            <button 
                className="bg-grey-400 hover:bg-blue-600 text-white font-bold  px-2 rounded
                sm:bg-red-200 lg:bg-green-500 ">
                Boton
            </button>
            <h1 className="text-green-500 text-5xl text-center ">este es un h1</h1>
            <h1 className="">este es un h1</h1>
            <h1 className="uppercase">este es un h1</h1>
            <h1 className=" text-2xl w-1/2 rounded-lg bg-pink-500 text-white hover:bg-red-400  ">este es un h1</h1>
            <h1 className="">este es un h1</h1>
            <h1>este es un h1</h1>
            <h1>este es un h1</h1>
            <div className=" p-5 border">
                <p className="text-xl sm:text-xs  ">   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum ratione, veritatis odit explicabo corrupti doloribus ab modi nisi, ipsam in mollitia officiis, dolorem aspernatur fuga dolorum non doloremque incidunt!</p>
            </div>
            <div className="w-96 h-auto border-2 mt-5 shadow-2xl rounded-lg">
                <img className="w-full rounded"
                    src="data:image/jpeg;base64,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"/>
                    
                <p className="mt-3 ml-6 text-left text-xl font-bold  ">Bosque nevado</p>
                <p className="mt-3 ml-6 text-left text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum ratione, veritatis odit explicabo corrupti doloribus ab modi nisi, ipsam in mollitia officiis, dolorem aspernatur fuga dolorum non doloremque incidunt!</p>
                <div className="my-4">
                    <span className="border-2 bg-gray-200 px-2 py-1 rounded-full">#Etiquetas</span>
                    <span className="border-2 mx-6 bg-gray-200 px-2 py-1 rounded-full" >#travel</span>
                    <span className="border-2 bg-gray-200 rounded-full py-1 px-2 text-center">#winter</span>
                </div>
            </div>
        </div>
    )
}

export default Tailwind