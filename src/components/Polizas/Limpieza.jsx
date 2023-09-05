import React from "react";
import DrawerPolizas from "../ui/DrawerPolizas";
import poste from "../../assets/Polizas/Rack 03.jpeg";
const Limpieza = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="sm:flex gap-16  lg:w-[80%] h-[300px] sm:h-[500px] items-center p-10 rounded-3xl">
        <div className="w-[300px]">
          <img
            loading="lazy"
            src={poste}
            alt=""
            className="rounded-2xl h-[300px] sm:h-[500px]"
          />
        </div>
        <div className="sm:w-[50%] text-white">
          <h1 className="text-center text-xl text-[#76BA22] font-bold mb-10">
            Limpieza técnica de salas <br className="md:hidden" /> de sistemas{" "}
          </h1>

          <p className="mb-5 text-lg text-left hidden sm:grid">
            Limpieza de Hardware, sistemas de energía, ventiladores, superficies
            verticales y periféricas y del suelo técnico para minimizar el
            riesgo de propagación de elementos contaminantes entre ellos polvo,
            material férrico, “pelos de zinc” que puedan generar
            sobrecalentamiento en los equipos y dificultar el flujo del aire en
            los mismos.
          </p>
          <div className="flex justify-center gap-24 mt-5">
            <a
              href="#contacto"
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
                <p className="mb-5 text-lg text-left  sm:hidden grid">
                  Limpieza de Hardware, sistemas de energía, ventiladores,
                  superficies verticales y periféricas y del suelo técnico para
                  minimizar el riesgo de propagación de elementos contaminantes
                  entre ellos polvo, material férrico, “pelos de zinc” que
                  puedan generar sobrecalentamiento en los equipos y dificultar
                  el flujo del aire en los mismos.
                </p>
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

export default Limpieza;
