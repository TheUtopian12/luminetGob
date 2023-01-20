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

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [
  axis,
  cisco,
  hikvision,
  Logos,
  Panasonic,
  tamce,
  tarana,
  zencase,
];

function Tecnologias() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="flex justify-center h-[60vh] bgTec bg-cover bg-center pt-20">
      <div className="w-[80%]">
        <h1 className="text-center mb-20 text-4xl font-bold text-white">Tecnologías que implementamos</h1>
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <img src={img} alt={img} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Tecnologias;
