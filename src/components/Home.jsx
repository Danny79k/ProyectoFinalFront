import { useEffect, useState } from "react";
import "../styles/home.css";
import News from "./News";
import { HiTemplate } from "react-icons/hi";
import { ImCalendar } from "react-icons/im";
import { FaEarthAmericas } from "react-icons/fa6";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import UseFetch from "../hooks/UseFetch";
import Loading from "../utils/Loading";
import Error from "../utils/Error";
import Editors from "./Editors";

export function Home() {
  const [activeOption, setActiveOption] = useState("Regional");
  const token = sessionStorage.getItem("token");
  if (!token) {
    window.location.href = "/signin";
  }
  const { data, loading, error } = UseFetch(
    "https://jeffrey.informaticamajada.es/api/news",
    token
  );

  useEffect(() => {
    if (data && data.length > 0) {
      console.log("Noticias recibidas:", data);
    }
  }, [data]); // Solo se ejecutará si `data` cambia

  const {
    data: users,
    loading: usersLoading,
    error: usersError,
  } = UseFetch("https://jeffrey.informaticamajada.es/api/users", token);

  const editors = users?.data?.filter((user) => user.type === "writer");

  //aqui habria que hacerlo bonito, te lo dejo a ti rafa
  //listo manin un saludo

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center w-full gap-4">
        <Loading tipo="News" />
      </div>
    );

  if (error) return <Error error={error} />;

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

        <div
          className="cambio h-8 flex flex-row justify-center items-center px-4 ml-auto cursor-pointer hover:bg-gray-200 rounded-xl"
          onClick={() => handleOptionClick("Editors")}
        >
          <HiArrowPathRoundedSquare className="size-5 mr-1" />
          <p>writers</p>
        </div>
      </div>

      <div className="home-content flex flex-row p-2 mt-4 h-[77vh] overflow-hidden overflow-y-auto">
        {activeOption === "Editors" ? (
          <Editors editors={editors} />
        ) : (
          <News noticias={data.data} filtro={activeOption} />
        )}
      </div>
    </div>
  );
}

export default Home;
