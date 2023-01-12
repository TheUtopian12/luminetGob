import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export const Ciberseguridad = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div>
      <div className="flex flex-col-reverse sm:flex sm:flex-row mt-20 gap-10">
        <div className="sm:w-[60%] text-2xl ml-4 mr-4 sm:ml-16">
          <p className="mt-4">
            Contamos con los equipos más sofisticados de contramedidas
            electrónicas para ofrecer servicios de barrido electrónico que
            garantizan la seguridad en áreas vulnerables de los lugares
            analizados.
          </p>
          <p className="mt-4">
            Nuestro servicio es recomendado para lugares dónde se puede poner en
            peligro la seguridad e información sensible y confidencial del
            cliente.
          </p>
          <p className="mt-4">
            Por ejemplo: en salas de sesiones y despachos en las cuales se van a
            llevar a cabo reuniones y entrevistas importantes.
          </p>
        </div>
        <div>
          <img
            src="https://d29jy8ovkd5kcx.cloudfront.net/wp-content/uploads/2022/06/09141348/WIIT_banche-1280x720.jpg.webp"
            alt=""
          />
        </div>
      </div>

      <div className="mt-10 ml-32 ">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            <h1 className="text-3xl mb-10 font-bold">¿Qué hacemos?</h1>
          </AccordionHeader>
          <AccordionBody>
            <div className="grid place-items-center">
              <ul className="text-2xl ml-10">
                <li type="circle">
                  Detección de todas las transmisiones de audio, video y datos
                  espías cuya fuente pueden ser cámaras o micrófonos ocultos en
                  líneas de corriente o líneas telefónicas, sistemas espías en
                  pc, laptops o celulares.
                </li>
                <li type="circle">
                  Detección de emisiones de Wi-Fi, Bluetooth, Teléfonos
                  Celulares no autorizados.
                </li>
                <li type="circle">
                  Detección de radiofrecuencias de campo cercano no reconocidas.
                </li>
                <li type="circle">
                  Inspección física y ocular especializada contra intrusiones.
                </li>
                <li type="circle">
                  Detección de fugas acústicas o vibraciones mecánicas.
                </li>
                <li type="circle">Detección de interferencias.</li>
              </ul>
            </div>
          </AccordionBody>
        </Accordion>
      </div>

      <div className="mt-10 ml-32 ">
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            <h1 className="text-3xl mb-10 font-bold">¿Cómo lo hacemos?</h1>
          </AccordionHeader>
          <AccordionBody>
            <div className="grid">
              <ul className="text-2xl ml-10">
                <li type="circle">
                  Lentes de cámaras ocultas de forma rápida.
                </li>
                <li type="circle">
                  Transmisiones conocidas, desconocidas, ilegales, disruptivas o
                  interferentes.
                </li>
                <li type="circle">
                  Equipos ocultos por medio del calor emitido.
                </li>
                <li type="circle">
                  Transmisores activos y pasivos, transmisores a través de
                  cableado y grabadoras.
                </li>
              </ul>
            </div>
          </AccordionBody>
        </Accordion>
      </div>

      <div className="mt-10 ml-32 ">
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            <h1 className="text-3xl mb-10 font-bold">Resultados</h1>
          </AccordionHeader>
          <AccordionBody>
            <div className="grid">
              <ul className="text-2xl ml-10">
                <li type="circle">
                  Seguridad para redes internas, externas e internet.
                </li>
                <li type="circle">Control de ataques de hackeo.</li>
                <li type="circle">Detección de software de espionaje.</li>
                <li type="circle">Detección de micrófonos y cámaras.</li>
                <li type="circle">
                  Detección de ondas de Radio Frecuencia de campo cercano.
                </li>
                <li type="circle">
                  Seguridad y confianza total para realizar reuniones y
                  conferencias importantes en los sitios analizados.
                </li>
                <li type="circle">Mantenemos absoluta confidencialidad.</li>
              </ul>
            </div>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};
