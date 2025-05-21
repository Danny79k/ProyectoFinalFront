import { NavLink } from "react-router-dom";
import "../styles/about.css";
import img from "../assets/view.png";
import jeffrey from "../assets/Jeffrey.png";
import SrStroncio from "../assets/Sr.stroncio.png";
import Danny from "../assets/Danny.png";
const About = () => {
  return (
    <>
      <div className="flex flex-col items-start bg-white about-container">
        <div className="max-w-[900px] mx-auto px-6">
          <h1 className="text-black text-5xl md:text-7xl font-bold leading-tight about-title">
            Welcome to Iasi
            <br />
            <span className="text-blue-600">Tele M news</span>
          </h1>

          <p className="text-gray-700 mt-6 text-lg md:text-xl about-subtitle">
            Discover the most relevant news, in-depth analysis, and exclusive
            reports. All in one place.
          </p>

          <NavLink to="getStarted">
            <button className="about-button mt-8 px-8 py-3 rounded-full hover:scale-105 transition duration-300">
              Start now →
            </button>
          </NavLink>
        </div>

        <div className="mt-56 mb-5 flex justify-start items-center w-full px-4">
          <img
            src={img}
            alt="About Us"
            className="w-full max-w-6xl h-auto object-cover rounded-2xl"
          />
        </div>

        <div className="about-section w-full bg-white text-center py-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-5">
            Stay Updated
          </h2>
          <p className="text-base mx-auto md:text-lg text-gray-600 max-w-xl">
            Fresh news every day, reliable information, and an easy-to-use
            platform.
          </p>
        </div>

        <footer className="w-full rounded-lg bg-gray-50 mt-16 py-12 border-t border-gray-300">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
            Made with passion by
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 max-w-5xl mx-auto">
            <a
              href="https://github.com/JeffreyArrosio"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-300 p-6 w-64 text-center rounded-xl transition duration-300 card-jeffrey"
            >
              <img
                src={jeffrey}
                alt="Jeffrey"
                className="w-28 h-28 mx-auto rounded-full border-2 border-gray-300 mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">Jeffrey</h4>
            </a>

            <a
              href="https://github.com/Danny79k"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-300 p-6 w-64 text-center rounded-xl transition duration-300 card-danny"
            >
              <img
                src={Danny}
                alt="Danny"
                className="w-28 h-28 mx-auto rounded-full border-2 border-gray-300 mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">Danny</h4>
            </a>

            <a
              href="https://github.com/Sr-Stroncio"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-300 p-6 w-64 text-center rounded-xl transition duration-300 card-stroncio"
            >
              <img
                src={SrStroncio}
                alt="Sr.Stroncio"
                className="w-28 h-28 mx-auto rounded-full border-2 border-gray-300 mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Sr.Stroncio
              </h4>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default About;
