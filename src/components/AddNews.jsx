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
  const [img, setImg] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setImg(file);
      console.log(file)

    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", e.target.title.value);
    formData.append("content", e.target.content.value);
    formData.append("date", e.target.date.value);
    formData.append("type", e.target.type.value);
    formData.append("category_id", e.target.category_id.value);
    formData.append("user_id", e.target.user_id.value);
    formData.append("urgent", e.target.urgent.checked ? 1 : 0);
    formData.append("premium", e.target.premium.checked ? 1 : 0);
    formData.append("main_image", e.target.main_image.files[0]);
  
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }
      
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
        //const errorData = await response.json();
        //console.error("Error al enviar:", errorData);
        return;
      }
      //const result = await response.json();
      //console.log("Noticia subida correctamente:", result);
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
    <div className="home-content h-[85vh] overflow-y-auto p-6">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-5"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Añadir Noticia</h2>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">Título</label>
          <input
            type="text"
            name="title"
            required
            className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">Contenido</label>
          <textarea
            name="content"
            required
            className="border rounded-lg px-3 py-2 mt-1 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">Fecha</label>
          <input
            type="datetime-local"
            name="date"
            required
            className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">Imagen</label>
          <input
            type="file"
            name="main_image"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1"
          />
          {preview && (
            <img
              src={preview}
              alt="Vista previa"
              className="mt-2 w-48 h-32 object-cover rounded-lg shadow"
            />
          )}
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">Tipo</label>
          <select
            name="type"
            required
            className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
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

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">Categoría</label>
          <select
            name="category_id"
            required
            className="border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.type}
              </option>
            ))}
          </select>
        </div>

        <p className="text-gray-600 text-sm">
          Estás publicando esta noticia como{" "}
          <strong className="text-gray-800">{currentUserParsed.name}</strong>
        </p>

        <input type="text" name="user_id" className="hidden" value={currentUserParsed.id} />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Publicar Noticia
        </button>
      </form>
    </div>
  );
};
