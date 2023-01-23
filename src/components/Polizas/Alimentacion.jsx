import React from 'react'

import poste from "./poste.png";
const Alimentacion = () => {
  return (
    <div className="flex justify-center mt-16">
    <div className="flex gap-16  w-[80%] h-[500px] items-center p-10 rounded-3xl">
      <div className='w-[300px]'>
        <img src={poste} alt="" className="rounded-2xl" />
      </div>
      <div className='w-[50%] text-white '>
        <h1 className="text-left text-3xl text-[#76BA22] font-bold mb-10">
        Sistema de Alimentación Ininterrumpida (SAI) </h1>

        <p className="mb-5 text-xl">
        Comprobación, inspección y calibración de los valores eléctricos.
        </p>
        <p className='text-xl'>
        Verificación de ubicación de ambiente de trabajo de los equipos y control de stock de repuestos.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Alimentacion