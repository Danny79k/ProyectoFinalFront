import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/home.css";
import News from "./News";
import { HiTemplate } from "react-icons/hi";
import { ImCalendar } from "react-icons/im";
import { FaEarthAmericas } from "react-icons/fa6";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import UseFetch from "./UseFetch";

export function Home() {
  const [activeOption, setActiveOption] = useState("Regional");
  const token = sessionStorage.getItem("token");
  const { data, loading, error } = UseFetch(
    "https://jeffrey.informaticamajada.es/api/news",
    token
  );

  useEffect(() => {
    if (data && data.length > 0) {
      console.log("Noticias recibidas:", data);
    }
  }, [data]); // Solo se ejecutará si `data` cambia

  //aqui habria que hacerlo bonito, te lo dejo a ti rafa
  //listo manin un saludo

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center h-[80vh] gap-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
        <p className="text-lg text-gray-600 font-semibold">
          Cargando noticias...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-xl shadow-md flex flex-col items-center space-y-3">
          <svg
            className="w-12 h-12 text-red-500 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 className="text-xl font-semibold">¡Ups! Ocurrió un error</h2>
          <p className="text-sm">
            {error ||
              "No se pudieron cargar los datos. Inténtalo de nuevo más tarde."}
          </p>
        </div>
      </div>
    );

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="home flex flex-col w-full h-full p-4">
      <div className="home-opcion flex flex-row w-full h-full px-2">
        <div
          className={`home-opcions flex flex-row justify-center items-center space-x-1 cursor-pointer ${
            activeOption === "International" ? "opicions-active" : ""
          }`}
          onClick={() => handleOptionClick("International")}
        >
          <FaEarthAmericas className="size-5" />
          <p>International</p>
        </div>

        <div
          className={`home-opcions flex flex-row justify-center items-center ml-7 space-x-1 cursor-pointer ${
            activeOption === "Regional" ? "opicions-active" : ""
          }`}
          onClick={() => handleOptionClick("Regional")}
        >
          <HiTemplate className="size-5" />
          <p>Regional</p>
        </div>

        <div
          className={`home-opcions flex flex-row justify-center items-center ml-7 space-x-1 cursor-pointer ${
            activeOption === "Breaking" ? "opicions-active" : ""
          }`}
          onClick={() => handleOptionClick("Breaking")}
        >
          <ImCalendar className="size-4" />
          <p>Breaking news</p>
        </div>

        <div className="cambio h-8 flex flex-row justify-center items-center px-4 ml-auto cursor-pointer hover:bg-gray-200 rounded-xl">
          <NavLink
            className={"flex flex-row justify-center items-center space-x-1"}
            to="/home/blog"
          >
            <HiArrowPathRoundedSquare className="size-5" />
            <p>Blog</p>
          </NavLink>
        </div>
      </div>

      {data && (
        <div className="home-content flex flex-row p-2 mt-4 h-[77vh] overflow-hidden overflow-y-auto">
          <News noticias={data.data} filtro={activeOption} />
        </div>
      )}
    </div>
  );
}

export default Home;
