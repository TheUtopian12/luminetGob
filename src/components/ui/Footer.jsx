import React from "react";
import logo from "../../assets/Logo-Luminet-Gobierno.png";
import { BsWhatsapp, BsFillTelephoneFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
const Footer = () => {
  return (
    <>
      <div className="bg-[#041A32] text-center sm:text-left  grid sm:grid-cols-3 place items-center">
        <div className="text-white sm:m-16 ">
          <center>
            <img src={logo} alt="Logo" className="mb-5 w-[50%]" />
          </center>
          <h3 className="mb-5">
            Av. Nazario Ortiz No. 2060, local 319-A, Plaza Santa Isabel, Col.
            Tanque de Peña, <br></br> CP 25270, Saltillo, Coahuila, Mx.
          </h3>

          <br />
          <h3>
            Av. Revolución 1653, 3er Piso, Colonia San Ángel, CP 01000, Alcaldía
            Álvaro Obregón, CDMX
          </h3>
        </div>
        <div className="text-white pt-10">
          <h3 className="">¡Llámanos sin costo!</h3>
          <p className="flex gap-2 mt-2 justify-center sm:justify-start">
            <BsFillTelephoneFill />
            <h3 className="font-bold mb-8">8119 086 413</h3>
          </p>

          <p className="flex gap-1 mt-3 justify-center sm:justify-start">
            <CiMail size={25} />
            <h3 className="mb-8">contactogobierno@luminet.com.mx</h3>
          </p>

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
        <object
          data="myfile.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>
            <a href="./docs/Aviso de privacidad Luminet.pdf">
              <h1 className="text-center text-white cursor-pointer mt-8">
                Aviso de privacidad
              </h1>
            </a>
          </p>
        </object>
      </div>
    </>
  );
};

export default Footer;
