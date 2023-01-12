import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
export const Cards4 = () => {
  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip
      isFlipped={flip}
      flipDirection=""
      flipSpeedFrontToBack={1.6}
      flipSpeedBackToFront={1.6}
    >
      <div className="w-96 h-96 bg-[url('/img/voip.jpg')] bg-contain  text-center grid">
        <div>
          <p className="text-2xl text-white mt-20">VoIP</p>
        </div>
        <div className="flex justify-center text-white">
          <button onClick={() => setFlip(!flip)}>Flip</button>
        </div>
      </div>

      <div className="w-96 h-96 bg-gray-100 grid border-black border-2">
        <span className="m-10">
          <p>
            {" "}
            Nuestro servicio de telefonía IP te permite lograr una comunicación
            fácil, efectiva y flexible.
          </p>
          <p>
            Realiza llamadas seguras desde cualquier lugar al configura tu
            extensión telefónica en tus dispositivos móviles con alta calidad de
            audio en las llamadas.
          </p>
        </span>
        <div className="flex justify-center gap-24">
          <button onClick={() => setFlip(!flip)}>Flip</button>
          <button onClick={() => setFlip(!flip)}>Flip</button>
        </div>
      </div>
    </ReactCardFlip>
  );
};
