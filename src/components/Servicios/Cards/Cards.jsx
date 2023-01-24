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
      <div className="w-[90%] h-72 sm:h-72 bg-[url('/img/SERVICIOS-DE-RED-01.png')] bg-cover bg-center text-center grid rounded-3xl">
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

      <div className="w-[90%] h-fit sm:h-72 bg-[#09284B] grid border-black border-2 rounded-3xl">
        <p className="m-10 text-white text-center pt-10">
          Servicio de red totalmente gestionado y seguro que ofrece servicios de
          alta calidad para conectar diferentes oficinas o dependencias entre
          sí: redes filiales, infraestructuras o aplicaciones en la nube,
          datacenters y mucho más.
        </p>
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
