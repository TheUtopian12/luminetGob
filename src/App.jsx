import { Banner } from "./components/Banner";
import { Hero } from "./components/Hero";
import { Info } from "./components/Info";
import { MoreInfo } from "./components/MoreInfo";
import { Servicios } from "./components/Servicios/Servicios";
import Carousels from "./components/Carousels";
import Exito from "./components/Exito";
import Polizas from "./components/Polizas";
import Tecnologias from "./components/Tecnologias";
import Footer from "./components/ui/Footer";
import Formulario from "./components/Formulario";
import Breakpoints from "./components/Breakpoints";

function App() {
  return (
    <>
     <Hero />
      <Info />
      <MoreInfo />
      <Banner />
      <Servicios />
      <Carousels />
      <Exito />
      <Polizas />
      <Tecnologias />
      <Formulario />

      <Footer />
    </>
  );
}

export default App;
