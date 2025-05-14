import { NavLink } from "react-router-dom";

function Seguidos() {
  const usuarios = [
    { id: 1, nombre: "Luis", avatar: "https://i.pravatar.cc/30?img=1" },
    { id: 2, nombre: "Ana", avatar: "https://i.pravatar.cc/30?img=2" },
    { id: 3, nombre: "Carlos", avatar: "https://i.pravatar.cc/30?img=3" },
    { id: 4, nombre: "Eva", avatar: "https://i.pravatar.cc/30?img=4" },
    { id: 5, nombre: "Laura", avatar: "https://i.pravatar.cc/30?img=5" },
    { id: 6, nombre: "Mario", avatar: "https://i.pravatar.cc/30?img=6" },
  ];

  return (
    <div className="seguidos w-[80%] ml-3 pl-3 border-l border-gray-300">
      <div className="flex flex-col space-y-2 max-h-28 overflow-y-auto custom-scroll mt-2">
        {usuarios.map((user) => (
          <NavLink to="home" key={user.id}>
            <div
              key={user.id}
              className="usuario-seguido flex items-center space-x-2 cursor-pointer p-1 rounded-2xl hover:bg-gray-200"
            >
              <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-300">
                <img
                  src={user.avatar}
                  alt={user.nombre}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm">{user.nombre}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Seguidos;
