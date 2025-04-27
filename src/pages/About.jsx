import { NavLink } from "react-router-dom";
import "../styles/about.css";

const About = () => {
  return (
    <>
      <div className="flex items-center bg-white about-container">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-black text-5xl md:text-7xl font-bold leading-tight about-title">
            Bienvenido a<br />
            <span className="text-blue-600">Tele M Noticias</span>
          </h1>

          <p className="text-gray-700 mt-6 text-lg md:text-xl about-subtitle">
            Descubre las noticias más relevantes, análisis en profundidad y
            reportajes exclusivos. Todo en un solo lugar.
          </p>

          <NavLink to="getStarted">
            <button className="about-button mt-8 px-8 py-3 rounded-full hover:scale-105 transition duration-300">
              Empezar Ahora →
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default About;
