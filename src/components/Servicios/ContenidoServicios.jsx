import React, { useState } from "react";
import { Ciberseguridad } from "./Ciberseguridad";
import { PlantaExt } from "./PlantaExt";

export const ContenidoServicios = ({ pagina }) => {
  return (
    <div className="min-h-screen ">
      {pagina === "1" ? (
        <PlantaExt />
      ) : pagina === "2" ? (
        <Ciberseguridad />
      ) : (
        <>Otras</>
      )}
    </div>
  );
};
