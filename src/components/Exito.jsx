import React from "react";

const Exito = () => {
  return (
    <div>
      <div className="h-[8vh] bg-white">
        <h1 className="text-center text-4xl text-[#143C6A] font-bold">
          Casos de éxito
        </h1>{" "}
      </div>
      <div className="h-[70vh] w-[100%] bg-[#041A32] flex gap-36 justify-center items-center">

        <div className="grid place-items-center">
          <img
          src="/img/monterrey.png"
          alt=""
          className="w-[300px] h-[300px] rounded-[35px] hover:scale-110 ease-in duration-300"
        />
        <h2 className="text-white text-xl mt-10">Gobierno Municipal de Monterrey</h2>
        </div>
        <div className="grid place-items-center">
           <img
          src="/img/coahuila.png"
          alt=""
          className="w-[300px] h-[300px] rounded-[35px] hover:scale-110 ease-in duration-300"
        />
        <h2 className="text-white text-xl mt-10">Secretaría de Seguridad del Estado de Coahuila</h2>

        </div>
       
      </div>
    </div>
  );
};

export default Exito;
