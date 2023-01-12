
import { useState } from "react";
import Slider from "react-slick";
import astronaut from "../assets/aua.png";
import celebrating from "../assets/hik.png";
import education from "../assets/panasonic.png";
import taken from "../assets/aua.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [astronaut, celebrating, education, taken];

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
    <div className="flex justify-center">
        <div className="w-[80%]">
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