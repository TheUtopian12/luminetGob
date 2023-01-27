import React from "react";

import poste from "../../assets/Polizas/alimentacion.jpg";
import DrawerPolizas from "../ui/DrawerPolizas";
const Alimentacion = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="sm:flex gap-16  sm:w-[80%] sm:h-[500px] items-center p-10 rounded-3xl">
        <div className="w-[300px]">
          <img src={poste} alt="" className="rounded-2xl" />
        </div>
        <div className="sm:w-[50%] text-white">
          <h1 className="sm:text-left text-xl text-[#76BA22] font-bold mb-10">
            Sistema de Alimentación Ininterrumpida (SAI){" "}
          </h1>

          <div>
            <p className="mb-5 text-lg text-left hidden sm:grid">
              Comprobación, inspección y calibración de los valores eléctricos.
            </p>
            <p className="text-lg text-left hidden sm:grid">
              Verificación de ubicación de ambiente de trabajo de los equipos y
              control de stock de repuestos.
            </p>
          </div>

          <div className="flex justify-center gap-24 mt-5">
            <a
              href="#contacto"
              type="button"
              className="text-white bg-gradient-to-br from-[#08785c] to-[#8ec529] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 hidden sm:grid"
            >
              {" "}
              Más información
            </a>
          </div>

          

          <DrawerPolizas
            texto={
              <div className="m-10">
                <p className=" text-lg text-left ">
                  Comprobación, inspección y calibración de los valores
                  eléctricos.
                </p>
                <p className="text-lg text-left ">
                  Verificación de ubicación de ambiente de trabajo de los
                  equipos y control de stock de repuestos.
                </p>
                <div className="flex justify-center gap-24 mt-5">
                  <a
                    href="#contacto"
                    type="button"
                    className="text-white bg-gradient-to-br from-[#08785c] to-[#8ec529] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    {" "}
                    Más información
                  </a>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Alimentacion;
