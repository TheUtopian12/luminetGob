import React from "react";

import poste from "../PlantaExtDocs/poste2.png";

const Monitoreo = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-center">
        <img src={poste} alt="" className="w-[200px]" />
      </div>
      <div className="text-2xl">
        <h2 className="font-bold mb-5">Este servicio incluye:</h2>
        <ul className="list-disc">
          <li>Configuración e implementación del sistema de cámaras.</li>
          <li>
            Monitoreo de red de fibra óptica, de microondas y del sistema de
            cámaras.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Monitoreo;
