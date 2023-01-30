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
} from "react-icons/bi";
const NavbarResponsive = () => {
  return (
    <div id="container-floating" className="sm:hidden z-50">
      <div className="nd7 nds">
        <img className="reminder" />
        <a href="#/" className="letter flex justify-center items-center"><BiHomeAlt/></a>
      </div>
      <div className="nd6 nds">
        <img className="reminder" />
        <a  href="#ventajas" className="letter flex justify-center items-center"><BiTrendingUp/></a>
      </div>
      <div className="nd5 nds">
        <img className="reminder" />
        <a href="#servicios" className="letter flex justify-center items-center"><BiBroadcast/></a>
      </div>

      <div className="nd4 nds">
        <img className="reminder" />
        <a href="#clientes" className="letter flex justify-center items-center"><BiUserCheck/></a>
      </div>

      <div className="nd3 nds">
        <a href="#polizas" className="letter flex justify-center items-center"><BiSpreadsheet/></a>
      </div>

      <div className="nd1 nds">
        <a href="#contacto" className="letter flex justify-center items-center"><BiConversation/></a>
      </div>

      <div id="floating-button">
        <p className="plus">+</p>
        <img
          className="edit"
          src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png"
        />
      </div>
    </div>
  );
};

export default NavbarResponsive;
