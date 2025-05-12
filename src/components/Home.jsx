import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/home.css";
import News from "./News";
import { HiTemplate } from "react-icons/hi";
import { ImCalendar } from "react-icons/im";
import { SiExercism } from "react-icons/si";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { useFetch } from "./UseFetch";

export function Home() {

  const token = sessionStorage.getItem("token");
  const { data, loading, error } = useFetch('https://jeffrey.informaticamajada.es/api/news', token);

  useEffect(() => {
    if (data && data.length > 0) {
      console.log("Noticias recibidas:", data);
    }
  }, [data]); // Solo se ejecutará si `data` cambia
  
  

  //aqui habria que hacerlo bonito, te lo dejo a ti rafa

  if (loading) return <div className="flex justify-center items-center h-full">Cargando...</div>;
  if (error) return <div className="flex justify-center items-center h-full">Error: {error}</div>;

  //

  // Simulación de datos de noticias
  // En una aplicación real, estos datos vendrían de una API o base de datos
  const fakeNews = [
    {
      id: 1,
      titulo: "Explosión en fábrica de Madrid",
      contenido: "Se reportó una fuerte explosión en una fábrica del centro...",
      fecha: "2025-05-12 13:00",
      imagen: "https://i.pinimg.com/736x/6f/88/de/6f88de08f7463c2a28081c99c3b5bbbb.jpg",
      tipo: "Nacional",
      categoria: "Sucesos",
      redactor: "Carlos Méndez",
    },
    {
      id: 2,
      titulo: "Nuevo parque natural en Andalucía",
      contenido:
        "Las autoridades inauguran un parque ecológico de 200 hectáreas...",
      fecha: "2025-05-11 18:30",
      imagen: "https://i.pinimg.com/736x/6f/88/de/6f88de08f7463c2a28081c99c3b5bbbb.jpg",
      tipo: "Regional",
      categoria: "Medio Ambiente",
      redactor: "Lucía Gómez",
    },
    {
      id: 3,
      titulo: "Polémica por aumento de impuestos en Barcelona",
      contenido:
        "Los ciudadanos protestan contra las nuevas tasas municipales...",
      fecha: "2025-05-10 09:15",
      imagen: "https://i.pinimg.com/736x/6f/88/de/6f88de08f7463c2a28081c99c3b5bbbb.jpg",
      tipo: "Local",
      categoria: "Economía",
      redactor: "Miguel Ruiz",
    },
    {
      id: 4,
      titulo: "España se clasifica para la final del Mundial",
      contenido:
        "La selección nacional vence a Francia en un partido histórico...",
      fecha: "2025-05-09 21:00",
      imagen: "https://i.pinimg.com/736x/6f/88/de/6f88de08f7463c2a28081c99c3b5bbbb.jpg",
      tipo: "Deportes",
      categoria: "Fútbol",
      redactor: "Ana Pérez",
    },
    {
      id: 5,
      titulo: "Nueva ola de calor afectará a todo el país",
      contenido:
        "Se prevé que las temperaturas superen los 40°C en varias provincias...",
      fecha: "2025-05-08 16:20",
      imagen: "https://i.pinimg.com/736x/6f/88/de/6f88de08f7463c2a28081c99c3b5bbbb.jpg",
      tipo: "Nacional",
      categoria: "Clima",
      redactor: "David Sánchez",
    },
    {
      id: 6,
      titulo: "Descubren una nueva especie de ave en los Pirineos",
      contenido: "Ornitólogos registran una especie desconocida en Europa...",
      fecha: "2025-05-07 11:45",
      imagen: "https://i.pinimg.com/736x/6f/88/de/6f88de08f7463c2a28081c99c3b5bbbb.jpg",
      tipo: "Ciencia",
      categoria: "Naturaleza",
      redactor: "Laura Moreno",
    },
    {
      id: 7,
      titulo: "Gran concierto solidario en Sevilla",
      contenido:
        "Más de 20 artistas se unen para recaudar fondos contra el cáncer...",
      fecha: "2025-05-06 20:00",
      imagen: "https://i.pinimg.com/736x/6f/88/de/6f88de08f7463c2a28081c99c3b5bbbb.jpg",
      tipo: "Cultura",
      categoria: "Espectáculos",
      redactor: "Carlos Gómez",
    },
    {
      id: 8,
      titulo: "Aumentan los fraudes online en España",
      contenido:
        "La policía advierte sobre nuevas modalidades de estafa digital...",
      fecha: "2025-05-05 14:30",
      imagen: "https://i.pinimg.com/736x/6f/88/de/6f88de08f7463c2a28081c99c3b5bbbb.jpg",
      tipo: "Tecnología",
      categoria: "Ciberseguridad",
      redactor: "Sandra León",
    },
  ];

  const [activeOption, setActiveOption] = useState("Follow");

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="home flex flex-col w-full h-full p-4">
      <div className="home-opcion flex flex-row w-full h-full px-2">
        <div
          className={`home-opcions flex flex-row justify-center items-center space-x-1 cursor-pointer ${activeOption === "Follow" ? "opicions-active" : ""
            }`}
          onClick={() => handleOptionClick("Follow")}
        >
          <SiExercism className="size-5" />
          <p>Follow</p>
        </div>

        <div
          className={`home-opcions flex flex-row justify-center items-center ml-7 space-x-1 cursor-pointer ${activeOption === "List" ? "opicions-active" : ""
            }`}
          onClick={() => handleOptionClick("List")}
        >
          <HiTemplate className="size-5" />
          <p>List</p>
        </div>

        <div
          className={`home-opcions flex flex-row justify-center items-center ml-7 space-x-1 cursor-pointer ${activeOption === "Breaking" ? "opicions-active" : ""
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
          <News noticias={data}/>
        </div>
      )}
    </div>
  );
}

export default Home;
