import React from "react";
import bgVideo from "../assets/Banner Web.mp4";
export const Hero = () => {
  return (
    <div className="w-full h-screen relative">
     
     {/*<button
        title="Contacto"
        className=" group fixed z-50 top-28 right-10 bg-[#43BA22] w-10 h-10 hover:w-32 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#71b55e]   duration-300"
      >
        <span className="group-hover:flex hidden">
          {" "}
          <h1 className="text-white text-[12px]">Contacto</h1>
        </span>
        <span className="group-hover:hidden">&#9993;</span>
      </button> */}
      

      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        src={bgVideo}
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white">
        <h1 className="text-2xl mr-1 ml-1 sm:mr-0 sm:ml-0 sm:text-5xl font-bold">
          Brindamos servicios a la Infraestructura de telecomunicaciones del
          sector público
        </h1>
        <h2 className="text-xl mr-5 ml-5 sm:ml-0 sm:mr-0 sm:text-3xl mt-10 ">
          Integramos servicios especializados para una conectividad y seguridad
          total
        </h2>
        <div className="mt-10">
          <button
            className="text-white bg-gradient-to-r 

          from-[#013506] to-[#43BA22] w-[50%] sm:w-[30%]  sm:text-2xl rounded-2xl text-lg hover:bg-[#598d19]"
          >
            Contactar un especialista
          </button>
        </div>
      </div>
    </div>
  );
};
