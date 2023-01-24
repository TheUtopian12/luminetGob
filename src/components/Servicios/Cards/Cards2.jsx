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
      <div className="w-[90%] h-72 bg-[url('/img/SERVICIOS-DE-RED-02.png')] bg-cover bg-center text-center grid rounded-3xl">
        <div className="flex items-end mb-0 justify-center font-bold">
          <p className="text-lg sm:text-2xl text-white mt-20">Servicios de VPN</p>
        </div>
        <div className="flex justify-end mr-10 text-white">
          
        <button onClick={() => setFlip(!flip)}><BiShare/></button>
        </div>
      </div>

      <div className="w-[90%] h-fit sm:h-72 bg-[#09284B] grid border-black border-2 rounded-3xl">
        <span className="m-10 text-white">
          <p>
            {" "}
            Mejoramos la seguridad de la red mediante nuestro servicio de red
            privada virtual y con ello creamos una mejor conexión interna.
          </p>
          <p>
            Nuestro servicio te permite que envíes y recibas datos sobre redes
            compartidas o públicas como si fuera una red privada, con toda la
            funcionalidad, seguridad y políticas de gestión de una red.
          </p>
        </span>
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
