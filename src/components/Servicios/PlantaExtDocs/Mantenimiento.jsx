import React from "react";

import poste from "../PlantaExtDocs/poste3.png";
const Mantenimiento = () => {
  return (
   

    <> <div className="grid grid-cols-1 sm:grid-cols-2">
    <div className="flex justify-center">
      <img src={poste} alt="" className="w-[200px]" />
    </div>
    <div className="sm:text-2xl pt-5 sm:pt-0 font-semibold">
      <p className="mb-10">
        Nos especializamos en proyectos de <span className="text-[#76BA22]">mantenimiento integral</span>  a sistemas
        de redes de <span className="text-[#76BA22]">voz, video y datos.</span> 
      </p>
      <h2 className="font-bold mb-5 text-[#143C6A]">Este servicio incluye:</h2>
      <ul className="list-disc text-[#143C6A] m-5">
        <li>
          Reparación en la red de fibra óptica y microondas al interior o
          exterior.
        </li>
        <li>
          Sustitución por falla de la red de fibra óptica y mocroondas al
          interior o exterior.
        </li>
        <li>Configuración y cambio de equipo de red.</li>
        <li>Configuración y cambio de cámaras al interior o exterior.</li>
        <li>
          Mantenimiento preventivo y correctivo a puntos de videovigilancia.
        </li>
        <li>Mantenimiento preventivo y correctivo a la red de datos.</li>
        <li>Validación del estado de circuitos y cableado.</li>
        <li>Detección de puntos de riesgo.</li>
      </ul>
    </div>
  </div>
    <div className="flex justify-center mt-10">
    <button
      type="button"
      class="text-white bg-gradient-to-br from-[#08785c] to-[#8ec529] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >
      {" "}
      Más información
    </button>
  </div></>
  );
};

export default Mantenimiento;
