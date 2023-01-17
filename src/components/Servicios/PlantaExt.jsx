import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Construccion from "./PlantaExtDocs/Construccion";
import Monitoreo from "./PlantaExtDocs/Monitoreo";
import Mantenimiento from "./PlantaExtDocs/Mantenimiento";

function Icon({ id, open }) {
  return <img src="/img/iconos/plus.png" alt="" srcset="" />;
}
export const PlantaExt = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className="m-10">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          <div className=" h-20 w-full flex items-center gap-36">
            <img src="/img/iconos/cctv-camera.png" alt="" className="w-20" />
            <h1 className="text-left text-[#143C6A] text-2xl font-bold">
              Construcción e instalación de puntos de monitoreo para cámaras en
              vía pública
            </h1>
          </div>
        </AccordionHeader>
        <AccordionBody>
          <Construccion />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          <div className=" h-20 w-full flex items-center  gap-36">
            <img
              src="/img/iconos/internet-security.png"
              alt=""
              className="w-20"
            />
            <h1 className="text-left text-[#143C6A] text-2xl font-bold">
              Monitoreo de red y cámaras en vía pública y red privada.
            </h1>
          </div>
        </AccordionHeader>
        <AccordionBody>
          <Monitoreo />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          <div className=" h-20 w-full flex items-center  gap-36">
            <img src="/img/iconos/tools.png" alt="" className="w-20" />
            <h1 className="text-left text-[#143C6A] text-2xl font-bold">
              Mantenimiento de red
            </h1>
          </div>
        </AccordionHeader>
        <AccordionBody>
          <Mantenimiento />
        </AccordionBody>
      </Accordion>
    </div>
  );
};
