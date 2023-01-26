import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import { Button } from "@material-tailwind/react";
import { BiShare } from "react-icons/bi";
export const Cards4 = () => {
  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip
      isFlipped={flip}
      flipDirection="horizontal"
      flipSpeedFrontToBack={0.6}
      flipSpeedBackToFront={0.6}
    >
      <div className="w-[70%] h-72 bg-[url('/img/SERVICIOS-DE-RED-04.png')] bg-cover bg-center text-center grid rounded-3xl">
        <div className="flex items-end mb-0 justify-center font-bold">
          <p className="text-lg sm:text-2xl text-white mt-20">VoIP</p>
        </div>
        <div className="flex justify-end mr-10 text-white">
          
          <button onClick={() => setFlip(!flip)}><BiShare/></button>
          </div>
      </div>

      <div className="w-[70%] h-fit bg-[#09284B] grid border-black border-2 rounded-3xl">
        <span className="m-10 text-white">
          <p>
            {" "}
            Nuestro servicio de <span className="font-bold">telefonía IP</span> te permite lograr una comunicación
            fácil, efectiva y flexible.
          </p>
          <p>
            Realiza <span className="font-bold">llamadas seguras</span> desde cualquier lugar al configura tu
            extensión telefónica en tus dispositivos móviles <span className="font-bold">con alta calidad</span> de
            audio en las llamadas.
          </p>
        </span>
        <div className="flex justify-center gap-24">
        <a href='#contacto'
          type="button"
          className="text-white bg-gradient-to-br from-[#08785c] to-[#8ec529] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          {" "}
          Más información
        </a>
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
