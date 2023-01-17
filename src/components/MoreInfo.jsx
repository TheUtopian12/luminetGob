import React from "react";
import logo from "../assets/logo-luminet-c-v.png";
import logo_ift from "../assets/logo_ift_horizontal.png";
import cofetel from "../assets/Clientes/Logo CFT.jpeg";
import Slider from "react-slick";

export const MoreInfo = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false,
  };
  return (
    <div className="w-full min-h-screen mt-10">
      <div className="flex justify-center flex-col items-center text-center">
        <img src={logo} alt="" style={{ width: "150px" }} />
        <h1 className="pt-5 text-lg ml-2 mr-2">
          Empresa especializada en el{" "}
          <span className="font-bold">sector público</span> para la construcción
          de redes y centro de datos de primer nivel.
        </h1>
      </div>

      <div className="grid grid-cols-1 text-center items-center mt-10 gap-5 sm:grid-cols-4 bg-[#DFEFFE] h-[25vh] ml-10 mr-10 rounded-3xl">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold ml-5">
            Empresa regulada y concensionada por el IFT
          </h2>
        </div>
        <div className="flex justify-center">
          <img src={logo_ift} alt="" style={{ width: "250px" }} />
        </div>
        <div>
          <h2 className="text-lg sm:text-xl font-semibold">
            1er Concesionario Federal de Telecomunicaciones en radiofrecuencia
          </h2>
        </div>
        <div className="flex justify-center">
          <img src={cofetel} alt="" style={{ width: "250px" }} />
        </div>
      </div>

      <div className="mt-10 mb-10">
        <h1 className="text-4xl text-center font-bold text-[#143C6A]">
          Nuestras ventajas
        </h1>
      </div>
      <hr className="sm:hidden" />

      <div className="sm:grid grid-cols-1 sm:grid-cols-2 mt-4 hidden gap-10">
        <div className="flex gap-0 text-left sm:pl-10 pt-24 sm:pt-0">
          <div className="flex justify-center sm:justify-start ml-4 w-[20%]">
            <div className="bg-gradient-to-b from-[#bddcffbd] via-[#D9D9D9] to-transparent rounded-full w-[100px] flex justify-center items-center">
              <div>
                <img
                  src="/img/iconos/internet-security.png"
                  alt=""
                  className="w-[80px] "
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="ml-0 mt-6">
              <span className="text-[#143C6A] font-bold texl-lg">
                Aseguramos la confidencialidad
              </span>
              <br />
              de nuestros clientes y el manejo de información crítica de la red
              de monitoreo y videovigilancia.
            </h2>
          </div>
        </div>

        <div className="flex gap-0 text-left sm:pl-10 pt-24 sm:pt-0">
          <div className="flex justify-center sm:justify-start ml-4 w-[20%]">
            <div className="bg-gradient-to-b from-[#bddcffbd] via-[#D9D9D9] to-transparent rounded-full w-[100px] flex justify-center items-center">
              <div>
                <img
                  src="/img/iconos/software (1).png"
                  alt=""
                  className="w-[80px] "
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="ml-0 mt-6">
              <span className="text-[#143C6A] font-bold texl-lg">
                Contamos con software propio
              </span>
              <br />
              para administrar incidencias de red y reportes ciudadanos.
            </h2>
          </div>
        </div>

        <div className="flex gap-0 text-left sm:pl-10 pt-24 sm:pt-0">
          <div className="flex justify-center sm:justify-start ml-4 w-[20%]">
            <div className="bg-gradient-to-b from-[#bddcffbd] via-[#D9D9D9] to-transparent rounded-full w-[100px] flex justify-center items-center">
              <div>
                <img
                  src="/img/iconos/box-delivery.png"
                  alt=""
                  className="w-[80px] "
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="ml-[-30px] mt-6">
              <span className="text-[#143C6A] font-bold texl-lg">
                Somos independientes de las marcas de equipos
              </span>
              <br />
              No representamos a ninguna empresa extranjera.
            </h2>
          </div>
        </div>

        <div className="flex gap-0 text-left sm:pl-10 pt-24 sm:pt-0">
          <div className="flex justify-center sm:justify-start ml-4 w-[20%]">
            <div className="bg-gradient-to-b from-[#bddcffbd] via-[#D9D9D9] to-transparent rounded-full w-[100px] flex justify-center items-center">
              <div>
                <img
                  src="/img/iconos/feedback-form.png"
                  alt=""
                  className="w-[80px] "
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="ml-0 mt-6">
              <span className="text-[#143C6A] font-bold texl-lg">
                Damos mantenimiento a la red de seguridad de Coahuila
              </span>
              <br />
              La mejor red de seguridad evaluada de México.{" "}
            </h2>
          </div>
        </div>

        <div className="flex gap-0 text-left sm:pl-10 pt-24 sm:pt-0">
          <div className="flex justify-center sm:justify-start ml-4 w-[20%]">
            <div className="bg-gradient-to-b from-[#bddcffbd] via-[#D9D9D9] to-transparent rounded-full w-[100px] flex justify-center items-center">
              <div>
                <img
                  src="/img/iconos/hard-hat (1).png"
                  alt=""
                  className="w-[80px] "
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="ml-[-30px] mt-6">
              <span className="text-[#143C6A] font-bold texl-lg">
                Personal técnico especializado
              </span>
              <br />
              No subcontratamos, contamos con personal y equipo propios.{" "}
            </h2>
          </div>
        </div>

        <div className="flex gap-0 text-left sm:pl-10 pt-24 sm:pt-0">
          <div className="flex justify-center sm:justify-start ml-4 w-[20%]">
            <div className="bg-gradient-to-b from-[#bddcffbd] via-[#D9D9D9] to-transparent rounded-full w-[100px] flex justify-center items-center">
              <div>
                <img
                  src="/img/iconos/certificate (1).png"
                  alt=""
                  className="w-[80px] "
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="ml-0 mt-6">
              <span className="text-[#143C6A] font-bold texl-lg">
                Contamos con Certificaciones{" "}
              </span>
              <br />
              En instalación, manejo y operación de Fibra Óptica.{" "}
            </h2>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="sm:hidden w-[90%]">
          <Slider {...settings}>
            <div className="flex flex-col gap-5 text-left sm:pl-10 pt-24 sm:pt-0">
              <div className="flex justify-center sm:justify-start ml-4">
                <img
                  src="/img/iconos/internet-security.png"
                  alt=""
                  style={{ width: "50px" }}
                />
              </div>
              <h2 className="ml-4">
                <span className="text-[#143C6A] font-bold texl-lg">
                  Aseguramos la confidencialidad
                </span>
                <br />
                de nuestros clientes y el manejo de información crítica de la
                red de monitoreo y videovigilancia.
              </h2>
            </div>

            <div className="flex flex-col gap-5 text-left sm:pl-10 pt-24 sm:pt-0">
              <div className="flex justify-center sm:justify-start ml-4">
                <img
                  src="/img/iconos/software (1).png"
                  alt=""
                  style={{ width: "50px" }}
                />
              </div>
              <h2 className="ml-4">
                <span className="text-[#143C6A] font-bold texl-lg">
                  Contamos con software propio
                </span>
                <br />
                para administrar incidencias de red y reportes ciudadanos.
              </h2>
            </div>

            <div className="flex flex-col gap-5 text-left sm:pl-10 pt-24 sm:pt-0">
              <div className="flex justify-center sm:justify-start ml-4">
                <img
                  src="/img/iconos/box-delivery.png"
                  alt=""
                  style={{ width: "50px" }}
                />
              </div>
              <h2 className="ml-4">
                <span className="text-[#143C6A] font-bold texl-lg">
                  Somos independientes de las marcas de equipos
                </span>
                <br />
                No representamos a ninguna empresa extranjera.
              </h2>
            </div>

            <div className="flex flex-col gap-5 text-left sm:pl-10 pt-24 sm:pt-0">
              <div className="flex justify-center sm:justify-start ml-4">
                <img
                  src="/img/iconos/feedback-form.png"
                  alt=""
                  style={{ width: "50px" }}
                />
              </div>
              <h2 className="ml-4">
                <span className="text-[#143C6A] font-bold texl-lg">
                  Damos mantenimiento a la red de seguridad de Coahuila
                </span>
                <br />
                La mejor red de seguridad evaluada de México.
              </h2>
            </div>

            <div className="flex flex-col gap-5 text-left sm:pl-10 pt-24 sm:pt-0">
              <div className="flex justify-center sm:justify-start ml-4">
                <img
                  src="/img/iconos/hard-hat (1).png"
                  alt=""
                  style={{ width: "50px" }}
                />
              </div>
              <h2 className="ml-4">
                <span className="text-[#143C6A] font-bold texl-lg">
                  Cumplimos en tiempo y forma
                </span>
                <br />
                Se firma un convenio en el cual se cumplan los acuerdos del plan
                de remediación.
              </h2>
            </div>

            <div className="flex flex-col gap-5 text-left sm:pl-10 pt-24 sm:pt-0">
              <div className="flex justify-center sm:justify-start ml-4">
                <img
                  src="/img/iconos/certificate (1).png"
                  alt=""
                  style={{ width: "50px" }}
                />
              </div>
              <h2 className="ml-4">
                <span className="text-[#143C6A] font-bold texl-lg">
                  Contamos con Certificaciones
                </span>
                <br />
                En instalación, manejo y operación de Fibra Óptica.
              </h2>
            </div>
          </Slider>
        </div>
      </div>
      <div className="mt-16 mb-16 flex justify-center">
        <button className="text-white bg-gradient-to-r from-[#013506] to-[#43BA22] w-[50%] sm:w-[25%] sm:text-2xl rounded-lg text-lg hover:bg-[#598d19]">
          Más información
        </button>
      </div>
    </div>
  );
};
