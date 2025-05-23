import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return;
}

export const ConstruccionC5 = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div>
      <div className="flex flex-col-reverse sm:flex sm:flex-row mt-20 gap-10 p-10 sm:ml-16 sm:mr-16 ">
        <div className="sm:w-[50%] sm:text-lg lg:text-2xl  sm:mr-6 sm:ml-6 lg:mr-10 lg:ml-10 text-[#143C6A]">
          <p className="mt-4">
            La construcción de C2, C4 y C5 empieza en la selección de los
            <span className="font-bold"> mejores sistemas tecnológicos</span> de
            video, cómputo, ruteo, centro de datos, climatización, seguridad
            física, entre otros rubros, y termina con la{" "}
            <span className="font-bold">entrega llave en mano</span> para
            nuestros clientes.
          </p>
          <p className="mt-4">
            <span>
              Nuestros más de{" "}
              <span className="font-bold">23 años de experiencia</span>
            </span>{" "}
            como operador de Telecomunicaciones Federales y de centros de datos,
            nos han permitido desarrollar una{" "}
            <span className="font-bold">metodología única</span> en el diseño de
            centros de control y comando.
          </p>
        </div>
        <div className=" sm:w-[50%]">
          <img
            loading="lazy"
            src="/img/imagen c4.jpg"
            alt=""
            className="rounded-3xl sm:w-[500px] sm:h-[300px] translate-y-[20px]"
          />
        </div>
      </div>

      <div className="mt-10 ml-5 mr-5 sm:ml-32 sm:mr-32 ">
        <Accordion
          open={open === 1}
          icon={<Icon id={1} open={open} />}
          className="sm:bg-gradient-to-b from-[#c9e3fd] to-[#eef6ff] rounded-xl"
        >
          <AccordionHeader onClick={() => handleOpen(1)}>
            <div className="h-20 w-full flex items-center gap-5 sm:justify-between ">
              <div className="h-20 w-full flex items-center gap-5 ml-10  sm:gap-5 ">
                <img
                  loading="lazy"
                  src="/img/iconos/iconos.png"
                  alt=""
                  className="w-14 sm:w-14"
                />
                <h1 className="text-left text-[#143C6A] text-sm sm:text-2xl font-bold">
                  Áreas de experiencia
                </h1>
              </div>{" "}
              <div style={{ width: "40px" }} className="relative">
                <img loading="lazy" src="/img/iconos/plus.png" alt="" />
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody className="bg-white">
            <div className="grid place-items-start">
              <ul className="text-sm sm:text-xl ml-20 text-[#143C6A]">
                <li type="circle">
                  Lineamientos del <span className="font-bold">CNI </span>
                  (Centro Nacional de Inteligencia).
                </li>
                <li type="circle">Planta interna y planta externa</li>
                <li type="circle">Radiocomunicación</li>
                <li type="circle">Videovigilancia</li>
                <li type="circle">Videocontrol</li>
                <li type="circle">Centros de datos</li>
                <li type="circle">Redes internas</li>
                <li type="circle">
                  Redes de transporte en fibra óptica y microondas
                </li>
                <li type="circle">Ciberseguridad</li>
                <li type="circle">
                  Software de procesamiento de video (tecnología propia)
                </li>
                <li type="circle">
                  Software para control de bases de datos (tecnología propia)
                </li>
                <li type="circle">Atención ciudadana </li>
              </ul>
            </div>
            <div className="flex justify-center mt-10">
              <a
                href="#contacto"
                type="button"
                className="text-white sm:bg-gradient-to-br from-[#08785c] to-[#8ec529] hover:sm:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                {" "}
                Más información
              </a>
            </div>
          </AccordionBody>
        </Accordion>
      </div>

      <div className="mt-10 ml-5 mr-5 sm:ml-32 sm:mr-32 ">
        <Accordion
          open={open === 2}
          icon={<Icon id={2} open={open} />}
          className="sm:bg-gradient-to-b from-[#c9e3fd] to-[#eef6ff] rounded-xl"
        >
          <AccordionHeader onClick={() => handleOpen(2)}>
            <div className="h-20 w-full flex items-center gap-5 sm:justify-between ">
              <div className=" h-20 w-full flex items-center gap-5 ml-10 sm:gap-5 ">
                {" "}
                <img
                  loading="lazy"
                  src="/img/iconos/icono marcador.png"
                  alt=""
                  className="w-14 sm:w-16"
                />
                <h1 className="text-left text-[#143C6A] text-sm sm:text-2xl font-bold">
                  Nuestras ventajas competitivas
                </h1>
              </div>
              <div style={{ width: "40px" }} className="relative">
                <img loading="lazy" src="/img/iconos/plus.png" alt="" />
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody className="bg-white">
            <div className="grid">
              <div className="ml-10"></div>

              <ul className="text-sm sm:text-xl ml-20 text-[#143C6A] pt-5">
                <li type="circle">El mejor precio del mercado. </li>
                <li type="circle">
                  Diseños y operación alineados al{" "}
                  <span className="font-bold">CNI</span> (Centro Nacional de
                  Inteligencia).
                </li>
                <li type="circle">
                  Garantizamos el{" "}
                  <span className="font-bold">cumplimiento de las normas</span>{" "}
                  federales y de organismos internacionales. 
                </li>
                <li type="circle">
                  Contamos con un{" "}
                  <span className="font-bold">equipo propio de expertos</span>,
                  no subcontratamos. 
                </li>
                <li type="circle">Más de 23 años de experiencia. </li>
                <li type="circle">
                  Somos operadores Federales de Telecomunicaciones. 
                </li>
                <li type="circle">Operamos Centros de Datos de privados.</li>
              </ul>
            </div>
            <div className="flex justify-center mt-10">
              <a
                href="#contacto"
                type="button"
                className="text-white sm:bg-gradient-to-br from-[#08785c] to-[#8ec529] hover:sm:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                {" "}
                Más información
              </a>
            </div>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};
