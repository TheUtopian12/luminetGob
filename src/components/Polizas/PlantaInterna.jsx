import React from "react";
import poste from "./poste.png";
const PlantaInterna = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="flex gap-16 bg-[#E1ECF1] w-[50%] h-[500px] items-center p-10 rounded-3xl">
        <div className='w-[300px]'>
          <img src={poste} alt="" className="rounded-2xl" />
        </div>
        <div className='w-[50%]'>
          <h1 className="text-left text-3xl text-[#76BA22] font-bold mb-10">
            Planta interna, Mantenimiento de red y site de clientes
          </h1>

          <p className="mb-5">
            Revisión del funcionamiento de routers, switches, señal de proveedor
            de internet y cableado.
          </p>
          <p>
            Así como inspección de configuración, la disposición y distribución
            de los cables.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlantaInterna;
