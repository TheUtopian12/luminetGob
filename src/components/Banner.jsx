import React from "react";
import bgImage from "../assets/banner.jpg";
export const Banner = () => {
  return (
    <div
      className={`w-[100%] h-[300px] bgImageBanner bg-cover flex items-center justify-center`}
    >
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold">¿Por qué luminet?</h1>
        <h2 className="text-4xl">
          Ofrecemos
          <span className="text-[#76BA22] font-semibold">
            {" "}
            soporte operativo y monitoreo
          </span>{" "}
          24/7 de la red de Fibra Óptica propia y externa
        </h2>
      </div>
    </div>
  );
};
