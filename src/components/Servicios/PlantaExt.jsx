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
export const PlantaExt = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className="m-10">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          Construcción e instalación de puntos de monitoreo para cámaras en vía
          pública
        </AccordionHeader>
        <AccordionBody>
        <Construccion/>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Monitoreo de red y cámaras en vía pública y red privada.
        </AccordionHeader>
        <AccordionBody>
       <Monitoreo/>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Mantenimiento de red
        </AccordionHeader>
        <AccordionBody>
        <Mantenimiento/>
        </AccordionBody>
      </Accordion>
    </div>
  );
};
