import "./Home.css";
import Hero from "../Components/Hero/Hero";
import { lazy, Suspense } from "react";

const About = lazy(() => import("../Components/About/About"));
const Skills = lazy(() => import("../Components/Skills/Skills"));
const Portfolio = lazy(() => import("../Components/Portfolio/Portfolio"));
const ContactForm = lazy(() => import("../Components/ContacForm/ContactForm"));

const Home = () => {
  return (
    <div className="home">
      <Hero />

      <Suspense
        fallback={<div className="loading">Cargando sección Sobre mí...</div>}
      >
        <About />
      </Suspense>

      <Suspense
        fallback={<div className="loading">Cargando habilidades...</div>}
      >
        <Skills />
      </Suspense>

      <Suspense
        fallback={<div className="loading">Cargando portafolio...</div>}
      >
        <Portfolio />
      </Suspense>

      <Suspense
        fallback={
          <div className="loading">Cargando formulario de contacto...</div>
        }
      >
        <ContactForm />
      </Suspense>
    </div>
  );
};

export default Home;
