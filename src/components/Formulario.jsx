import React, { useState } from "react";
import Logo from "../assets/Logo-Luminet-Gobierno.png";
import { SlLocationPin, SlEnvolope, SlCallOut } from "react-icons/sl";
import { Input, Button, Textarea } from "@material-tailwind/react";
import { BiRightArrow } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
const Formulario = () => {
  const notify = () =>
    toast.success("¡Gracias! Hemos enviado tu información correctamente.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const errorNotify = () =>
    toast.error("El captcha no es valido", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    comentario: "",
    empresa: "",
  });
  const [captchaToken, setCaptchaToken] = useState("");

  // Función para actualizar los datos del formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value, empresa: "Desde state" });
  };
  function onChange(value) {
    setCaptchaToken(value);
  }
  // Función para enviar los datos del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    if (captchaToken === "") {
      errorNotify();
    } else {
      notify();

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      };

      fetch(
        "https://form-receiver.wispi.mx/form/ln-contacto-gob",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
      setFormData({
        nombre: "",
        correo: "",
        telefono: "",
        comentario: "",
        empresa: "",
      });
      setCaptchaToken("");
    }
  };

  return (
    <div
      className="min-h-screen bg-[#95C926] flex flex-col place-items-center"
      id="contacto"
    >
      <ToastContainer position="top-center" className="sm:w-[600px]" />
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
        <div className="ml-5 sm:ml-0 h-[43vh] sm:h-[70vh] w-[90%] sm:w-[100%] bg-gradient-to-b from-[#266095] to-[#031e3d] rounded-t-3xl sm:rounded-tr-none sm:rounded-l-3xl flex flex-col place-items-center pt-5">
          <img src={Logo} alt="" className="w-32" />
          <div className=" flex flex-col text-white sm:m-5">
            <div className="hidden sm:flex gap-5">
              <SlLocationPin size={50} className="text-[#95C926]" />
              <p>
                <h2>
                  Av. Nazario Ortiz No. 2060, local 319-A, Plaza Santa Isabel,
                  Col. Tanque de Peña, <br /> CP 25270, Saltillo, Coahuila, Mx.
                </h2>
                <br />

                <br />
                <h2>
                  Av. Revolución 1653, 3er Piso, Colonia San Ángel, CP 01000,
                  Alcaldía Álvaro Obregón, CDMX
                </h2>
              </p>
            </div>
            <div className=" flex gap-5 mt-5">
              <a href="mailto:contacto@luminet.com.mx">
                <SlEnvolope size={33} className="text-[#95C926]" />
              </a>
              <p>
                <h2>contactogobierno@luminet.com.mx</h2>
              </p>
            </div>

            <div className="flex gap-5 mt-10">
              <a href="tel:+528119086413">
                <SlCallOut size={33} className="text-[#95C926]" />
              </a>

              <p>
                <h2>Teléfono de contacto </h2>
                <h2 className="font-bold">8119 086 413</h2>
              </p>
            </div>
          </div>
        </div>

        <div className="ml-5 sm:ml-0 h-[70vh] w-[90%] sm:w-[100%] bg-[#e3ebf2] sm:rounded-r-2xl sm:rounded-l-none rounded-b-3xl">
          <div className="flex flex-col justify-center items-center place-items-center m-8 gap-10">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-8 place-items-center"
            >
              <Input
                className="w-[350px]"
                variant="outlined"
                required="true"
                label="Nombre"
                name="nombre"
                icon={<BiRightArrow />}
                color="blue"
                value={formData.nombre}
                onChange={handleInputChange}
              />
              <Input
                variant="outlined"
                label="E-mail"
                required="true"
                name="correo"
                icon={<BiRightArrow />}
                color="blue"
                value={formData.correo}
                onChange={handleInputChange}
              />
              <Input
                variant="outlined"
                label="Teléfono"
                required="true"
                name="telefono"
                icon={<BiRightArrow />}
                color="blue"
                value={formData.telefono}
                onChange={handleInputChange}
              />
              <div className="hidden">
                <Input
                  variant="outlined"
                  label="Empresa"
                  name="empresa"
                  icon={<BiRightArrow />}
                  color="blue"
                  value={formData.empresa}
                  onChange={handleInputChange}
                />
              </div>

              <Textarea
                label="Mensaje"
                name="comentario"
                color="blue"
                required="true"
                value={formData.comentario}
                onChange={handleInputChange}
              />
              <ReCAPTCHA
                sitekey="6LcwLzUlAAAAAIR_B8-CsS9J78kfEQ_HFHRFzuah"
                onChange={onChange}
              />
              <button
                type="submit"
                className="w-[200px] text-white bg-gradient-to-br from-[#08785c] to-[#8ec529] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                {" "}
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
