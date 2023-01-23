import React from "react";
import { Cards } from "./Cards/Cards";
import { Cards2 } from "./Cards/Cards2";
import { Cards3 } from "./Cards/Cards3";
import { Cards4 } from "./Cards/Cards4";
export const RedInternet = () => {
  return (
    <div className="flex flex-col place-content-center place-items-center justify-center sm:m-10 mb-10">
      <div className="ml-10 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div>
            <Cards />
          </div>
          <div>
            <Cards2 />
          </div>
          <div>
            <Cards3 />
          </div>
          <div>
            <Cards4 />
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h1 className="text-2xl">
          Para mayor información de nuestros servicios de internet y redes
          visita
        </h1>
      </div>
      <button className="text-white bg-gradient-to-r from-[#00745F] to-[#95C926] w-[50%] sm:w-[20%]  sm:text-2xl rounded-2xl text-lg hover:bg-[#598d19] mt-10">
        luminet.com.mx
      </button>
    </div>
  );
};
