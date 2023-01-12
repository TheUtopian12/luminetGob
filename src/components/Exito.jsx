import React from "react";

const Exito = () => {
  return (
    <div>
      <div className="h-[8vh] bg-white">
        <h1 className="text-center text-4xl text-[#76BA22] font-bold">
          Casos de éxito
        </h1>{" "}
      </div>
      <div className="h-[84vh] w-[100%] bg-[#041A32] flex gap-36 justify-center items-center">
        <img
          src="/img/monterrey.png"
          alt=""
          className="w-[300px] h-[300px] rounded-[35px] hover:scale-110 ease-in duration-300"
        />
        <img
          src="/img/coahuila.png"
          alt=""
          className="w-[300px] h-[300px] rounded-[35px] hover:scale-110 ease-in duration-300"
        />
      </div>
    </div>
  );
};

export default Exito;
