import Seguidos from "./Seguidos";

function AsideL() {
  return (
    <div className="asideL basis-[15%] bg-gray-100  border-gray-300">
      <div className="asideL__container mt-8">
        <div className="flex items-center justify-center mb-6">
          <h3>Usuario</h3>
        </div>

        <div className="buscador w-full mb-4 p-3 flex items-center justify-end">
          <input
            type="text"
            placeholder="Buscar..."
            className="block w-40 p-1 border rounded-md focus:outline-none"
          />
        </div>

        <div className="options">
          <div className="admin-options">
            <h4>ADMIN</h4>
          </div>

          <div className="normal-options">
            <h4>seguidos</h4>
            <Seguidos />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsideL;
