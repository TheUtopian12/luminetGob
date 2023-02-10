import React from 'react'
import DrawerPolizas from '../ui/DrawerPolizas';
import poste from "../../assets/Polizas/unnamed.jpeg";
const Torres = () => {
  return (
    <div className="flex justify-center mt-16">
    <div className="sm:flex gap-16  sm:w-[80%] sm:h-[500px] items-center p-10 rounded-3xl">
      <div className='w-[300px]'>
        <img src={poste} alt="" className="rounded-2xl h-[300px]" />
      </div>
      <div className='sm:w-[50%] text-white'>
        <h1 className="sm:text-left text-xl text-[#76BA22] font-bold mb-10">
        Mantenimiento de Torres <br className='md:hidden'/> de Telecomunicaciones </h1>

        <p className="mb-5 text-lg text-left hidden sm:grid">
        Ejecutamos las acciones y trabajos necesarios con el objetivo de asegurar la conservación de los anclajes y las estructuras de soporte, tramos de la torre y tensores. </p>
        <p className='text-lg text-left hidden sm:grid'>
        Así como la verticalidad de la torre, el sistema de parrayos y tierra y retoque de pintura para evitar corrosión de ser necesaria. </p>
        <div className="flex justify-center gap-24 mt-5">
        <a href='#contacto'
          type="button"
          className="text-white bg-gradient-to-br from-[#08785c] to-[#8ec529] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 hidden sm:grid"
        >
          {" "}
          Más información
        </a>
        </div>

        <DrawerPolizas
            texto={
              <div className="m-10">
             <p className="mb-5 text-lg text-left grid sm:hidden">
        Ejecutamos las acciones y trabajos necesarios con el objetivo de asegurar la conservación de los anclajes y las estructuras de soporte, tramos de la torre y tensores. </p>
        <p className='text-lg text-left grid sm:hidden'>
        Así como la verticalidad de la torre, el sistema de parrayos y tierra y retoque de pintura para evitar corrosión de ser necesaria. </p>
       
                <div className="flex justify-center gap-24 mt-5">
                  <a
                    href="#contacto"
                    type="button"
                    className="text-white bg-gradient-to-br from-[#08785c] to-[#8ec529] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    {" "}
                    Más información
                  </a>
                </div>
              </div>
            }
          />
      </div>
    </div>
  </div>
  )
}

export default Torres