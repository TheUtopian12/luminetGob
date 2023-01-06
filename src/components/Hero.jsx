import React from "react";
import bgVideo from "../assets/bgvideo.mp4";
export const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        src={bgVideo}
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white">
        <h1 className="text-2xl sm:text-4xl font-bold">
          Brindamos Conectividad e Infraestructura de telecomunicaciones al
          sector público
        </h1>
        <h2 className="text-xl sm:text-3xl mt-10">
          Integramos servicios especializados para una conectividad y seguridad
          total
        </h2>
      </div>
    </div>
  );
};
