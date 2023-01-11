import React from "react";

export const Ciberseguridad = () => {
  return (
    <div>
      <div className="flex flex-col-reverse sm:flex sm:flex-row mt-20 gap-10">
        <div className="sm:w-[60%] text-2xl ml-16">
          <p className="mt-4">
            Contamos con los equipos más sofisticados de contramedidas
            electrónicas para ofrecer servicios de barrido electrónico que
            garantizan la seguridad en áreas vulnerables de los lugares
            analizados.
          </p>
          <p className="mt-4">
            Nuestro servicio es recomendado para lugares dónde se puede poner en
            peligro la seguridad e información sensible y confidencial del
            cliente.
          </p>
          <p className="mt-4">
            Por ejemplo: en salas de sesiones y despachos en las cuales se van a
            llevar a cabo reuniones y entrevistas importantes.
          </p>
        </div>
        <div>
          <img
            src="https://d29jy8ovkd5kcx.cloudfront.net/wp-content/uploads/2022/06/09141348/WIIT_banche-1280x720.jpg.webp"
            alt=""
          />
        </div>
      </div>

      <div className="mt-10 ml-32 ">
        <h1 className="text-3xl mb-10 font-bold">¿Qué hacemos?</h1>

        <div className="grid place-items-center">
          <ul className="text-2xl">
            <li type="circle">
              Detección de todas las transmisiones de audio, video y datos
              espías cuya fuente pueden ser cámaras o micrófonos ocultos en
              líneas de corriente o líneas telefónicas, sistemas espías en pc,
              laptops o celulares.
            </li>
            <li type="circle">
              Detección de emisiones de Wi-Fi, Bluetooth, Teléfonos Celulares no
              autorizados.
            </li>
            <li type="circle">
              Detección de radiofrecuencias de campo cercano no reconocidas.
            </li>
            <li type="circle">
              Inspección física y ocular especializada contra intrusiones.
            </li>
            <li type="circle">
              Detección de fugas acústicas o vibraciones mecánicas.
            </li>
            <li type="circle">Detección de interferencias.</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 ml-32 ">
        <h1 className="text-3xl mb-10 font-bold">¿Cómo lo hacemos?</h1>

        <div className="grid">
          <ul className="text-2xl">
            <li type="circle">Lentes de cámaras ocultas de forma rápida.</li>
            <li type="circle">
              Transmisiones conocidas, desconocidas, ilegales, disruptivas o
              interferentes.
            </li>
            <li type="circle">Equipos ocultos por medio del calor emitido.</li>
            <li type="circle">
              Transmisores activos y pasivos, transmisores a través de cableado
              y grabadoras.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 ml-32 ">
        <h1 className="text-3xl mb-10 font-bold">Resultados</h1>

        <div className="grid">
          <ul className="text-2xl">
            <li type="circle">
              Seguridad para redes internas, externas e internet.
            </li>
            <li type="circle">Control de ataques de hackeo.</li>
            <li type="circle">Detección de software de espionaje.</li>
            <li type="circle">Detección de micrófonos y cámaras.</li>
            <li type="circle">
              Detección de ondas de Radio Frecuencia de campo cercano.
            </li>
            <li type="circle">
              Seguridad y confianza total para realizar reuniones y conferencias
              importantes en los sitios analizados.
            </li>
            <li type="circle">Mantenemos absoluta confidencialidad.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
