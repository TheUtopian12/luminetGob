import React, { useState } from "react";
import { ContenidoServicios } from "./ContenidoServicios";

export const Servicios = () => {
  const [pagina, setPagina] = useState("1");
  return (
    <div className="w-[100%]  mt-10">
      <h1 className="text-[#143C6A] text-4xl font-bold text-center ">
        Nuestros servicios especializados
      </h1>

      <nav className="mt-10 grid grid-cols-2 gap-1 sm:gap-0 sm:flex sm:justify-center sm:overflow-x-scroll scrollbar-hide">
        <div
          className={`sm:w-[25%] sm:h-20 cursor-pointer  sm:rounded-b-none sm:rounded-xl hover:bg-[#2A5E9A] active:bg-[#76BA22] ${
            pagina === "1" ? "bg-[#76BA22] " : "bg-[#09284B] "
          }`}
          onClick={() => setPagina("1")}
        >
          <h1 className="text-white  text-center translate-y-[-10px] sm:translate-y-0 text-[10px] sm:text-sm lg:text-md xl:text-xl font-semibold pt-0 mt-4">
            PLANTA EXTERNA <br /> Y ÚLTIMA MILLA
          </h1>
        </div>
        <div
          className={`sm:w-[25%] sm:h-20 cursor-pointer  sm:rounded-b-none sm:rounded-xl hover:bg-[#2A5E9A] active:bg-[#76BA22] ${
            pagina === "2" ? "bg-[#76BA22] " : "bg-[#09284B] "
          }`}
          onClick={() => setPagina("2")}
        >
          <h1 className="text-white text-center translate-y-[-10px] sm:translate-y-0 text-[10px] sm:text-sm lg:text-md xl:text-xl font-semibold pt-0 mt-4">
            CIBERSEGURIDAD Y CONTRAINTELIGENCIA
          </h1>
        </div>
        <div
          className={`sm:w-[25%] sm:h-20 cursor-pointer  sm:rounded-b-none sm:rounded-xl hover:bg-[#2A5E9A] active:bg-[#76BA22] ${
            pagina === "3" ? "bg-[#76BA22] " : "bg-[#09284B] "
          }`}
          onClick={() => setPagina("3")}
        >
          <h1 className="text-white text-center translate-y-[-10px] sm:translate-y-0 text-[10px] sm:text-sm lg:text-md xl:text-xl font-semibold pt-0 mt-4">
            CONSTRUCCIÓN Y MANTENIMIENTO DE C5, C4 Y C2
          </h1>
        </div>
        <div
          className={`sm:w-[25%] sm:h-20 cursor-pointer  sm:rounded-b-none sm:rounded-xl hover:bg-[#2A5E9A] active:bg-[#76BA22] ${
            pagina === "4" ? "bg-[#76BA22] " : "bg-[#09284B] "
          }`}
          onClick={() => setPagina("4")}
        >
          <h1 className="text-white text-center translate-y-[-10px] sm:translate-y-0 text-[10px] sm:text-sm lg:text-md xl:text-xl font-semibold pt-2 mt-4">
            SERVICIOS DE RED E INTERNET
          </h1>
        </div>
      </nav>
      <ContenidoServicios pagina={pagina} />
    </div>
  );
};
