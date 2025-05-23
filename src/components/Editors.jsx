import { useState } from "react";
import { useEffect } from "react";
import useFetch from "../hooks/UseFetch";
import Loading from "../utils/Loading";
import Error from "../utils/Error";
import { useNewsStore, useFollowsStore } from "../store/useStore";
import { NavLink } from "react-router-dom";

export default function Editors({ editors }) {
  const [followedIds, setFollowedIds] = useState([]);
  const [loadingFollowId, setLoadingFollowId] = useState(null);
  const { searchTerm } = useNewsStore();
  const { triggerChange } = useFollowsStore();

  const token = sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("user"));

  if (!user) return <Error error="Usuario no autenticado" />;

  const { data, error, loading, reload } = useFetch(
    `https://jeffrey.informaticamajada.es/api/users/${user.id}/following`,
    token
  );

  useEffect(() => {
    console.log(data);
    if (data?.data) {
      const ids = data.data.map((item) => item.id);
      setFollowedIds(ids);
    }
  }, [data]);

  const handleFollow = async (redactorId) => {
    setLoadingFollowId(redactorId);
    try {
      const res = await fetch(
        `https://jeffrey.informaticamajada.es/api/follows`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            follower_id: user.id,
            redactor_id: redactorId,
          }),
        }
      );
      if (res.ok && !followedIds.includes(redactorId)) {
        setFollowedIds((prev) => [...prev, redactorId]);
        reload();
        triggerChange();
      } else {
        console.error("Error al seguir:", await res.text());
      }
    } catch (err) {
      console.error("Error en la petición:", err);
    } finally {
      setLoadingFollowId(null);
    }
  };

  const handleUnfollow = async (redactorId) => {
    try {
      console.log(token);
      const res1 = await fetch(
        `https://jeffrey.informaticamajada.es/api/follows/find?follower_id=${user.id}&redactor_id=${redactorId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(
        `https://jeffrey.informaticamajada.es/api/follows/find?follower_id=${user.id}&redactor_id=${redactorId}`
      );
      const followData = await res1.json();
      const followId = followData?.id;

      if (!followId) {
        console.error("No se encontró la relación de follow.");
        return;
      }

      const res2 = await fetch(
        `https://jeffrey.informaticamajada.es/api/follows/${followId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res2.ok) {
        setFollowedIds((prev) =>
          prev.filter((follow) => follow.redactor_id !== redactorId)
        );
        reload();
        triggerChange();
      } else {
        console.error("Error al dejar de seguir:", await res2.text());
      }
    } catch (err) {
      console.error("Error en la petición:", err);
    }
  };

  if (loading) return <Loading tipo="Seguidos" />;
  if (error) return <Error error={error} />;

  console.log("DATA FETCHED:", data);
  console.log("Followed IDs:", followedIds);
  console.log(
    "redactor_id:",
    data.data[0]?.redactor_id,
    typeof data.data[0]?.redactor_id
  );

  if (searchTerm.trim() !== "") {
    editors = editors.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div
      className={`grid gap-4 p-4 w-full ${editors.length < 3
        ? "place-items-center"
        : "md:grid-cols-2 lg:grid-cols-3"
        }`}
    >
      {editors.map((item) => {
        const isFollowed = followedIds.includes(Number(item.id));
        return (
          <div
            key={item.id}
            className="news rounded-xl shadow flex flex-col cursor-pointer max-w-md w-full"
          >
            <NavLink to={`/home/writers/${item.id}`}>
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
            </NavLink>
            <div className="p-4 flex flex-row justify-around gap-2 flex-1">
              <p className="text-sm font-medium truncate">{item.name}</p>
              {!isFollowed ? (
                <button
                  onClick={() => handleFollow(item.id)}
                  disabled={loadingFollowId === item.id}
                  className="bg-amber-700 text-white py-1 px-3 rounded-xl text-sm w-fit hover:bg-amber-600 transition disabled:opacity-50"
                >
                  {loadingFollowId === item.id ? "Siguiendo..." : "Follow"}
                </button>
              ) : (
                <button
                  onClick={() => handleUnfollow(item.id)}
                  className="bg-green-700 hover:bg-green-600 text-white py-1 px-3 rounded-xl text-sm w-fit transition"
                >
                  Following
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
