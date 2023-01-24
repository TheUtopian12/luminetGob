import React from "react";
import { Cards } from "./Cards/Cards";
import { Cards2 } from "./Cards/Cards2";
import { Cards3 } from "./Cards/Cards3";
import { Cards4 } from "./Cards/Cards4";

import { Button } from "@material-tailwind/react";
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
      <button
          type="button"
          class="text-white bg-gradient-to-br from-[#08785c] to-[#8ec529] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          {" "}
          luminet.com.mx
        </button>
      
    </div>
  );
};
