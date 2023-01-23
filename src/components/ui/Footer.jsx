import React from "react";
import logo from "../../assets/Logo-Luminet-Gobierno.png";
import { BsWhatsapp, BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="bg-[#041A32] text-center sm:text-left  grid sm:grid-cols-3 place items-center">
        <div className="text-white sm:m-16 ">
         <center>
             <img src={logo} alt="Logo" className="mb-5 w-[50%]" />
        
         </center>
         <h3 className="mb-5">
            Pedro Figueroa No. 2815 CP 25024 Saltillo, Coahuila
          </h3>
          <h3>
            Av. Eugenio Garza Sada No. 3820, Col. Más Palomas Monterrey. N.L.
          </h3>
        </div>
        <div className="text-white ">
          <h3 className="">¡Llámanos sin costo!</h3>
          <p className="flex gap-2 mt-2 justify-center sm:justify-start">
            <BsFillTelephoneFill />
            <h3 className="font-bold mb-8">8119 086 413</h3>
          </p>
          <h3 className="mb-8">contacto@luminetgobierno.com.mx</h3>

          <h3>Soporte</h3>
          <p className="flex gap-2 mb-2 mt-2 justify-center sm:justify-start">
            <BsWhatsapp />
            <h3>Servicio 24 hrs.</h3>
          </p>
        </div>
        <div className="text-white">
          <p className="mb-10">
            <h3 className="font-bold">Horario de oficina</h3>
            <h3>Lunes a Jueves de 9:00 a 19:00 hrs.</h3>

            <h3>Viernes de 9:00 a 18:00 hrs.</h3>

            <h3>Sábados de 9:00 a 13:00 hrs.</h3>
          </p>

          <p className="mb-10">
            <h3 className="font-bold">Horario de ventas</h3>

            <h3>Lunes a Viernes de 9:00 a 19:00 hrs.</h3>

            <h3>Sábados de 9:00 a 13:00 hrs.</h3>
          </p>

          <p>
            <h3 className="font-bold">Atención a clientes</h3>
            <h3>Lunes a Jueves de 9:00 a 19:00 hrs.</h3>
            <h3>Viernes de 9:00 a 18:00 hrs.</h3>
            <h3>Sábados de 9:00 a 13:00 hrs.</h3>
          </p>
        </div>
      </div>
      <div className="h-20 bg-[#292929] flex justify-center items-center">
        <h1 className="text-center text-white cursor-pointer">
          Aviso de privacidad | Cumplimiento IFT y PROFECO
        </h1>
      </div>
    </>
  );
};

export default Footer;
