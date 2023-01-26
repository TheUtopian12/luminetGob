import React from "react";
import {
  BiHomeAlt,
  BiTrendingUp,
  BiBroadcast,
  BiUserCheck,
  BiSpreadsheet,
  BiChip,
  BiConversation,
} from "react-icons/bi";
const Navbar = () => {
  return (
    <div className="hidden sm:grid">
      <a
        href="#/"
        title="Inicio"
        className=" group fixed z-50 top-[200px] right-10 bg-[#000E20] w-10 h-10 hover:w-32 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#000E20]   duration-300"
      >
        <span className="group-hover:flex hidden">
          {" "}
          <h1 className="text-white text-[12px]">Inicio</h1>
        </span>
        <span className="group-hover:hidden">
          <BiHomeAlt size={25} />
        </span>
      </a>

      <a
        href="#ventajas"
        title="Ventajas"
        className=" group fixed z-50 top-[250px] right-10 bg-[#03152D] w-10 h-10 hover:w-32 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#03152D]   duration-300"
      >
        <span className="group-hover:flex hidden">
          {" "}
          <h1 className="text-white text-[12px]">Nosotros</h1>
        </span>
        <span className="group-hover:hidden">
          <BiTrendingUp size={25} />
        </span>
      </a>
      <a
        href="#servicios"
        title="Servicios"
        className=" group fixed z-50 top-[300px] right-10 bg-[#0A3F73] w-10 h-10 hover:w-32 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#0A3F73]   duration-300"
      >
        <span className="group-hover:flex hidden">
          {" "}
          <h1 className="text-white text-[12px]">Servicios</h1>
        </span>
        <span className="group-hover:hidden">
          <BiBroadcast size={25} />
        </span>
      </a>

      <a
        href="#clientes"
        title="Clientes"
        className=" group fixed z-50 top-[350px] right-10 bg-[#0D488C] w-10 h-10 hover:w-32 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#0D488C]   duration-300"
      >
        <span className="group-hover:flex hidden">
          {" "}
          <h1 className="text-white text-[12px]">Clientes</h1>
        </span>
        <span className="group-hover:hidden">
          <BiUserCheck size={25} />
        </span>
      </a>

      <a
        href="#polizas"
        title="Polizas"
        className=" group fixed z-50 top-[400px] right-10 bg-[#3970AF] w-10 h-10 hover:w-32 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#3970AF]   duration-300"
      >
        <span className="group-hover:flex hidden">
          {" "}
          <h1 className="text-white text-[12px]">Pólizas</h1>
        </span>
        <span className="group-hover:hidden">
          <BiSpreadsheet size={25} />
        </span>
      </a>

      <a
        href="#contacto"
        title="Contacto"
        className=" group fixed z-50 top-[450px] right-10 bg-[#6FB1FD] w-10 h-10 hover:w-32 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#6FB1FD]   duration-300"
      >
        <span className="group-hover:flex hidden">
          {" "}
          <h1 className="text-white text-[12px]">Contacto </h1>
        </span>
        <span className="group-hover:hidden">
          <BiConversation size={25} />
        </span>
      </a>
    </div>
  );
};

export default Navbar;
