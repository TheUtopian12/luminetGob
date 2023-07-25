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
  return;
}
export const PlantaExt = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="grid grid-cols-1 m-10 gap-2 ml-[10%] mr-[10%]">
      <Accordion
        open={open === 1}
        icon={""}
        className="sm:bg-gradient-to-b from-[#c9e3fd] to-[#ffffff00]  rounded-xl"
      >
        <AccordionHeader onClick={() => handleOpen(1)}>
          <div className=" h-20 w-full flex items-center gap-5 sm:justify-between ">
            <div className="flex items-center gap-5 ml-10">
              <div>
                <img
                  src="/img/iconos/cctv-camera.png"
                  alt=""
                  className="w-14 lg:w-20"
                />
                {/*Ajustar icono y poner en dos renglones */}
              </div>
              <div>
                <h1 className="text-left text-[#143C6A] text-sm sm:text-2xl font-bold ">
                  Construcción e instalación de puntos de monitoreo para cámaras
                  en vía pública
                </h1>
              </div>
            </div>

            <div className="relative w-[60px] sm:w-[45px] lg:w-[40px]">
              <img src="/img/iconos/plus.png" alt="" />
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="bg-white">
          <Construccion />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        icon={<Icon id={2} open={open} />}
        className="sm:bg-gradient-to-b from-[#c9e3fd] to-[#ffffff00]  rounded-xl"
      >
        <AccordionHeader onClick={() => handleOpen(2)}>
          <div className="h-20 w-full flex items-center gap-5 sm:justify-between ">
            <div className="flex items-center gap-5 ml-10">
              <div>
                <img
                  src="/img/iconos/icon.png"
                  alt=""
                  className="w-10 lg:w-20"
                />
              </div>

              <div>
                <h1 className="text-left text-[#143C6A] text-sm sm:text-2xl font-bold ">
                  Monitoreo de red y cámaras en vía pública y red privada.
                </h1>
              </div>
            </div>

            <div className="relative w-[50px] sm:w-[35px] lg:w-[40px]">
              <img src="/img/iconos/plus.png" alt="" />
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="bg-white">
          <Monitoreo />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        icon={<Icon id={3} open={open} />}
        className="sm:bg-gradient-to-b from-[#c9e3fd] to-[#ffffff00]  rounded-xl"
      >
        <AccordionHeader onClick={() => handleOpen(3)}>
          <div className="h-20 w-full flex items-center gap-5 sm:justify-between ">
            <div className="flex items-center gap-5 ml-10">
              <div>
                <img
                  src="/img/iconos/maintenance(1).png"
                  alt=""
                  className="w-8 sm:w-10 lg:w-20"
                />
              </div>
              <div>
                <h1 className="text-left text-[#143C6A] text-sm sm:text-2xl font-bold ">
                  Mantenimiento de red
                </h1>
              </div>
            </div>

            <div className="relative w-[20px] sm:w-[25px] lg:w-[40px]">
              <img src="/img/iconos/plus.png" alt="" />
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="bg-white">
          <Mantenimiento />
        </AccordionBody>
      </Accordion>
    </div>
  );
};
