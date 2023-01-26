import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { BiShare } from "react-icons/bi";

import { Button } from "@material-tailwind/react";
export const Cards = () => {
  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip
      isFlipped={flip}
      flipDirection="horizontal"
      flipSpeedFrontToBack={0.6}
      flipSpeedBackToFront={0.6}
    >
      <div className="w-[70%] h-72 sm:h-72 bg-[url('/img/SERVICIOS-DE-RED-01.png')] bg-cover bg-center text-center grid rounded-3xl">
        <div className="flex items-end mb-0 font-bold">
          <p className="text-lg sm:text-2xl text-white mt-20">
            Servicios de interconexion para oficinas del sector público
          </p>
        </div>
        <div className="flex justify-end mr-10 text-white">
          <button onClick={() => setFlip(!flip)}>
            <BiShare />
          </button>
        </div>
      </div>

      <div className="w-[70%] h-fit  bg-[#09284B] grid border-black border-2 rounded-3xl">
        <p className="m-10 text-white text-center pt-10">
          Servicio de red totalmente <span className="font-bold">gestionado y seguro</span> que ofrece servicios de
          alta calidad para <span className="font-bold">conectar diferentes oficinas o dependencias</span> entre
          sí: redes filiales, infraestructuras o aplicaciones en la nube,
          datacenters y mucho más.
        </p>
        <div className="flex justify-center gap-24">
        <button
          type="button"
          className="text-white bg-gradient-to-br from-[#08785c] to-[#8ec529] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          {" "}
          Más información
        </button>
        </div>
        <div className="flex justify-end mr-10 text-white mb-10 sm:mb-20">
          <button onClick={() => setFlip(!flip)}>
            <BiShare />
          </button>
        </div>
      </div>
    </ReactCardFlip>
  );
};
