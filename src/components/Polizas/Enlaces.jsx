import React from "react";
import DrawerPolizas from "../ui/DrawerPolizas";
import poste from "../../assets/Polizas/6.jpeg";

const Enlaces = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="sm:flex gap-16  lg:w-[80%] sm:h-[500px] items-center sm:p-10 rounded-3xl">
        <div className="w-[300px]">
          <img
            src={poste}
            alt=""
            className="rounded-2xl h-[300px] sm:h-[400px]"
          />
        </div>

        <div className="sm:w-[50%] text-white">
          <h1 className="text-center text-xl text-[#76BA22] font-bold mb-10">
            Revisión de funcionamiento <br className="md:hidden" /> de enlaces{" "}
          </h1>

          <ul className="list-disc text-lg text-left hidden sm:grid">
            <li>
              Revisión de transmisores de Microondas ubicadas en el sitio.
            </li>
            <li>Revisión de parámetros de calidad de señal del enlace.</li>
            <li>Ajustes de alineación.</li>
            <li>
              Revisión de las condiciones de cable exterior del radio al site.
            </li>
          </ul>
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
                <ul className="list-disc text-lg text-left grid sm:hidden">
                  <li>
                    Revisión de transmisores de Microondas ubicadas en el sitio.
                  </li>
                  <li>
                    Revisión de parámetros de calidad de señal del enlace.
                  </li>
                  <li>Ajustes de alineación.</li>
                  <li>
                    Revisión de las condiciones de cable exterior del radio al
                    site.
                  </li>
                </ul>
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

export default Enlaces;
