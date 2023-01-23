import React, { useRef } from "react";
import bgImage from "../assets/banner.jpg";

import Slider from "react-slick";
export const Banner = () => {
  const sliderRef = useRef(null);
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
  };
  return (
    <div
      className={`w-[100%] h-[300px] bgImageBanner bg-cover flex items-center justify-center`}
    >
      <div className="text-white text-center ml-5 mr-5">
        <h1 className="text-lg mb-5 font-extrabold sm:text-4xl">
          ¿Por qué luminet?
        </h1>
        <div className="flex justify-center">
          <button className="mr-10" onClick={() => sliderRef.current.slickPrev()}><img src="/img/iconos/arrow (1).png" alt="" className="w-5 rotate-180" /></button>

          <div className="w-[310px] 
          sm:w-[560px] 
          md:w-[730px]
          lg:w-[900px]
          xl:w-[1000px]
          ">
            <Slider ref={sliderRef} {...settings}>
              <div>
                <h2 className="text-lg sm:text-3xl">
                  Ofrecemos
                  <span className="text-[#76BA22] font-semibold">
                    {" "}
                    soporte operativo y monitoreo
                  </span>{" "}
                  24/7 de la red de Fibra Óptica propia y externa
                </h2>
              </div>

              <div>
                <h2 className="text-lg sm:text-3xl">
                  Porque somos{" "}
                  <span className="text-[#76BA22] font-semibold">
                    caso de éxito
                  </span>{" "}
                  en la operación y mantenimiento de la{" "}
                  <span className="text-[#76BA22] font-semibold">
                    red de videogilancia
                  </span>{" "}
                  de Monterrey
                </h2>
              </div>

              <div>
                <h2 className="text-lg sm:text-3xl">
                  Brindamos{" "}
                  <span className="text-[#76BA22] font-semibold">
                    consultoría especializada
                  </span>{" "}
                  para mejorar el desempeño de la red, reubicación de sitios y
                  cambios de topología de la red{" "}
                </h2>
              </div>

              <div>
                <h2 className="text-lg sm:text-3xl">
                  Porque somos una empresa que tiene{" "}
                  <span className="text-[#76BA22] font-semibold">
                    amplia experiencia{" "}
                  </span>{" "}
                  para
                  <span className="text-[#76BA22] font-semibold">
                    operar redes propias y externas
                  </span>{" "}
                  , que se especializa en planta interna y planta externa{" "}
                </h2>
              </div>

              <div>
                <h2 className="text-lg sm:text-3xl">
                  Porque al elegirnos contarás con una empresa con más de{" "}
                  <span className="text-[#76BA22] font-semibold">
                    23 años de experiencia
                  </span>{" "}
                  en el ramo, con personal técnico capacitado y con las
                  herramientas requeridas para un plan de remediación
                </h2>
              </div>
            </Slider>
          </div>
          <button className="ml-10" onClick={() => sliderRef.current.slickNext()}> <img src="/img/iconos/arrow (1).png" alt="" className="w-5" /> </button>
        </div>
      </div>
    </div>
  );
};
