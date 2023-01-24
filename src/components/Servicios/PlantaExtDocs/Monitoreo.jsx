import React from "react";

import poste from "../PlantaExtDocs/poste2.png";

const Monitoreo = () => {
  return (
    <>
      {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="flex justify-center">
          <img src={poste} alt="" className="w-[200px]" />
        </div>
        <div className="pt-5 sm:pt-0 sm:text-2xl font-semibold text-[#143C6A]">
          <h2 className="font-bold mb-5">Este servicio incluye:</h2>
          <ul className="list-disc m-5">
            <li>Configuración e implementación del sistema de cámaras.</li>
            <li>
              Monitoreo de red de fibra óptica, de microondas y del sistema de
              cámaras.
            </li>
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
      </div>
    </>
  );
};

export default Monitoreo;
