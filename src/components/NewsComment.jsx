import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UseFetch from "../hooks/UseFetch";

export default function NewsComment({ userData, news }) {
    const token = sessionStorage.getItem("token");
    const user = sessionStorage.getItem("user");
    const navigate = useNavigate();
    const parsedUser = JSON.parse(user);
    const usersList = userData.data

    const [formData, setFormData] = useState({
        rate: "",
        content: "",
        date: "",
        user_id: parsedUser.id|| "",
        commentable_type: "news",
        commentable_id: news,
    });

    const {
        data,
        error,
        loading,
    } = UseFetch(`https://jeffrey.informaticamajada.es/api/news/${news}/comments`, token);

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center w-full h-[80vh] gap-4">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
                <p className="text-lg text-gray-600 font-semibold">Loading...</p>
            </div>
        );
    }
    
    if (error) {
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
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToSend = { ...formData, date: new Date().toISOString() };
        console.log(dataToSend);
        try {
            const response = await fetch(
                `https://jeffrey.informaticamajada.es/api/news/${news}/comments`,
                {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                    body: JSON.stringify(dataToSend),
                }
            );
            if (!response.ok) {
                throw new Error('No autorizado o error en la solicitud');
            }
            window.location.reload();
        } catch (error) {
            console.error('Error:', error);
        }
    }


    const comments = data.data  

    return (
        <div>
            <div>
                {comments.length != 0 ?
                    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-4">
                        <h2 className="text-lg font-semibold mb-3">Comments</h2>
                        <div className="space-y-3">
                            {comments.map((comment, index) => (
                                <div key={index} className="bg-gray-100 p-3 rounded-lg shadow">
                                    <p className="text-lg text-black"><i>{
                                    (usersList.find(u => u.id === comment.user_id)).name
                                    }</i>
                                    <span className="text-xs text-gray-500 mx-5">🗓 {comment.date}</span>
                                    </p>
                                    <p className="text-sm text-gray-700">Score: {comment.rate}</p>
                                    <p className="text-sm text-gray-700">{comment.content}</p>
                                </div>
                            ))}
                        </div>

                    </div>

                    :
                    <div className="text-center p-5">
                        <h1 className="font-bold text-3xl">No comments for this news</h1>
                        <p className="text-2xl">Be the first comment!</p>
                    </div>
                }
            </div>
            <div className=" mx-auto bg-white shadow-lg rounded-lg p-4 mt-10 mb-6">
                <h2 className="text-lg font-semibold mb-2">Share your opinion</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <textarea
                        name="content"
                        className="w-full p-2 border rounded-lg resize-none focus:ring-2 focus:ring-blue-400"
                        rows="4"
                        placeholder="Write your comment here..."
                        value={formData.content}
                        onChange={handleChange}
                    />
                    <label className="block font-semibold">Score:</label>
                    <select
                        name="rate"
                        value={formData.rate}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        required
                    >
                        <option value="">Select your score</option>
                        <option value="1">⭐</option>
                        <option value="2">⭐⭐</option>
                        <option value="3">⭐⭐⭐</option>
                        <option value="4">⭐⭐⭐⭐</option>
                        <option value="5">⭐⭐⭐⭐⭐</option>
                    </select>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div >
    )
}