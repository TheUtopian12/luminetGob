import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import { Button } from "@material-tailwind/react";
import { BiShare } from "react-icons/bi";
export const Cards2 = () => {
  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip
      isFlipped={flip}
      flipDirection="horizontal"
      flipSpeedFrontToBack={0.6}
      flipSpeedBackToFront={0.6}
    >
      <div className="w-[70%] h-72 bg-[url('/img/SERVICIOS-DE-RED-02.png')] bg-cover bg-center text-center grid rounded-3xl">
        <div className="flex items-end mb-0 justify-center font-bold">
          <p className="text-lg sm:text-2xl text-white mt-20">Servicios de VPN</p>
        </div>
        <div className="flex justify-end mr-10 text-white">
          
        <button onClick={() => setFlip(!flip)}><BiShare/></button>
        </div>
      </div>

      <div className="w-[70%] h-fit  bg-[#09284B] grid border-black border-2 rounded-3xl">
        <span className="m-10 text-white">
          <p>
            {" "}
            Mejoramos la <span className="font-bold">seguridad</span> de la red mediante nuestro servicio de <span className="font-bold">red
            privada virtual</span> y con ello creamos una mejor conexión interna.
          </p>
          <p>
            Nuestro servicio te permite que envíes y recibas datos sobre <span className="font-bold">redes
            compartidas o públicas</span> como si fuera una red privada, con toda la
            funcionalidad, seguridad y políticas de gestión de una red.
          </p>
        </span>
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
