import { useParams, useNavigate } from "react-router-dom";
import UseFetch from "./UseFetch";

export function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  const {
    data: noticia,
    error,
    loading,
  } = UseFetch(`https://jeffrey.informaticamajada.es/api/news/${id}`, token);

  const {
    data: usersData,
    error: usersError,
    loading: usersLoading,
  } = UseFetch("https://jeffrey.informaticamajada.es/api/users", token);

  const {
    data: categoriesData,
    error: categoriesError,
    loading: categoriesLoading,
  } = UseFetch("https://jeffrey.informaticamajada.es/api/categories", token);

  if (loading || usersLoading || categoriesLoading) {
    return (
      <div className="flex flex-col justify-center items-center w-full h-[80vh] gap-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
        <p className="text-lg text-gray-600 font-semibold">Cargando New...</p>
      </div>
    );
  }

  if (error || usersError || categoriesError) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-[80vh] text-center px-4">
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
            Error al cargar datos: {error || usersError || categoriesError}
          </p>
        </div>
        <button
          onClick={() => navigate("/home")}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Volver
        </button>
      </div>
    );
  }

  const item = noticia?.data;
  const users = usersData?.data || [];
  const categories = categoriesData?.data || [];

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-[80vh] text-center px-4">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-6 py-4 rounded-xl shadow-md flex flex-col items-center space-y-3">
          <svg
            className="w-12 h-12 text-yellow-500 animate-pulse"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M12 5a7 7 0 100 14 7 7 0 000-14z"
            />
          </svg>
          <h2 className="text-xl font-semibold">Noticia no encontrada</h2>
          <p className="text-sm">
            La noticia solicitada no existe o ha sido eliminada.
          </p>
        </div>
        <button
          onClick={() => navigate("/home")}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Volver
        </button>
      </div>
    );
  }

  return (
    <div className="home-content mt-10 h-[85vh] overflow-hidden overflow-y-auto">
      <div className="newsDetail rounded-xl overflow-hidden flex flex-col md:flex-row shadow bg-white text-gray-900">
        {/* Lado izquierdo: texto */}
        <div className="md:w-1/2 w-full p-6 space-y-4 flex flex-col">
          {/* Encabezado */}
          <div>
            <h1 className="text-3xl font-bold">{item.title}</h1>
            <p className="text-sm text-gray-600 mt-1">
              Publicado el {new Date(item.created_at).toLocaleDateString()}
            </p>

            {/* Etiquetas */}
            <div className="flex flex-wrap gap-2 mt-2 text-sm">
              <span className="badge-tipo px-3 py-1 rounded-full bg-blue-200 text-blue-900">
                {item.type}
              </span>
              <span className="badge-categoria px-3 py-1 rounded-full bg-green-200 text-green-900">
                Categoría:{" "}
                {categories.find((c) => c.id == item.category_id)?.type ||
                  item.category_id}
              </span>
            </div>
          </div>

          <div className="mt-4 h-60 overflow-y-auto pr-2 leading-relaxed whitespace-pre-line text-gray-800">
            {item.content}
          </div>

          <div className="mt-4">
            <span className="redactor px-3 py-1 rounded-full bg-purple-200 text-purple-900 text-sm">
              Redactor:{" "}
              {users.find((u) => u.id == item.user_id)?.name || item.user_id}
            </span>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => navigate("/home")}
              className="mt-6 mb-6 w-24 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow"
            >
              Volver
            </button>
          </div>
        </div>

        {/* Imagen a la derecha */}
        <div className="md:w-1/2 w-full flex justify-center items-center p-4">
          <img
            src={item.main_image}
            alt={item.title}
            className="max-w-[550px] w-full h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
