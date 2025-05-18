import { NavLink } from "react-router-dom";
import UseFetch from "./UseFetch";
import { useNewsStore } from "../store/useStore";

export function News({ noticias, filtro }) {
  const token = sessionStorage.getItem("token");
  const { searchTerm } = useNewsStore();

  const { data, error, loading } = UseFetch(
    "https://jeffrey.informaticamajada.es/api/users",
    token
  );

  const {
    data: data2,
    error: error2,
    loading: loading2,
  } = UseFetch("https://jeffrey.informaticamajada.es/api/categories", token);

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center w-full gap-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
        <p className="text-lg text-gray-600 font-semibold">
          Cargando Propietarios...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col items-center justify-center w-full text-center px-4">
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

  if (loading2)
    return (
      <div className="flex flex-col justify-center items-center w-full gap-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
        <p className="text-lg text-gray-600 font-semibold">
          Cargando Categorias...
        </p>
      </div>
    );

  if (error2)
    return (
      <div className="flex flex-col items-center justify-center text-center w-full px-4">
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
            {error2 ||
              "No se pudieron cargar los datos. Inténtalo de nuevo más tarde."}
          </p>
        </div>
      </div>
    );

  const users = data.data;
  const categories = data2.data;

  // 👇 Filtramos las noticias según 'filtro'
  let filteredNews = noticias;

  if (filtro === "Regional") {
    filteredNews = noticias.filter((item) => item.type === "regional");
  } else if (filtro === "International") {
    filteredNews = noticias.filter((item) => item.type === "international");
  } else if (filtro === "Breaking") {
    // Ordenamos desde la más reciente
    filteredNews = [...noticias].sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
  }

  if (searchTerm.trim() !== "") {
    filteredNews = filteredNews.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full">
      {filteredNews.map((item) => (
        <NavLink to={`/home/newsDetail/${item.id}`} key={item.id}>
          <div className="news rounded-xl shadow flex flex-col cursor-pointer">
            <img
              src={item.main_image}
              alt="Noticia"
              className="w-full h-40 object-cover"
            />

            <div className="p-4 flex flex-col gap-2 flex-1">
              <p className="text-sm font-medium truncate">{item.title}</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="badge-tipo text-xs px-2 py-1 rounded-full">
                  {item.type}
                </span>
                <span className="badge-categoria text-xs px-2 py-1 rounded-full">
                  {
                    categories.find(
                      (category) => category.id == item.category_id
                    )?.type
                  }
                </span>
                <p className="text-xs truncate">
                  {users.find((user) => user.id == item.user_id)?.name}
                </p>
              </div>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default News;
