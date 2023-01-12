import React, { Component } from "react";
import Slider from "react-slick";
const Carousels = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:false
  };
  return (
    <div className="w-[100%] h-[50vh] text-center mt-48 mb-24 bg-cover bgCarousel">
      <div>
      <h1 className="text-center text-4xl text-white font-bold mb-14 pt-14"> Clientes </h1> 
        <Slider {...settings}>
          <div className="pl-36">
            <img src="/img/clientes/guanajuato.png" alt="" className="w-[200px] rounded-2xl"/>
          </div>
          <div className="pl-36">
            <img src="/img/clientes/uanl.png" alt="" className="w-[200px] rounded-2xl"/>
          </div>
          <div className="pl-36">
            <img src="/img/clientes/salud.png" alt="" className="w-[200px] rounded-2xl"/>
          </div>
          <div className="pl-36">
            <img src="/img/clientes/guanajuato.png" alt="" className="w-[200px] rounded-2xl"/>
          </div>
          
        </Slider>
      </div>
    </div>
  );
};

export default Carousels;
