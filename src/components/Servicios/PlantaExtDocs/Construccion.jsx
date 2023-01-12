import React from "react";
import poste from "../PlantaExtDocs/poste.png";
const Construccion = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-center">
        <img src={poste} alt="" className="w-[200px]"/>
      </div>
      <div className="text-2xl">
        <p className="mb-10">
          Ofrecemos una solución integral para la implementación de la red de
          voz, video y datos, mediante un equipo especializado en construccion
          de fibra óptica y microondas.
        </p>
        <h2 className="font-bold mb-5">Este servicio incluye:</h2>
        <ul className="list-disc">
          <li>
            La construcción aérea (mediante posteria o microondas) en vía
            pública o privada.
          </li>
          <li>
            Equipos de conexión, red de fibra óptica, cámaras y equipamiento
            para el site.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Construccion;
