import React from "react";
import "../../floatingButton.css";
const NavbarResponsive = () => {
  return (
    <div id="container-floating" className="sm:hidden z-50">
      <div className="nd7 nds">
        <img className="reminder" />
        <p className="letter">C</p>
      </div>
      <div className="nd6 nds">
        <img className="reminder" />
        <p className="letter">C</p>
      </div>
      <div className="nd5 nds">
        <img className="reminder" />
        <p className="letter">C</p>
      </div>

      <div className="nd4 nds">
        <img className="reminder" />
        <p className="letter">C</p>
      </div>

      <div className="nd3 nds">
        <p className="letter">C</p>
      </div>

      <div className="nd1 nds">
        <p className="letter">E</p>
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
