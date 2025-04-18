import React from "react";
import bgVideo from "../assets/Banner Web.mp4";
import bgImage from "../assets/bgImage.png";
import { Button } from "@material-tailwind/react";
import Navbar from "./ui/Navbar";
import NavbarResponsive from "./ui/NavbarResponsive";
export const Hero = () => {
  return (
    <div className="w-full h-screen relative" id="/">
      <Navbar className="hidden lg:flex" />
      <NavbarResponsive />

      <video
        className="w-full h-full hidden sm:grid object-cover"
        autoPlay
        loop
        muted
        src={bgVideo}
      />
      <img
        loading="lazy"
        src={bgImage}
        alt=""
        className="w-full h-full sm:hidden grid object-cover"
      />

      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white">
        <h1 className="text-2xl mr-1 ml-1 sm:mr-10 sm:ml-10 md:mr-10 md:ml-10 sm:text-5xl font-bold 4k:text-6xl lg:text-white  2xl:mr-16 2xl:ml-16">
          Servicios de redes y seguridad para el sector público{" "}
        </h1>
        <h2 className="text-xl mr-5 ml-5 sm:ml-10 sm:mr-10 sm:text-3xl md:ml-0 md:mr-0 md:text-3xl mt-10 text-[#DFFFD3] 4k:text-5xl">
          Brindamos servicios especializados para una conectividad y seguridad
          total
        </h2>
        <div className="mt-10">
          <a
            href="#contacto"
            type="button"
            className="text-white bg-gradient-to-br from-[#08785c] to-[#8ec529] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm 4k:text-4xl px-5 py-2.5 text-center mr-2 mb-2"
          >
            {" "}
            Contactar un especialista
          </a>
        </div>
      </div>
    </div>
  );
};
