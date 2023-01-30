import React from "react";
import poste from "../../assets/Polizas/poste.png";
import DrawerPolizas from "../ui/DrawerPolizas";
const PlantaExterna = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="sm:flex gap-16  sm:w-[80%]  sm:h-[500px] items-center p-10 rounded-3xl">
        <div className='w-[300px]'>
          <img src={poste} alt="" className="rounded-2xl h-[300px]" />
        </div>
        <div className='sm:w-[50%] text-white'>
          <h1 className="sm:text-left text-xl text-[#76BA22] font-bold mb-10">
            Planta Externa y <br /> Última Milla
          </h1>

          <ul className="list-disc text-lg text-left hidden sm:grid">
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
          <div className="flex justify-center gap-24 mt-5">
        <a href='#contacto'
          type="button"
          className="text-white bg-gradient-to-br from-[#08785c] to-[#8ec529] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 hidden sm:grid"
        >
          {" "}
          Más información
        </a>
        </div>

        <DrawerPolizas
            texto={
              <div className="m-10">
              <ul className="list-disc text-lg text-left grid sm:hidden">
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
                <div className="flex justify-center gap-24 mt-5">
                  <a
                    href="#contacto"
                    type="button"
                    className="text-white bg-gradient-to-br from-[#08785c] to-[#8ec529] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    {" "}
                    Más información
                  </a>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PlantaExterna;
