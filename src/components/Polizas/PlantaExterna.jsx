import React from "react";
import poste from "./poste.png";
const PlantaExterna = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="flex gap-16  w-[80%] h-[500px] items-center p-10 rounded-3xl">
        <div className='w-[300px]'>
          <img src={poste} alt="" className="rounded-2xl" />
        </div>
        <div className='w-[50%] text-white'>
          <h1 className="text-left text-3xl text-[#76BA22] font-bold mb-10">
            Planta Externa y Última Milla
          </h1>

          <ul className="list-disc">
            <li>Patrullajes de red de Fibra Óptica metropolitana.</li>
            <li>
              Mantenimientos preventivos y correctivos de red de Fibra Óptica y
              puntos de Monitoreo y Videovigilancia.
            </li>
            <li>Administración y Control de Puntos de Monitoreo.</li>
            <li>
              Indicadores clave de desempeño KPI's y SLA’s de red Fibra Óptica
              Planta Externa.
            </li>
            <li>Mantenimiento a sites clientes de Gobiernos.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlantaExterna;
