import UseFetch from "../hooks/UseFetch";
import News from "./News";

export function Myposts() {
  const token = sessionStorage.getItem("token");
  const currentUser = sessionStorage.getItem("user");
  const currentUserParsed = JSON.parse(currentUser);

  const { data, error, loading } = UseFetch(
    `https://jeffrey.informaticamajada.es/api/users/${currentUserParsed.id}/news`,
    token
  );

  if (loading)
    return (
      <div className="flex justify-center items-center h-full text-gray-500">
        Cargando...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-full text-gray-500">
        Error al cargar los datos
      </div>
    );

  const noticiasOrdenadas = [...data.data].sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  return (
    <div className="home-content flex flex-row p-2 mt-4 h-[85vh] overflow-hidden overflow-y-auto">
      <News noticias={noticiasOrdenadas} />
    </div>
  );
}

export default Myposts;
