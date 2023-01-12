import React from "react";

import poste from "../PlantaExtDocs/poste3.png";
const Mantenimiento = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-center">
        <img src={poste} alt="" className="w-[400px]" />
      </div>
      <div className="text-2xl">
        <p className="mb-10">
          Nos especializamos en proyectos de mantenimiento integral a sistemas
          de redes de voz, video y datos.
        </p>
        <h2 className="font-bold mb-5">Este servicio incluye:</h2>
        <ul className="list-disc">
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
  );
};

export default Mantenimiento;
