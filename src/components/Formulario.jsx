import React from "react";
import Logo from "../assets/Logo-Luminet-Gobierno.png";
import { SlLocationPin, SlEnvolope, SlCallOut } from "react-icons/sl";
import { Input, Button,Textarea  } from "@material-tailwind/react";
const Formulario = () => {
  return (
    <div className="min-h-screen bg-[#95C926] flex flex-col place-items-center">
      <h1 className="sm:text-4xl text-[#143C6A] font-bold text-center pt-10">
        Solicitar más información
      </h1>
      <h2 className="sm:text-2xl text-[#143C6A] text-center pt-5 sm:pt-10 sm:ml-28 sm:mr-28 font-bold">
        Déjanos tus datos de contacto para que uno de nuestros ejecutivos se
        contacte a la brevedad y te brinde la información detallada.
      </h2>

      <div className="w-[100%] sm:w-[60%] min-h-screen pb-10  pt-20 rounded-2xl grid sm:grid-cols-2 gap-10 sm:gap-0">
        <div className="h-[60vh] w-[100%] sm:w-[100%] bg-[#143C6A] sm:rounded-l-2xl hidden sm:flex flex-col place-items-center pt-5">
          <img src={Logo} alt="" className="w-32" />
          <div className=" flex flex-col text-white m-5">
            <div className="flex gap-5">
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
            <div className="flex gap-5 mt-5">
              <SlEnvolope size={33} className="text-[#95C926]" />
              <p>
                <h2>contacto@luminetgobierno.com.mx</h2>
              </p>
            </div>

            <div className="flex gap-5 mt-10">
              <SlCallOut size={33} className="text-[#95C926]" />
              <p>
                <h2>Teléfono de contacto </h2>
                <h2 className="font-bold">8119 086 413</h2>
              </p>
            </div>
          </div>
        </div>
        <div className="h-[60vh] w-[100%] sm:w-[100%] bg-white sm:rounded-r-2xl">
          <div className="flex flex-col justify-center  items-center place-items-center m-10 gap-10">
            <Input variant="standard" label="Nombre" />
            <Input variant="standard" label="E-mail" />
            <Input variant="standard" label="Teléfono" />
            
      <Textarea variant="standard" label="Comentario" />

            <Button color="green" variant="gradient">
              Enviar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Formulario;
