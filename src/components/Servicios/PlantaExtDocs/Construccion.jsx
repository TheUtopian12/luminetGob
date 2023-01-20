import React from "react";
import poste from "../PlantaExtDocs/poste.png";
const Construccion = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="flex justify-center">
        <img src={poste} alt="" className="w-[200px]"/>
      </div>
      <div className="pt-5 sm:pt-0 sm:text-2xl font-semibold">
        <p className="mb-10">
          Ofrecemos una solución integral para la <span className="text-[#76BA22]">implementación de la red</span>  de
          voz, video y datos, mediante un equipo especializado en <span className="text-[#76BA22]">construccion
          de fibra óptica y microondas.</span> 
        </p>
        <h2 className="font-bold mb-5 text-[#143C6A]">Este servicio incluye:</h2>
        <ul className="list-disc text-[#143C6A] m-5">
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
