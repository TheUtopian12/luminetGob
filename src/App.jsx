import { Helmet } from "react-helmet";
import { Banner } from "./components/Banner";
import { Hero } from "./components/Hero";
import { Info } from "./components/Info";
import { MoreInfo } from "./components/MoreInfo";
import { Servicios } from "./components/Servicios/Servicios";
import Carousels from "./components/Carousels";
import CarouselsResponsive from "./components/CarouselsResponsive";
import Exito from "./components/Exito";
import Polizas from "./components/Polizas";
import Tecnologias from "./components/Tecnologias";
import Footer from "./components/ui/Footer";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Luminet Gobierno </title>
        <link rel="canonical" href="https://www.luminetgobierno.com.mx/" />

        <meta
          name="description"
          content="Luminet Gobierno | Servicios al sector público en México 23 años de experiencia en servicios de redes y seguridad: Planta externa, última milla, ciberseguridad, contrainteligencia, centros de comando."
        />
        <meta
          property="og:description"
          content="Luminet Gobierno | Servicios al sector público en México 23 años de experiencia en servicios de redes y seguridad: Planta externa, última milla, ciberseguridad, contrainteligencia, centros de comando."
        />
      </Helmet>
      <Hero />
      <Info />
      <MoreInfo />
      <Banner />
      <Servicios />
      <span className="hidden sm:flex">
        <Carousels />
      </span>
      <span className="flex sm:hidden">
        <CarouselsResponsive />
      </span>
      <Exito />
      <Polizas />
      <Tecnologias />
      <Formulario />

      <Footer />
    </>
  );
}

export default App;
