import UseFetch from "../hooks/UseFetch";
import { useState } from "react";

export const AddNews = () => {
  const token = sessionStorage.getItem("token");
  const currentUser = sessionStorage.getItem("user");
  const currentUserParsed = JSON.parse(currentUser);

  const { data, error, loading } = UseFetch(
    "https://jeffrey.informaticamajada.es/api/categories",
    token
  );

  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({});

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setFormData({ ...formData, main_image: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.set("urgent", formData.get("urgent") ? 1 : 0);
    formData.set("premium", formData.get("premium") ? 1 : 0);

    try {
      const response = await fetch(
        "https://jeffrey.informaticamajada.es/api/news",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error al enviar:", errorData);
        return;
      }

      const result = await response.json();
      console.log("Noticia subida correctamente:", result);
    } catch (error) {
      console.error("Error en la subida:", error);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-full text-gray-500">
        Cargando...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-full text-red-500">
        Error: {error}
      </div>
    );

  const categories = data.data;

  return (
    <div className="home-content h-[85vh] rounded-lg overflow-y-auto  bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Publicar Nueva Noticia
        </h2>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="flex flex-col gap-5"
        >
          <div>
            <label className="block text-gray-600 font-medium mb-1">Título</label>
            <input
              type="text"
              name="title"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">Contenido</label>
            <textarea
              name="content"
              required
              className="w-full border border-gray-300 rounded-lg p-2 h-28 resize-none focus:outline-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">Fecha</label>
            <input
              type="datetime-local"
              name="date"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">Imagen Principal</label>
            <input
              type="file"
              name="main_image"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-gray-600"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-3 rounded-lg h-40 object-cover border"
              />
            )}
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">Tipo</label>
            <select
              name="type"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-blue-500"
            >
              <option value="local">Local</option>
              <option value="regional">Regional</option>
              <option value="national">Nacional</option>
              <option value="international">Internacional</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-gray-700">
              <input type="checkbox" name="urgent" value="1" className="accent-blue-500" />
              Urgente
            </label>
            <label className="flex items-center gap-2 text-gray-700">
              <input type="checkbox" name="premium" value="1" className="accent-blue-500" />
              Premium
            </label>
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">Categoría</label>
            <select
              name="category_id"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-blue-500"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.type}
                </option>
              ))}
            </select>
          </div>

          <p className="text-gray-500 text-sm">
            Publicando como{" "}
            <span className="font-semibold text-gray-800">{currentUserParsed.name}</span>
          </p>

          <input type="hidden" name="user_id" value={currentUserParsed.id} />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition"
          >
            Publicar Noticia
          </button>
        </form>
      </div>
    </div>
  );
};
