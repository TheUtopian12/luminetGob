import React, { Component, useRef } from "react";
import Slider from "react-slick";
import Accesos from "./Polizas/Accesos";
import Alimentacion from "./Polizas/Alimentacion";
import Enlaces from "./Polizas/Enlaces";
import Limpieza from "./Polizas/Limpieza";
import PlantaExterna from "./Polizas/PlantaExterna";
import PlantaInterna from "./Polizas/PlantaInterna";
import Torres from "./Polizas/Torres";

const Polizas = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    className: "react__slick__slider__parent",
  
  };


  return (
    <div className="mt-10 min-h-screen w-full">
      <h1 className="text-center text-2xl sm:text-4xl text-[#143C6A] font-bold">
        Contamos con pólizas de servicio y mantenimiento
      </h1>
      <div className="bg-[#09284B] ml-2 mr-2 sm:ml-20 sm:mr-20 rounded-3xl mt-10">
        <div className="flex justify-center">
          <button
            className="mr-10"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <img
              src="/img/iconos/arrow (1).png"
              alt=""
              className="w-5 rotate-180"
            />
          </button>

          <div
            className="w-[310px] 
          sm:w-[560px] 
          md:w-[730px]
          lg:w-[900px]
          xl:w-[1200px]
          "
          >
            <Slider ref={sliderRef} {...settings}>
              <div>
                <PlantaExterna />
              </div>
              <div>
                <PlantaInterna />
              </div>
              <div>
                <Alimentacion />
              </div>
              <div>
                <Limpieza />
              </div>
              <div>
                <Accesos />
              </div>

              <div>
                <Enlaces />
              </div>

              <div>
                <Torres />
              </div>
            </Slider>
          </div>
          <button className="ml-10" onClick={() => sliderRef.current.slickNext()}> <img src="/img/iconos/arrow (1).png" alt="" className="w-5" /> </button>
       
        </div>
      </div>
    </div>
  );
};

export default Polizas;
