import React from 'react'
import { BiHomeAlt,BiTrendingUp,BiBroadcast,BiUserCheck,BiSpreadsheet,BiChip,BiConversation } from "react-icons/bi";
const Navbar = () => {
  return (
    <>
    <a href='#/'
        title="Contacto"
        className=" group fixed z-50 top-[200px] right-10 bg-[#43BA22] w-10 h-10 hover:w-32 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#71b55e]   duration-300"
      >
        <span className="group-hover:flex hidden">
          {" "}
          <h1 className="text-white text-[12px]">Inicio</h1>
        </span>
        <span className="group-hover:hidden"><BiHomeAlt size={25}/></span>
      </a> 

      <a href='#ventajas'
        title="Contacto"
        className=" group fixed z-50 top-[250px] right-10 bg-[#43BA22] w-10 h-10 hover:w-32 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#71b55e]   duration-300"
      >
        <span className="group-hover:flex hidden">
          {" "}
          <h1 className="text-white text-[12px]">Ventajas</h1>
        </span>
        <span className="group-hover:hidden"><BiTrendingUp size={25}/></span>
      </a> 
      <a href='#servicios'
        title="Contacto"
        className=" group fixed z-50 top-[300px] right-10 bg-[#43BA22] w-10 h-10 hover:w-32 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#71b55e]   duration-300"
      >
        <span className="group-hover:flex hidden">
          {" "}
          <h1 className="text-white text-[12px]">Servicios</h1>
        </span>
        <span className="group-hover:hidden"><BiBroadcast size={25}/></span>
      </a> 

      <a href='#clientes'
        title="Contacto"
        className=" group fixed z-50 top-[350px] right-10 bg-[#43BA22] w-10 h-10 hover:w-32 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#71b55e]   duration-300"
      >
        <span className="group-hover:flex hidden">
          {" "}
          <h1 className="text-white text-[12px]">Clientes</h1>
        </span>
        <span className="group-hover:hidden"><BiUserCheck size={25}/></span>
      </a> 

      <a href='#polizas'
        title="Contacto"
        className=" group fixed z-50 top-[400px] right-10 bg-[#43BA22] w-10 h-10 hover:w-32 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#71b55e]   duration-300"
      >
        <span className="group-hover:flex hidden">
          {" "}
          <h1 className="text-white text-[12px]">Pólizas</h1>
        </span>
        <span className="group-hover:hidden"><BiSpreadsheet size={25}/></span>
      </a> 

      <a href='#tecnologias'
        title="Contacto"
        className=" group fixed z-50 top-[450px] right-10 bg-[#43BA22] w-10 h-10 hover:w-32 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#71b55e]   duration-300"
      >
        <span className="group-hover:flex hidden">
          {" "}
          <h1 className="text-white text-[12px]">Tecnologías </h1>
        </span>
        <span className="group-hover:hidden"><BiChip size={25}/></span>
      </a>

      <a href='#contacto'
        title="Contacto"
        className=" group fixed z-50 top-[500px] right-10 bg-[#43BA22] w-10 h-10 hover:w-32 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#71b55e]   duration-300"
      >
        <span className="group-hover:flex hidden">
          {" "}
          <h1 className="text-white text-[12px]">Contacto </h1>
        </span>
        <span className="group-hover:hidden"><BiConversation size={25}/></span>
      </a>
    </>
  )
}

export default Navbar