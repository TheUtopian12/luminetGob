import { useState } from "react";
import Slider from "react-slick";
import axis from "../assets/Tecnologias/axis.png";
import cisco from "../assets/Tecnologias/cisco.png";
import hikvision from "../assets/Tecnologias/hikvision.png";
import Logos from "../assets/Tecnologias/añhua.png";
import Panasonic from "../assets/Tecnologias/panasonic.png";
import tamce from "../assets/Tecnologias/tamce.png";
import tarana from "../assets/Tecnologias/tarana.png";
import zencase from "../assets/Tecnologias/zencase.png";
import Benquant from "../assets/Tecnologias/Logo_Bequant.jpg";
import Mimosa from "../assets/Tecnologias/Logo_Mimosa.jpg";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const images = [
  axis,
  cisco,
  hikvision,
  Logos,
  Panasonic,
  Benquant,
  tamce,
  tarana,
  Mimosa,
  zencase,
];

function Tecnologias() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaAngleRight size={30} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev " onClick={onClick}>
        <FaAngleLeft size={30} />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  const settings2 = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,

    centerMode: true,
    centerPadding: "60px",
    centerMode: false,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div id="tecnologias">
      <div className="flex sm:hidden justify-center w-[100%] h-[60vh] bgTec bg-cover bg-center pt-20">
        <div className="w-[80%] pb-10">
          <h1 className="text-center mb-20 text-2xl font-bold text-white">
            Tecnologías que implementamos
          </h1>
          <Slider {...settings2}>
            {images.map((img, idx) => (
              <div
                className={idx === imageIndex ? "slide activeSlide" : "slide"}
              >
                <img src={img} alt={img} />
              </div>
            ))}
          </Slider>
        </div>
      </div>{" "}
      <div className="hidden sm:flex justify-center h-[45vh] bgTec bg-cover bg-center pt-10">
        <div className="w-[80%] pb-10">
          <h1 className="text-center mb-10 text-4xl font-bold text-white">
            Tecnologías que implementamos
          </h1>
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div
                className={idx === imageIndex ? "slide activeSlide" : "slide"}
              >
                <img src={img} alt={img} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Tecnologias;
