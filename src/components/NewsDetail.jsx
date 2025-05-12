import { useNewsStore } from "../store/useStore";
import { useNavigate } from "react-router-dom";

export function NewsDetail() {
  const { selectedNews } = useNewsStore();
  const navigate = useNavigate();

  if (!selectedNews) {
    return (
      <div className="p-4">
        <p>No hay noticia seleccionada.</p>
        <button onClick={() => navigate("/home")}>Volver</button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={selectedNews.imagen}
        alt={selectedNews.titulo}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-2xl font-bold mt-4">{selectedNews.titulo}</h1>
      <p className="text-sm text-gray-500">{selectedNews.fecha}</p>
      <div className="mt-2 text-sm text-gray-700">
        <p>
          <strong>Tipo:</strong> {selectedNews.tipo}
        </p>
        <p>
          <strong>Categoría:</strong> {selectedNews.categoria}
        </p>
        <p>
          <strong>Redactor:</strong> {selectedNews.redactor}
        </p>
      </div>
      <p className="mt-4">{selectedNews.contenido}</p>
      <button
        onClick={() => navigate("/home")}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Volver
      </button>
    </div>
  );
}

export default NewsDetail;
