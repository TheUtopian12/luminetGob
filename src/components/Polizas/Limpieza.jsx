import React from 'react'

import poste from "../../assets/Polizas/Rack 03.jpeg";
const Limpieza = () => {
  return (
    <div className="flex justify-center mt-16">
    <div className="flex gap-16  w-[80%] h-[500px] items-center p-10 rounded-3xl">
      <div className='w-[300px]'>
        <img src={poste} alt="" className="rounded-2xl h-[500px]" />
      </div>
      <div className='w-[50%] text-white'>
        <h1 className="text-left text-xl text-[#76BA22] font-bold mb-10">
        Limpieza técnica de salas de sistemas </h1>

        <p className="mb-5 text-lg text-left">
        Limpieza de Hardware, sistemas de energía, ventiladores, superficies verticales y periféricas y del suelo técnico para minimizar el riesgo de propagación de elementos contaminantes entre ellos polvo, material férrico, “pelos de zinc” que puedan generar sobrecalentamiento en los equipos y dificultar el flujo del aire en los mismos.
        </p>
        <div className="flex justify-center gap-24 mt-5">
        <button
          type="button"
          className="text-white bg-gradient-to-br from-[#08785c] to-[#8ec529] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          {" "}
          Más información
        </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Limpieza