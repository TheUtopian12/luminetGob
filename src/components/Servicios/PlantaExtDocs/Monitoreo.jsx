import React from "react";

import poste from "../PlantaExtDocs/poste2.png";

const Monitoreo = () => {
  return (
    <>
      {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="flex justify-center">
          <img
            loading="lazy"
            src="/img/cam 3.jpeg"
            alt=""
            className="w-[400px] rounded-3xl"
          />
        </div>
        <div className="pt-5 sm:pt-0 sm:text-lg sm:pl-2 lg:text-2xl  text-[#143C6A]">
          <h2 className="font-bold mb-5">Este servicio incluye:</h2>
          <ul className="list-disc m-5">
            <li>
              <span className="font-bold">Configuración e implementación</span>{" "}
              del sistema de cámaras.
            </li>
            <li>
              <span className="font-bold">Monitoreo de red</span> de fibra
              óptica, de microondas y del sistema de cámaras.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <a
          href="#contacto"
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

export default Monitoreo;
