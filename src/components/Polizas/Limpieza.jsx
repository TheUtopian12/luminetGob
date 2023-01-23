import React from 'react'

import poste from "./poste.png";
const Limpieza = () => {
  return (
    <div className="flex justify-center mt-16">
    <div className="flex gap-16  w-[80%] h-[500px] items-center p-10 rounded-3xl">
      <div className='w-[300px]'>
        <img src={poste} alt="" className="rounded-2xl " />
      </div>
      <div className='w-[50%] text-white'>
        <h1 className="text-left text-3xl text-[#76BA22] font-bold mb-10">
        Limpieza técnica de salas de sistemas </h1>

        <p className="mb-5 text-xl">
        Limpieza de Hardware, sistemas de energía, ventiladores, superficies verticales y periféricas y del suelo técnico para minimizar el riesgo de propagación de elementos contaminantes entre ellos polvo, material férrico, “pelos de zinc” que puedan generar sobrecalentamiento en los equipos y dificultar el flujo del aire en los mismos.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Limpieza