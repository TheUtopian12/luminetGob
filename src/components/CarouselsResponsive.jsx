import React, { Component } from "react";
import Slider from "react-slick";
const CarouselsResponsive = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div
      className="w-[100%] h-[50vh] text-center mt-0 mb-10 bg-cover bgCarousel"
      id="clientesM"
    >
      <center>
        <h1 className="text-center text-4xl text-white font-bold mb-14 pt-14">
          {" "}
          Clientes{" "}
        </h1>
        <Slider {...settings}>
          <div className="pl-2 pr-2">
            <img
              loading="lazy"
              src="/img/LogosCliente/coahuila.png"
              alt=""
              className="w-[250px]  rounded-2xl bg-white"
            />
            <h2 className="text-white  pt-5 text-xl">
              Gobierno del Estado Coahuila
            </h2>
          </div>
          <div className="pl-2 pr-2">
            <img
              loading="lazy"
              src="/img/LogosCliente/guanajuato.png"
              alt=""
              className="w-[250px] bg-white rounded-2xl"
            />
            <h2 className="text-white  pt-5 text-xl">
              Gobierno del Estado Guanajuato
            </h2>
          </div>
          <div className="pl-2 pr-2">
            <img
              loading="lazy"
              src="/img/LogosCliente/monterrey.png"
              alt=""
              className="w-[250px] bg-white rounded-2xl"
            />
            <h2 className="text-white  pt-5 text-xl">
              Gobierno del Estado Monterrey
            </h2>
          </div>
          <div className="pl-2 pr-2">
            <img
              loading="lazy"
              src="/img/LogosCliente/deacero.png"
              alt=""
              className="w-[250px] bg-white rounded-2xl"
            />
            <h2 className="text-white  pt-5 text-xl">Grupo DEACERO</h2>
          </div>

          <div className="pl-2 pr-2">
            <img
              loading="lazy"
              src="/img/LogosCliente/gp.png"
              alt=""
              className="w-[250px] bg-white rounded-2xl"
            />
            <h2 className="text-white  pt-5 text-xl">Grupo GP</h2>
          </div>

          <div className="pl-2 pr-2">
            <img
              loading="lazy"
              src="/img/LogosCliente/judicial.png"
              alt=""
              className="w-[250px] bg-white rounded-2xl"
            />
            <h2 className="text-white  pt-5 text-xl">
              Poder Judiacial del Estado de Coahuila
            </h2>
          </div>

          <div className="pl-2 pr-2">
            <img
              loading="lazy"
              src="/img/LogosCliente/metalsa.png"
              alt=""
              className="w-[250px] bg-white rounded-2xl"
            />
            <h2 className="text-white  pt-5 text-xl">Metalsa</h2>
          </div>

          <div className="pl-2 pr-2">
            <img
              loading="lazy"
              src="/img/LogosCliente/saltilloG.png"
              alt=""
              className="w-[250px] bg-white rounded-2xl"
            />
            <h2 className="text-white  pt-5 text-xl">
              Gobierno Municipal de Saltillo
            </h2>
          </div>

          <div className="pl-2 pr-2">
            <img
              loading="lazy"
              src="/img/LogosCliente/saltilloU.png"
              alt=""
              className="w-[250px] bg-white rounded-2xl"
            />
            <h2 className="text-white  pt-5 text-xl">
              Universidad de Saltillo
            </h2>
          </div>

          <div className="pl-2 pr-2">
            <img
              loading="lazy"
              src="/img/LogosCliente/salud.png"
              alt=""
              className="w-[250px] bg-white rounded-2xl"
            />
            <h2 className="text-white  pt-5 text-xl">
              Secretaria de Salud del Estado de Coahuila
            </h2>
          </div>

          <div className="pl-2 pr-2">
            <img
              loading="lazy"
              src="/img/LogosCliente/amex.png"
              alt=""
              className="w-[250px] bg-white rounded-2xl"
            />
            <h2 className="text-white  pt-5 text-xl">AMMEX Products</h2>
          </div>

          <div className="pl-2 pr-2">
            <img
              loading="lazy"
              src="/img/LogosCliente/uanl.png"
              alt=""
              className="w-[250px] bg-white rounded-2xl"
            />
            <h2 className="text-white  pt-5 text-xl">
              Universidad Autónoma de Nuevo León
            </h2>
          </div>
        </Slider>
      </center>
    </div>
  );
};

export default CarouselsResponsive;
