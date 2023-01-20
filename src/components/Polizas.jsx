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
    arrows: true,

    className: "react__slick__slider__parent",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}>
        Next
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}>
        Arrow
      </div>
    );
  }
  return (
    <div className="mt-10 min-h-screen w-full">
      <h1 className="text-center text-4xl text-[#143C6A] font-bold">
        Contamos con pólizas de servicio y mantenimiento
      </h1>
      <div className="bg-[#09284B] ml-20 mr-20 rounded-3xl mt-10">
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
  );
};

export default Polizas;
