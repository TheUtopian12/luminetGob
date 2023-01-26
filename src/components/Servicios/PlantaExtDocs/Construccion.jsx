import React from "react";
import poste from "../PlantaExtDocs/poste.png";
const Construccion = () => {
  return (
    <>
      {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="flex justify-center">
          <img src='/img/cam 2.webp' alt="" className="w-[400px] rounded-3xl" />
        </div>
        <div className="pt-5 sm:pt-0 sm:text-2xl font-semibold">
          <p className="mb-10">
            Ofrecemos una solución integral para la{" "}
            <span className="text-[#76BA22]">implementación de la red</span> de
            voz, video y datos, mediante un equipo especializado en{" "}
            <span className="text-[#76BA22]">
              construccion de fibra óptica y microondas.
            </span>
          </p>
          <h2 className="font-bold mb-5 text-[#143C6A]">
            Este servicio incluye:
          </h2>
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
      <div className="flex justify-center mt-10">
        <a href='#contacto'
          type="button"
          className="text-white bg-gradient-to-br from-[#08785c] to-[#8ec529] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          {" "}
          Más información
        </a>
      </div>
    </>
  );
};

export default Construccion;
