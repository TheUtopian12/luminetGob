import React from 'react'

import poste from "./poste.png";
const Torres = () => {
  return (
    <div className="flex justify-center mt-16">
    <div className="flex gap-16  w-[80%] h-[500px] items-center p-10 rounded-3xl">
      <div className='w-[300px]'>
        <img src={poste} alt="" className="rounded-2xl" />
      </div>
      <div className='w-[50%] text-white'>
        <h1 className="text-left text-3xl text-[#76BA22] font-bold mb-10">
        Mantenimiento de Torres de Telecomunicaciones </h1>

        <p className="mb-5 text-xl">
        Ejecutamos las acciones y trabajos necesarios con el objetivo de asegurar la conservación de los anclajes y las estructuras de soporte, tramos de la torre y tensores. </p>
        <p className='text-xl'>
        Así como la verticalidad de la torre, el sistema de parrayos y tierra y retoque de pintura para evitar corrosión de ser necesaria. </p>
      </div>
    </div>
  </div>
  )
}

export default Torres