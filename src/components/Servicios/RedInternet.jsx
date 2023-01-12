import React from "react";
import { Cards } from "./Cards/Cards";
import { Cards2 } from "./Cards/Cards2";
import { Cards3 } from "./Cards/Cards3";
import { Cards4 } from "./Cards/Cards4";
export const RedInternet = () => {
  return (
    <div className="flex justify-center m-10">
      <div className="grid grid-cols-2 gap-40">
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
  );
};
