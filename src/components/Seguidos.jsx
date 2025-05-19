import { NavLink } from "react-router-dom";
import Loading from "../utils/Loading";
import Error from "../utils/Error";
import useFetch from "../hooks/UseFetch";

function Seguidos() {
  
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = sessionStorage.getItem("token");

  const { data, loading, error } = useFetch(`https://jeffrey.informaticamajada.es/api/users/${user?.id}/following`, token);

  const followersData = data?.data || [];
  console.log(followersData);

  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <div className="seguidos w-[80%] ml-3 pl-3 border-l border-gray-300">
      <div className="flex flex-col space-y-2 max-h-28 overflow-y-auto custom-scroll mt-2">
        {data && followersData.map((f) => (
          <NavLink to="home" key={f.id}>
            <div
              key={f.id}
              className="usuario-seguido flex items-center space-x-2 cursor-pointer p-1 rounded-2xl hover:bg-gray-200"
            >
              <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-300">
                <img
                  src={f.img}
                  alt={f.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm">{f.name}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Seguidos;
