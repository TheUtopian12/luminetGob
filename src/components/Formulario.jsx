import React from "react";
import Logo from "../assets/Logo-Luminet-Gobierno.png";
import { SlLocationPin, SlEnvolope, SlCallOut } from "react-icons/sl";
import { Input, Button, Textarea } from "@material-tailwind/react";
import { BiRightArrow } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";
const Formulario = () => {
  return (
    <div
      className="min-h-screen bg-[#95C926] flex flex-col place-items-center"
      id="contacto"
    >
      <h1 className="sm:text-5xl text-[#143C6A] font-bold text-center pt-10">
        Solicitar más información
      </h1>
      <h2 className="sm:text-2xl text-[#143C6A] text-center pt-5 sm:pt-10 sm:ml-48 sm:mr-48 font-bold">
        Déjanos tus datos de contacto para que uno de nuestros ejecutivos se
        contacte a la brevedad y te brinde la información detallada.
      </h2>
      <div className="hidden relative top-80 w-12 h-12 bg-white rounded-full sm:flex justify-center items-center">
        <MdArrowForwardIos size={30} className="text-[#95C926] font-bold" />
      </div>
      <div className="w-[100%] sm:w-[60%] min-h-screen pb-10  pt-20 rounded-2xl grid sm:grid-cols-2 gap-0 sm:gap-0">
        <div className="ml-5 sm:ml-0 h-[40vh] sm:h-[70vh] w-[90%] sm:w-[100%] bg-gradient-to-b from-[#266095] to-[#031e3d] rounded-t-3xl sm:rounded-tr-none sm:rounded-l-3xl flex flex-col place-items-center pt-5">
          <img src={Logo} alt="" className="w-32" />
          <div className=" flex flex-col text-white sm:m-5">
            <div className="hidden sm:flex gap-5">
              <SlLocationPin size={50} className="text-[#95C926]" />
              <p>
                <h2>Pedro Figueroa No. 2815 CP 25024 Saltillo, Coahuila</h2>
                <br />
                <h2>
                  Av. Eugenio Garza Sada No. 3820, Col. Más Palomas Monterrey.
                  N.L.
                </h2>
              </p>
            </div>
            <div className="hidden sm:flex gap-5 mt-5">
              <SlEnvolope size={33} className="text-[#95C926]" />
              <p>
                <h2>contacto@luminetgobierno.com.mx</h2>
              </p>
            </div>

            <div className="flex gap-5 mt-10">
              <a href="tel:+528119086413"><SlCallOut size={33} className="text-[#95C926]" /></a>
              
              <p>
                <h2>Teléfono de contacto </h2>
                <h2 className="font-bold">8119 086 413</h2>
              </p>
            </div>
          </div>
        </div>

        <div className="ml-5 sm:ml-0 h-[70vh] w-[90%] sm:w-[100%] bg-[#e3ebf2] sm:rounded-r-2xl sm:rounded-l-none rounded-b-3xl">
          <div className="flex flex-col justify-center items-center place-items-center m-8 gap-10">
            <Input
              variant="outlined"
              label="Nombre"
              icon={<BiRightArrow />}
              color="blue"
            />
            <Input
              variant="outlined"
              label="E-mail"
              icon={<BiRightArrow />}
              color="blue"
            />
            <Input
              variant="outlined"
              label="Teléfono"
              icon={<BiRightArrow />}
              color="blue"
            />
            <Textarea label="Mensaje" color="blue" />

            <button
              type="button"
              className="w-[200px] text-white bg-gradient-to-br from-[#08785c] to-[#8ec529] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              {" "}
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
