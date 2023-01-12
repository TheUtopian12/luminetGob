import React, { useState } from "react";
import { ContenidoServicios } from "./ContenidoServicios";

export const Servicios = () => {
  const [pagina, setPagina] = useState("");
  return (
    <div className="w-[100%] min-h-screen ">
      <h1 className="text-[#76BA22] text-3xl font-bold text-center ">
        Servicios especializados
      </h1>

      <div className="mt-10 flex justify-center">
        <div
          className={`w-[33%] h-20 cursor-pointer  sm:rounded-t-full rounded-xl hover:bg-[#2A5E9A] active:bg-[#2A5E9A] ${
            pagina === "1" ? "bg-[#143C6A] " : "bg-[#09284B]"
          }`}
          onClick={() => setPagina("1")}
        >
          <h1 className="text-white text-center text-sm sm:text-xl font-semibold pt-2 mt-4">
            PLANTA EXTERNA Y ÚLTIMA MILLA
          </h1>
        </div>
        <div
          className={`w-[33%] h-20 cursor-pointer  sm:rounded-t-full rounded-xl hover:bg-[#2A5E9A] active:bg-[#2A5E9A] ${
            pagina === "2" ? "bg-[#143C6A] " : "bg-[#09284B]"
          }`}
          onClick={() => setPagina("2")}
        >
          <h1 className="text-white text-center text-sm sm:text-xl font-semibold pt-2 mt-4">
            CIBERSEGURIDAD Y CONTRAINTELIGENCIA
          </h1>
        </div>
        <div
          className={`w-[33%] h-20 cursor-pointer  sm:rounded-t-full rounded-xl hover:bg-[#2A5E9A] active:bg-[#2A5E9A] ${
            pagina === "3" ? "bg-[#143C6A] " : "bg-[#09284B]"
          }`}
          onClick={() => setPagina("3")}
        >
          <h1 className="text-white text-center text-sm sm:text-xl font-semibold pt-2 mt-4">
            SERVICIOS DE RED E INTERNET
          </h1>
        </div>
      </div>
      <ContenidoServicios pagina={pagina} />
    </div>
  );
};
