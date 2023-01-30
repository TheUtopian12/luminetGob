import React, { Component, useRef } from "react";
import Slider from "react-slick";
const Carousels = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    speed: 2000,
    cssEase: "linear",
    autoplay:true,
    
    autoplaySpeed: 8000,
  };
  return (
    <div
      className="w-[100%] h-[60vh] text-center mt-48 mb-24 bg-cover bgCarousel"
      id="clientes"
    >
      <center>
        <h1 className="text-center text-4xl text-white font-bold mb-14 pt-14">
          {" "}
          Clientes{" "}
        </h1>
        <div className="flex justify-between pl-10 pr-10">
          <button className="" onClick={() => sliderRef.current.slickPrev()}>
            <img
              src="/img/iconos/arrow (1).png"
              alt=""
              className="w-5 rotate-180"
            />
          </button>

          <center
            className="mt-5 w-[310px] 
          sm:w-[560px] 
          md:w-[730px]
          lg:w-[900px]
          xl:w-[1300px]
          "
          >
            <Slider ref={sliderRef} {...settings}>
              <div className="pl-0">
                <img
                  src="/img/LogosCliente/coahuila.png"
                  alt=""
                  className="sm:w-[400px]  rounded-2xl bg-white"
                />
                <h2 className="text-white pr-0 pt-5 text-xl">
                  Gobierno del Estado Coahuila
                </h2>
              </div>
              <div className="pl-0">
                <img
                  src="/img/LogosCliente/guanajuato.png"
                  alt=""
                  className="sm:w-[400px] bg-white rounded-2xl"
                />
                <h2 className="text-white pr-0 pt-5 text-xl">
                  Gobierno del Estado Guanajuato
                </h2>
              </div>
              <div className="pl-0">
                <img
                  src="/img/LogosCliente/monterrey.png"
                  alt=""
                  className="sm:w-[400px] bg-white rounded-2xl"
                />
                <h2 className="text-white pr-0 pt-5 text-xl">
                  Gobierno del Estado Monterrey
                </h2>
              </div>
              <div className="pl-0">
                <img
                  src="/img/LogosCliente/deacero.png"
                  alt=""
                  className="sm:w-[400px] bg-white rounded-2xl"
                />
                <h2 className="text-white pr-0 pt-5 text-xl">Grupo DEACERO</h2>
              </div>

              <div className="pl-0">
                <img
                  src="/img/LogosCliente/gp.png"
                  alt=""
                  className="sm:w-[400px] bg-white rounded-2xl"
                />
                <h2 className="text-white pr-0 pt-5 text-xl">Grupo GP</h2>
              </div>

              <div className="pl-0">
                <img
                  src="/img/LogosCliente/judicial.png"
                  alt=""
                  className="sm:w-[400px] bg-white rounded-2xl"
                />
                <h2 className="text-white pr-0 pt-5 text-xl">
                  Poder Judiacial del Estado de Coahuila
                </h2>
              </div>

              <div className="pl-0">
                <img
                  src="/img/LogosCliente/metalsa.png"
                  alt=""
                  className="sm:w-[400px] bg-white rounded-2xl"
                />
                <h2 className="text-white pr-0 pt-5 text-xl">Metalsa</h2>
              </div>

              <div className="pl-0">
                <img
                  src="/img/LogosCliente/saltilloG.png"
                  alt=""
                  className="sm:w-[400px] bg-white rounded-2xl"
                />
                <h2 className="text-white pr-0 pt-5 text-xl">
                  Gobierno Municipal de Saltillo
                </h2>
              </div>

              <div className="pl-0">
                <img
                  src="/img/LogosCliente/saltilloU.png"
                  alt=""
                  className="sm:w-[400px] bg-white rounded-2xl"
                />
                <h2 className="text-white pr-0 pt-5 text-xl">
                  Universidad de Saltillo
                </h2>
              </div>

              <div className="pl-0">
                <img
                  src="/img/LogosCliente/salud.png"
                  alt=""
                  className="sm:w-[400px] bg-white rounded-2xl"
                />
                <h2 className="text-white pr-0 pt-5 text-xl">
                  Secretaria de Salud del Estado de Coahuila
                </h2>
              </div>

              <div className="pl-0">
                <img
                  src="/img/LogosCliente/amex.png"
                  alt=""
                  className="sm:w-[400px] bg-white rounded-2xl"
                />
                <h2 className="text-white pr-0 pt-5 text-xl">AMMEX Products</h2>
              </div>

              <div className="pl-0">
                <img
                  src="/img/LogosCliente/uanl.png"
                  alt=""
                  className="sm:w-[400px] bg-white rounded-2xl"
                />
                <h2 className="text-white pr-0 pt-5 text-xl">
                  Universidad Autónoma de Nuevo León
                </h2>
              </div>
            </Slider>
          </center>

          <button className="" onClick={() => sliderRef.current.slickNext()}>
            <img src="/img/iconos/arrow (1).png" alt="" className="w-5 " />
          </button>
        </div>
      </center>
    </div>
  );
};

export default Carousels;
