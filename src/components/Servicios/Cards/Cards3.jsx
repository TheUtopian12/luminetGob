import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import { Button } from "@material-tailwind/react";
import { BiShare } from "react-icons/bi";
export const Cards3 = () => {
  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip
      isFlipped={flip}
      flipDirection="horizontal"
      flipSpeedFrontToBack={0.6}
      flipSpeedBackToFront={0.6}
    >
      <div className="w-[90%] h-72 bg-[url('/img/SERVICIOS-DE-RED-03.png')] bg-cover bg-center text-center grid rounded-3xl">
        <div className="flex items-end mb-0 justify-center font-bold">
          <p className="text-lg sm:text-2xl text-white mt-20">Servicios de Internet</p>
        </div>
        <div className="flex justify-end mr-10 text-white">
          
          <button onClick={() => setFlip(!flip)}><BiShare/></button>
          </div>
      </div>

      <div className="w-[90%] h-fit sm:h-72 bg-[#09284B] grid border-black border-2 rounded-3xl">
        <ul className="m-10 list-disc text-white">
          <li>
            Servicios de Internet Dedicado y Simétrico hasta 1 Gb de velocidad.
            SLA hasta de 99.95%.
          </li>
          <li>SDWAN</li>
          <li>Internet para eventos, contratación a partir de 1 día.</li>
          <li>
            Por ejemplo: informes, ruedas de prensa, sesiones, eventos
            culturales, eventos en lugares públicos, etc.
          </li>
        </ul>

        <div className="flex justify-center gap-24">
          <Button color="green" variant="gradient" className="w-44 mb-10 sm:mb-0">
          Más información
          </Button>
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
