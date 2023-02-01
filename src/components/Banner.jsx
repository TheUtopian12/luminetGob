import React, { useRef } from "react";
import bgImage from "../assets/banner.jpg";
import { AiOutlinePauseCircle,AiOutlinePlayCircle } from "react-icons/ai";
import Slider from "react-slick";
export const Banner = () => {
  const sliderRef = useRef(null);
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: false,
  };
  return (
    <div
      className={`w-[100%] h-[310px] bgImageBanner bg-cover flex items-center justify-center`}
      id='servicios'
    >
      <div className="text-white text-center ml-5 mr-5 mb-10">
        <h1 className="text-lg  mb-5 font-extrabold sm:text-5xl mt-10">
          ¿Por qué luminet?
        </h1>
        <div className="flex justify-center ">
          <button className="mr-10" onClick={() => sliderRef.current.slickPrev()}><img src="/img/iconos/arrow (1).png" alt="" className="w-5 rotate-180" /></button>

          <div className="mt-5 w-[310px] 
          sm:w-[560px] 
          md:w-[730px]
          lg:w-[900px]
          xl:w-[1200px]
          ">
            <Slider ref={sliderRef} {...settings}>
              <div>
                <h2 className="text-lg sm:text-[35px] sm:leading-[50px]">
                  Ofrecemos
                  <span className="text-[#76BA22] font-semibold">
                    {" "}
                    soporte operativo y monitoreo
                  </span>{" "}
                  24/7 de la red de Fibra Óptica propia y externa
                </h2>
              </div>

              <div>
                <h2 className="text-lg sm:text-[35px] sm:leading-[50px]">
                  Somos{" "}
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
                <h2 className="text-lg sm:text-[35px] sm:leading-[50px]">
                  Brindamos{" "}
                  <span className="text-[#76BA22] font-semibold">
                    consultoría especializada
                  </span>{" "}
                  para mejorar el desempeño de la red, reubicación de sitios y
                  cambios de topología de la red{" "}
                </h2>
              </div>

              <div>
                <h2 className="text-lg sm:text-[35px] sm:leading-[50px]">
                  Tenemos{" "}
                  <span className="text-[#76BA22] font-semibold">
                    amplia experiencia{" "}
                  </span>{" "}
                  para{" "}
                  <span className="text-[#76BA22] font-semibold">
                    operar redes propias y externas
                  </span>
                  , que se especializa en planta interna y externa{" "}
                </h2>
              </div>

              <div>
                <h2 className="text-lg sm:text-[33px] sm:leading-[50px]">
                  Tenemos más de{" "}
                  <span className="text-[#76BA22] font-semibold">
                    23 años de experiencia
                  </span>
                  , con personal técnico capacitado y con
                  herramientas requeridas para un plan de remediación
                </h2>
              </div>
            </Slider>
          </div>
          <button className="ml-10" onClick={() => sliderRef.current.slickNext()}> <img src="/img/iconos/arrow (1).png" alt="" className="w-5" /> </button>
        </div>
       <div className="flex gap-5 justify-center ">
       <button className="mt-5 sm:mt-5  text-[#76BA22] hover:text-white" onClick={() => sliderRef.current.slickPause()}> <AiOutlinePauseCircle size={30}/> </button>
        <button className="mt-5 sm:mt-5 text-[#76BA22] hover:text-white" onClick={() => sliderRef.current.slickPlay()}> <AiOutlinePlayCircle size={30}/> </button>
       
       </div>
      </div>
      
    </div>
  );
};
