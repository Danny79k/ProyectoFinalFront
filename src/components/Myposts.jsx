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
    
    return (
        <div className="myposts flex flex-col w-full h-full p-4">
        <h1 className="text-xl font-bold mb-4">Mis Publicaciones</h1>
        <News noticias={data.data} />
        </div>
    );

}

export default Myposts;