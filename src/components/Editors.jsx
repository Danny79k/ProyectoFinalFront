import Loading from "../utils/Loading";
import Error from "../utils/Error";
import useFetch from "../hooks/UseFetch";
import { useEffect, useState } from "react";

export function Editors({ Editors }) {
  const [followedIds, setFollowedIds] = useState([]);

  const token = sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("user"));

  const { data, error, loading } = useFetch(
    `https://jeffrey.informaticamajada.es/api/users/${user.id}/following`,
    token
  );

  useEffect(() => {
    if (data?.data) {
      const ids = data.data.map((item) => item.redactor_id);
      setFollowedIds(ids);
    }
  }, [data]);

  const handleFollow = async (redactorId) => {
    try {
      const res = await fetch(`https://jeffrey.informaticamajada.es/api/follows`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user_id: user.id,
          redactor_id: redactorId,
        }),
      });

      if (res.ok) {
        setFollowedIds((prev) => [...prev, redactorId]); // Actualiza estado
      } else {
        console.error("Error al seguir:", await res.text());
      }
    } catch (err) {
      console.error("Error en la petición:", err);
    }
  };

  if (loading) return <Loading tipo="Seguidos" />;
  if (error) return <Error error={error} />;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full">
      {Editors.map((item) => {
        const isFollowed = followedIds.includes(item.id);
        return (
          <div
            key={item.id}
            className="news rounded-xl shadow flex flex-col cursor-pointer"
          >
            <img
              src={item.img}
              alt="img"
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-row justify-around gap-2 flex-1">
              <p className="text-sm font-medium truncate">{item.name}</p>
              {!isFollowed ? (
                <button
                  onClick={() => handleFollow(item.id)}
                  className="bg-red-600 text-white py-1 px-3 rounded-xl text-sm w-fit hover:bg-red-700 transition"
                >
                  Seguir
                </button>
              ) : (
                <p className="bg-green-600 text-white py-1 px-3 rounded-xl text-sm w-fit transition">
                  Ya lo sigues
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Editors;
//