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
     
      <Button color="green" variant="gradient" className="w-44 mb-10 sm:mb-0">
      luminet.com.mx
          </Button>
    </div>
  );
};
