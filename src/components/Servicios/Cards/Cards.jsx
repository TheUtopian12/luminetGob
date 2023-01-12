import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
export const Cards = () => {
  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip
      isFlipped={flip}
      flipDirection=""
      flipSpeedFrontToBack={1.6}
      flipSpeedBackToFront={1.6}
    >
      <div className="w-96 h-96 bg-[url('/img/internet.jpg')] bg-cover text-center grid">
        <div>
          <p className="text-2xl text-white mt-20">
            Servicios de interconexion para oficinas del sector público
          </p>
        </div>
        <div className="flex justify-center text-white">
          <button onClick={() => setFlip(!flip)}>Flip</button>
        </div>
      </div>

      <div className="w-96 h-96 bg-gray-100 grid border-black border-2">
        <p className="m-10">
          Servicio de red totalmente gestionado y seguro que ofrece servicios de
          alta calidad para conectar diferentes oficinas o dependencias entre
          sí: redes filiales, infraestructuras o aplicaciones en la nube,
          datacenters y mucho más.
        </p>
        <div className="flex justify-center gap-24">
          <button onClick={() => setFlip(!flip)}>Flip</button>
          <button onClick={() => setFlip(!flip)}>Flip</button>
        </div>
      </div>
    </ReactCardFlip>
  );
};
