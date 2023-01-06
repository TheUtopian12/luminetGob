import React from "react";
import logoL from "../../assets/Cofetel.jpg";
export const PlantaExt = () => {
  return (
    <div className="flex flex-col pl-20">
      <div className="flex gap-10">
        <img src={logoL} alt="" style={{ width: "299px" }} />
        <h1 className="text-2xl font-bold">
          Construcción e instalación de puntos de monitoreo para cámaras en vía
          pública
        </h1>
      </div>

      <div className="flex gap-10">
        <img src={logoL} alt="" style={{ width: "299px" }} />

        <div className="flex-col">
          <h1 className="text-2xl font-bold">
            Ofrecemos una solución integral para la implementación de la red de
            voz, video y datos, mediante un equipo especializado en construccion
            de fibra óptica.
          </h1>
          <h2 className="text-xl mt-5">Este servicio incluye:</h2>
          <ul className="text-xl mt-5">
            <li type="circle">
              La construcción aérea (mediante posteria o microondas) en vía
              pública o privada.
            </li>
            <li type="circle">
              Equipos de conexión, red de fibra óptica, cámaras y equipamiento
              para el site.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-10 mt-12">
        <img src={logoL} alt="" style={{ width: "299px" }} />
        <h1 className="text-2xl font-bold">
          Monitoreo de red y cámaras en vía pública
        </h1>
      </div>

      <div className="flex gap-10">
        <img src={logoL} alt="" style={{ width: "299px" }} />

        <div className="flex-col">
          <ul className="text-xl mt-5">
            <li type="circle">
              Configuracion e implementación del sistema de cámaras.
            </li>
            <li type="circle">Monitoreo de red y del sistema de cámaras.</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-10">
        <img src={logoL} alt="" style={{ width: "299px" }} />
        <h1 className="text-2xl font-bold">Mantenimiento de red</h1>
      </div>

      <div className="flex gap-10">
        <div>
          <img src={logoL} alt="" style={{ width: "299px", height: "auto" }} />
        </div>
        <div className="flex-col">
          <h1 className="text-2xl font-bold">
            Nos especializamos en proyectos de mantenimiento integral a sistemas
            de redes de voz, video y datos.
          </h1>
          <h2 className="text-xl mt-5">Este servicio incluye:</h2>
          <ul className="text-xl mt-5">
            <li type="circle">
              Reparación en la red de fibra óptica al interior o exterior.
            </li>
            <li type="circle">
              Sustitución por falla de la red de fibra óptica al interior o
              exterior.
            </li>

            <li type="circle">Configuración y cambio de equipo de red.</li>
            <li type="circle">
              Configuración y cambio de cámaras al interior o exterior.
            </li>
            <li type="circle">
              Mantenimiento preventivo y correctivo a puntos de videovigilancia.
            </li>
            <li type="circle">
              Mantenimiento preventivo y correctivo a la red de datos.
            </li>
            <li type="circle">
              Validación del estado de circuitos y cableado.
            </li>
            <li type="circle">Detección de puntos de riesgo.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
