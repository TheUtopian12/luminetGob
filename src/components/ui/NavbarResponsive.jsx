import React from "react";
import "../../floatingButton.css";
import {
  BiHomeAlt,
  BiTrendingUp,
  BiBroadcast,
  BiUserCheck,
  BiSpreadsheet,
  BiChip,
  BiConversation,
  BiX,
  BiXCircle,
  BiMenu,
} from "react-icons/bi";
const NavbarResponsive = () => {
  return (
    <div id="container-floating" className="md:hidden z-50">
      <div className="nd7 nds">
        <img className="reminder" alt="main" />
        <a href="#/" className="letter flex justify-center items-center">
          <BiHomeAlt />
        </a>
      </div>
      <div className="nd6 nds">
        <img className="reminder" alt="ventajas" />
        <a href="#ventajas" className="letter flex justify-center items-center">
          <BiTrendingUp />
        </a>
      </div>
      <div className="nd5 nds">
        <img className="reminder" alt="servicios" />
        <a
          href="#servicios"
          className="letter flex justify-center items-center"
        >
          <BiBroadcast />
        </a>
      </div>

      <div className="nd4 nds">
        <img className="reminder" alt="clientes" />
        <a
          href="#clientesM"
          className="letter flex justify-center items-center"
        >
          <BiUserCheck />
        </a>
      </div>

      <div className="nd3 nds">
        <a href="#polizas" className="letter flex justify-center items-center">
          <BiSpreadsheet />
        </a>
      </div>

      <div className="nd1 nds">
        <a href="#contacto" className="letter flex justify-center items-center">
          <BiConversation />
        </a>
      </div>

      <div id="floating-button">
        <p className="plus">+</p>

        <BiXCircle size={30} className="edit text-white" />
      </div>
    </div>
  );
};

export default NavbarResponsive;
