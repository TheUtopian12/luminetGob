import React, { useState } from "react";
import { Ciberseguridad } from "./Ciberseguridad";
import { ConstruccionC5 } from "./ConstruccionC5";
import { PlantaExt } from "./PlantaExt";
import { RedInternet } from "./RedInternet";

export const ContenidoServicios = ({ pagina }) => {
  return (
    <div className=" ">
      {pagina === "1" ? (
        <PlantaExt />
      ) : pagina === "2" ? (
        <Ciberseguridad />
      ) : pagina === "3" ? (
        <ConstruccionC5 />
      ) : (
        <RedInternet />
      )}
    </div>
  );
};
