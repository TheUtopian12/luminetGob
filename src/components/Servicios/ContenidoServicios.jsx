import React, { useState } from "react";
import { Ciberseguridad } from "./Ciberseguridad";
import { PlantaExt } from "./PlantaExt";
import { RedInternet } from "./RedInternet";

export const ContenidoServicios = ({ pagina }) => {
  return (
    <div className=" ">
      {pagina === "1" ? (
        <PlantaExt />
      ) : pagina === "2" ? (
        <Ciberseguridad />
      ) : (
       <RedInternet/>
      )}
    </div>
  );
};
