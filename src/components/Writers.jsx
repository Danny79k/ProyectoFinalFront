import { NavLink, useParams } from "react-router-dom";
import UseFetch from "../hooks/UseFetch";
import { useNavigate } from "react-router-dom";

export default function Writers() {
    const { id } = useParams()
    const navigate = useNavigate()
    const token = sessionStorage.getItem("token");

    const { data, error, loading, reload } = UseFetch(
        `https://jeffrey.informaticamajada.es/api/users/${id}`,
        token
    );
    const { data: newsData, error: newsError, loading: newsLoading, reload: newsReload } = UseFetch(
        `https://jeffrey.informaticamajada.es/api/users/${id}/news`,
        token
    );

    if (loading || newsLoading) {
        return (
            <div className="flex flex-col justify-center items-center w-full h-[80vh] gap-4">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
                <p className="text-lg text-gray-600 font-semibold">Loading..</p>
            </div>
        );
    }

    if (error || newsError) {
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
                        Error al cargar datos: {error}
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
    const user = data.data
    const news = newsData.data
    console.log(user);
    console.log(news);

    return (
        <>
            <div className="flex items-center space-x-3">
                <img
                    src={user.img}
                    alt={user.name}
                    className="w-36 h-36 rounded-full object-cover border border-gray-300"
                />
                <span className="text-7xl font-bold">{user.name}</span>
            </div>
            <h1 className="text-4xl font-medium mt-5 text-center">Writer News</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {news.map((item) => (
                    <NavLink
                        key={item.id}
                        to={`/home/newsDetail/${item.id}`}
                        className="block p-4 rounded-lg shadow hover:shadow-lg transition"
                    >
                        <h3 className="text-lg font-semibold hover:text-blue-600">
                            {item.title}
                        </h3>
                    </NavLink>
                ))}
            </div>
        </>
    )
}