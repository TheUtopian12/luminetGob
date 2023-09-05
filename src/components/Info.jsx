import React, { useEffect, useState } from "react";
import { useTypedSuperpower } from "../hooks/useTypedSuperpower";

const superpowers = [
  "Coahuila",
  "CDMX",
  "Estado de México",
  "Guanajuato",
  "Jalisco",
  "Nuevo León",
  "Puebla",
  "Querétaro",
  "San Luis Potosí",
  "Tamaulipas",
  "Yucatán",
];
export const Info = () => {
  const { typedSuperpower, selectedSuperpower, phase, resume } =
    useTypedSuperpower(superpowers);

  return (
    <div
      className="h-[400px] sm:h-[200px] sm:flex sm:flex-row flex-col-reverse w-[100%]"
      id="ventajas"
    >
      <div className="bg-[#102845] h-[50%] sm:h-full sm:w-[50%] flex flex-col items-center justify-center">
        <h2 className="text-white text-center text-2xl">
          Redes propias en 10 estados de México
        </h2>

        <span
          className="text-[#A5FF36] font-bold text-center text-2xl blinking-cursor"
          arial-label={selectedSuperpower}
        >
          {typedSuperpower}
        </span>
      </div>
      <div className="bg-[#041A32] h-[50%] sm:w-[50%] sm:h-full flex items-center">
        <h2 className="text-white text-center text-2xl ml-8 mr-8">
          Somos los operadores de enlaces en microondas más grande de México con
          más de{" "}
          <span className="font-bold text-[#A5FF36]">
            23 años de experiencia
          </span>
        </h2>
      </div>
    </div>
  );
};
