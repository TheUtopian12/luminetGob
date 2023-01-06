import React from "react";
import logo from "../assets/logo-luminet-c-v.png";
import logo_ift from "../assets/logo_ift_horizontal.png";
import cofetel from "../assets/Cofetel.jpg";
export const MoreInfo = () => {
  return (
    <div className="w-[99%] min-h-screen relative bg-white mt-10">
      <div className="flex justify-center">
        <img src={logo} alt="Logo" style={{ width: "150px" }} />
      </div>
      <div className="flex justify-center">
        <h2 className="text-xl sm:text-3xl mt-10">
          Empresa especializada en la contrucción de redes y centro de datos de
          primer nivel
        </h2>
      </div>

      <div className="w-[99%] h-[200px] mr-5 ml-5  sm:flex gap-10 justify-center items-center mt-24 mb-16">
        <h2 className="text-2xl w-[30%]">
          Empresa regulada y consensionada por el IFT
        </h2>
        <img src={logo_ift} alt="IFT" style={{ width: "200px" }} />
        <h2 className="text-2xl w-[25%]">
          {" "}
          1ER Concesionario Federal de Telecomunicaciones en radiofrecuencia
        </h2>
        <img src={cofetel} alt="CFT Logo" style={{ width: "200px" }} />
      </div>

      <div className="flex justify-center">
        <h1 className="text-xl sm:text-4xl mt-14 text-[#143c6a] font-bold">
          Nos destacamos por
        </h1>
      </div>

      <div className="grid grid-cols-2  gap-4 w-[80%] ml-64 pt-10">
        <div>
          <h1 className="text-2xl text-[#143c6a]">
            Aegurar la confidencialidad
          </h1>
          <p>
            de nuestros clientes y el manejo de información crítica de la red de
            monitoreo y videovigilancia.
          </p>
        </div>
        <div>
          <h1 className="text-2xl text-[#143c6a]">
            Contamos con software propio
          </h1>
          <p>para administrar incidencias de red y reportes ciudadanos.</p>
        </div>

        <div>
          <h1 className="text-2xl text-[#143c6a]">
            Somos independientes de las marcas de equipos
          </h1>
          <p>No representamos a ninguna empresa extranjera.</p>
        </div>
        <div>
          <h1 className="text-2xl text-[#143c6a]">
            Damos mantenimiento a la red de seguridad de Coahuila
          </h1>
          <p>La mejor red de seguridad evaluada de México.</p>
        </div>

        <div>
          <h1 className="text-2xl text-[#143c6a]">
            Cumplimos en tiempo y forma
          </h1>
          <p>
            Se firma un convenio en el cual se cumplan los acuerdos del plan de
            remediación.
          </p>
        </div>
        <div>
          <h1 className="text-2xl text-[#143c6a]">
            Contamos con Certificaciones
          </h1>
          <p>En instalación, manejo y operación de Fibra Óptica.</p>
        </div>
      </div>
    </div>
  );
};
