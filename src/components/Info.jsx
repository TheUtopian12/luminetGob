import React from "react";
import Typed from "react-typed";
export const Info = () => {
  return (
    <div className="h-[400px] sm:h-[200px] sm:flex sm:flex-row flex-col-reverse">
      <div className="bg-[#112627] h-[50%] sm:h-full sm:w-[50%] flex flex-col items-center justify-center">
        <h2 className="text-white text-center text-xl">
          Redes propias en 10 estados de México
        </h2>

        <span className="text-[#c8cd05] font-bold text-center text-xl">
          <Typed
            strings={["Monterrey", "Saltillo", "CDMX"]}
            typeSpeed={50}
            backSpeed={50}
            backDelay={2000}
            loop
          />
        </span>
      </div>
      <div className="bg-[#121a1a] h-[50%] sm:w-[50%] sm:h-full flex items-center">
        <h2 className="text-white text-center text-xl">
          Somos los operadores de enlaces en microondas más grande de México con
          más <span className="font-bold">23 años de experiencia</span>
        </h2>
      </div>
    </div>
  );
};
