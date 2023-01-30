import React from "react";

import poste from "../PlantaExtDocs/poste3.png";
const Mantenimiento = () => {
  return (
   

    <> <div className="grid grid-cols-1 sm:grid-cols-2">
    <div className="flex justify-center pt-10">
       <img src='/img/networking-cabling-installer.png' alt="" className="w-[400px] h-[400px] rounded-3xl" />
    </div>
    <div className="sm:text-2xl pt-5 sm:pt-0 ">
      <p className="mb-10 text-[#143C6A]">
        Nos especializamos en proyectos de <span className="text-[#76BA22]">mantenimiento integral</span>  a sistemas
        de redes de <span className="text-[#76BA22]">voz, video y datos.</span> 
      </p>
      <h2 className="font-bold mb-5 text-[#143C6A]">Este servicio incluye:</h2>
      <ul className="list-disc text-[#143C6A] m-5">
        <li>
        <span className="font-bold">Reparación en la red</span> de fibra óptica y microondas al <span className="font-bold">interior o
          exterior.</span>
        </li>
        <li>
        <span className="font-bold">Sustitución por falla de la red</span> de fibra óptica y mocroondas al
        <span className="font-bold">interior o exterior</span>.
        </li>
        <li>Configuración y cambio de <span className="font-bold">equipo de red</span>.</li>
        <li>Configuración y cambio de <span className="font-bold">cámaras al interior o exterior</span>.</li>
        <li>
        <span className="font-bold">Mantenimiento</span> preventivo y correctivo a puntos de <span className="font-bold">videovigilancia</span>.
        </li>
        <li><span className="font-bold">Mantenimiento</span> preventivo y correctivo a la <span className="font-bold">red de datos</span>.</li>
        <li>Validación del estado de <span className="font-bold">circuitos y cableado</span>.</li>
        <li><span className="font-bold">Detección de puntos de riesgo</span>.</li>
      </ul>
    </div>
  </div>
    <div className="flex justify-center mt-10">
    <a href='#contacto'
      type="button"
      className="text-white bg-gradient-to-br from-[#08785c] to-[#8ec529] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >
      {" "}
      Más información
    </a>
  </div></>
  );
};

export default Mantenimiento;
