import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return;
}

export const Ciberseguridad = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div>
      <div className="flex flex-col-reverse sm:flex sm:flex-row mt-20 gap-10 p-10 mr-10 ml-10">
        <div className="sm:w-[50%] sm:text-2xl ml-10 mr-10 sm:ml-16 text-[#143C6A]">
          <p className="mt-4">
            Contamos con los equipos más sofisticados de contramedidas
            electrónicas para ofrecer servicios de barrido electrónico que
            <span className="font-bold">
              {" "}
              garantizan la seguridad en áreas vulnerables
            </span>{" "}
            de los lugares analizados.
          </p>
          <p className="mt-4">
            Nuestro servicio es recomendado para lugares dónde se puede poner en
            peligro la seguridad e{" "}
            <span className="font-bold">
              información sensible y confidencial
            </span>{" "}
            del cliente.
          </p>
          <p className="mt-4">
            Por ejemplo: en salas de sesiones y despachos en las cuales se van a
            llevar a cabo reuniones y entrevistas importantes.
          </p>
        </div>
        <div className="sm:w-[50%]">
          <img
            src="https://d29jy8ovkd5kcx.cloudfront.net/wp-content/uploads/2022/06/09141348/WIIT_banche-1280x720.jpg.webp"
            alt=""
            className="rounded-3xl w-[400px] h-[400px]"
          />
        </div>
      </div>

      <div className="mt-10 ml-5 mr-5 sm:ml-32 sm:mr-32 ">
        <Accordion
          open={open === 1}
          icon={<Icon id={1} open={open} />}
          className="bg-gradient-to-b from-[#c9e3fd] to-[#eef6ff] rounded-xl"
        >
          <AccordionHeader onClick={() => handleOpen(1)}>
            <div className="h-20 w-full flex items-center gap-5 sm:justify-between ">
              <div className=" h-20 w-full flex items-center gap-5  sm:gap-5 ">
                <img
                  src="/img/iconos/information.png"
                  alt=""
                  className="w-10"
                />
                <h1 className="text-left text-[#143C6A] text-sm sm:text-2xl font-bold">
                  ¿Qué hacemos?
                </h1>
              </div>{" "}
              <div style={{ width: "40px" }} className="relative">
                <img src="/img/iconos/plus.png" alt="" />
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody className='bg-white'>
            <div className="grid place-items-center">
              <ul className="text-sm sm:text-xl ml-10 text-[#143C6A]">
                <li type="circle">
                 <span className="font-bold">Detección de todas las transmisiones</span> de audio, video y datos
                  espías cuya fuente pueden ser cámaras o micrófonos ocultos en
                  líneas de corriente o líneas telefónicas, sistemas espías en
                  pc, laptops o celulares.
                </li>
                <li type="circle">
                  Detección de <span className="font-bold">emisiones</span> de Wi-Fi, Bluetooth, Teléfonos
                  Celulares no autorizados.
                </li>
                <li type="circle">
                  Detección de <span className="font-bold">radiofrecuencias</span> de campo cercano no reconocidas.
                </li>
                <li type="circle">
                <span className="font-bold">Inspección física y ocular</span> especializada contra intrusiones.
                </li>
                <li type="circle">
                  Detección de <span className="font-bold">fugas acústicas o vibraciones mecánicas.</span>
                </li>
                <li type="circle">Detección de <span className="font-bold">interferencias.</span></li>
              </ul>
            </div>
            <div className="flex justify-center mt-10">
              <a href='#contacto'
                type="button"
                className="text-white bg-gradient-to-br from-[#08785c] to-[#8ec529] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
          className="bg-gradient-to-b from-[#c9e3fd] to-[#eef6ff] rounded-xl"
        >
          <AccordionHeader onClick={() => handleOpen(2)}>
            <div className="h-20 w-full flex items-center gap-5 sm:justify-between ">
              <div className=" h-20 w-full flex items-center gap-5  sm:gap-5 ">
                {" "}
                <img src="/img/iconos/tools.png" alt="" className="w-10" />
                <h1 className="text-left text-[#143C6A] text-sm sm:text-2xl font-bold">
                  ¿Cómo lo hacemos?
                </h1>
              </div>
              <div style={{ width: "40px" }} className="relative">
                <img src="/img/iconos/plus.png" alt="" />
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody className='bg-white'>
            <div className="grid">
              <h2 ><span className="font-bold text-[#143C6A] text-xl">Por medio de nuestros equipos especializados podemos detectar:</span></h2>
              <ul className="text-sm sm:text-xl ml-10 text-[#143C6A]">
                <li type="circle">
                 <span className="font-bold">Lentes de cámaras ocultas</span>  de forma rápida.
                </li>
                <li type="circle">
                 <span className="font-bold">Transmisiones</span> conocidas, desconocidas, ilegales, disruptivas o
                  interferentes.
                </li>
                <li type="circle">
                <span className="font-bold">Equipos ocultos</span>  por medio del calor emitido.
                </li>
                <li type="circle">
                <span className="font-bold">Transmisores activos y pasivos</span>, transmisores a través de
                  cableado y grabadoras.
                </li>
              </ul>
            </div>
            <div className="flex justify-center mt-10">
              <a href='#contacto'
                type="button"
                className="text-white bg-gradient-to-br from-[#08785c] to-[#8ec529] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
          open={open === 3}
          icon={<Icon id={3} open={open} />}
          className="bg-gradient-to-b from-[#c9e3fd] to-[#eef6ff] rounded-xl"
        >
          <AccordionHeader onClick={() => handleOpen(3)}>
          <div className="h-20 w-full flex items-center gap-5 sm:justify-between ">
              <div className=" h-20 w-full flex items-center gap-5  sm:gap-5 ">
                  <img src="/img/iconos/result.png" alt="" className="w-10" />
              <h1 className="text-left text-[#143C6A] text-sm sm:text-2xl font-bold">
                Resultados
              </h1>
              </div>
              <div style={{ width: "40px" }} className="relative">
                <img src="/img/iconos/plus.png" alt="" />
              </div>

            </div>
          </AccordionHeader>
          <AccordionBody className='bg-white'>
            <div className="grid">
              <ul className="text-sm sm:text-xl ml-10 text-[#143C6A]">
                <li type="circle">
                <span className="font-bold">Seguridad para redes</span> internas, externas e internet.
                </li>
                <li type="circle"><span className="font-bold">Control de ataques</span> de hackeo.</li>
                <li type="circle"><span className="font-bold">Detección de software</span> de espionaje.</li>
                <li type="circle"><span className="font-bold">Detección de micrófonos y cámaras.</span></li>
                <li type="circle">
                  Detección de ondas de Radio Frecuencia de campo cercano.
                </li>
                <li type="circle">
                <span className="font-bold">Seguridad y confianza total</span> para realizar reuniones y
                  conferencias importantes en los sitios analizados.
                </li>
                <li type="circle">Mantenemos absoluta <span className="font-bold">confidencialidad.</span></li>
              </ul>
            </div>
            <div className="flex justify-center mt-10">
              <a href='#contacto'
                type="button"
                className="text-white bg-gradient-to-br from-[#08785c] to-[#8ec529] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
