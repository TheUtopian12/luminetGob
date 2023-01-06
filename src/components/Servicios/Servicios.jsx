import React, { useState } from "react";
import { ContenidoServicios } from "./ContenidoServicios";

export const Servicios = () => {
  const [pagina, setPagina] = useState("");
  return (
    <div className="w-[100%] min-h-screen ">
      <h1 className="text-[#76BA22] text-3xl font-bold text-center ">
        Servicios especializados
      </h1>

      <div className="mt-10 flex gap-2">
        <div
          className={`w-[33%] h-16 cursor-pointer  rounded-t-full  hover:bg-blue-500 active:bg-green-500 ${
            pagina === "1" ? "bg-green-500 " : "bg-[#12292A]"
          }`}
          onClick={() => setPagina("1")}
        >
          <h1 className="text-white text-center text-xl font-semibold pt-2">
            PLANTA EXTERNA Y ÚLTIMA MILLA
          </h1>
        </div>
        <div
          className={`w-[33%] h-16 cursor-pointer  rounded-t-full  hover:bg-blue-500 active:bg-green-500 ${
            pagina === "2" ? "bg-green-500 " : "bg-[#12292A]"
          }`}
          onClick={() => setPagina("2")}
        >
          <h1 className="text-white text-center text-xl font-semibold pt-2">
            CIBERSEGURIDAD Y CONTRAINTELIGENCIA
          </h1>
        </div>
        <div
          className={`w-[33%] h-16 cursor-pointer  rounded-t-full  hover:bg-blue-500 active:bg-green-500 ${
            pagina === "3" ? "bg-green-500 " : "bg-[#12292A]"
          }`}
          onClick={() => setPagina("3")}
        >
          <h1 className="text-white text-center text-xl font-semibold pt-2">
            SERVICIOS DE RED E INTERNET
          </h1>
        </div>
      </div>
      <ContenidoServicios pagina={pagina} />
    </div>
  );
};
