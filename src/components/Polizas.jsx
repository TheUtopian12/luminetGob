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
    <div className="mt-10 h-[100vh] w-full" id="polizas">
      <h1 className="text-center text-2xl sm:text-4xl text-[#143C6A] font-bold">
        Contamos con pólizas de servicio y mantenimiento
      </h1>

      <center className="flex justify-center">
        <button
          className="relative translate-x-[20px] sm:translate-x-[80px] z-[90]"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <img
            src="/img/iconos/arrow (1).png"
            alt=""
            className="w-5 rotate-180"
          />
        </button>
        <div className="bg-[#09284B] mt-10 rounded-3xl flex justify-center lg:w-[900px] h-[550px] lg:h-[600px]">
          <div className="flex justify-center">
            <div
              className="w-[380px] 
          sm:w-[560px] 
          md:w-[730px]
          lg:w-[900px]
          xl:w-[900px]
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
          </div>
        </div>
        <button
          className="translate-x-[-20px] sm:translate-x-[-80px]"
          onClick={() => sliderRef.current.slickNext()}
        >
          {" "}
          <img src="/img/iconos/arrow (1).png" alt="" className="w-5" />{" "}
        </button>
      </center>
    </div>
  );
};

export default Polizas;
