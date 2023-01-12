import React from 'react'

import poste from "./poste.png";

const Enlaces = () => {
  return (
    <div className="flex justify-center mt-16">
    <div className="flex gap-16 bg-[#E1ECF1] w-[50%] h-[500px] items-center p-10 rounded-3xl">
      <div className='w-[300px]'>
        <img src={poste} alt="" className="rounded-2xl" />
      </div>
      <div className='w-[50%]'>
        <h1 className="text-left text-3xl text-[#76BA22] font-bold mb-10">
        Revisión de funcionamiento de enlaces </h1>

        <ul className="list-disc">
            <li>Revisión de transmisores de Microondas ubicadas en el sitio.</li>
            <li>
            Revisión de parámetros de calidad de señal del enlace.
            </li>
            <li>Ajustes de alineación.</li>
            <li>
            Revisión de las condiciones de cable exterior del radio al site.
            </li>
          </ul>
      </div>
    </div>
  </div>
  )
}

export default Enlaces