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

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setPreview(URL.createObjectURL(file));
  //     setFormData({ ...formData, main_image: file });
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.set("urgent", formData.get("urgent") ? 1 : 0);
    formData.set("premium", formData.get("premium") ? 1 : 0);
    const file = e.target?.files[0] || [];
    if (file) {
      setPreview(URL.createObjectURL(file));
      formData.set("main_image", formData.get("main_image") ? file : 0);
    }

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
    <div className="home-content h-[85vh] overflow-y-auto overflow-hidden">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex flex-col gap-4 p-4"
      >
        <label>Title</label>
        <input type="text" name="title" required />

        <label>Content</label>
        <textarea name="content" required />

        <label>Date</label>
        <input type="datetime-local" name="date" required />

        <label>Image</label>
        <input
          type="file"
          name="main_image"
          accept="image/*"
        />

        <label>Type</label>
        <select name="type" required>
          <option value="local">Local</option>
          <option value="regional">Regional</option>
          <option value="national">Nacional</option>
          <option value="international">Internacional</option>
        </select>

        <label>Urgent</label>
        <input type="checkbox" name="urgent" value="1" />

        <label>Premium</label>
        <input type="checkbox" name="premium" value="1" />

        <label>Category</label>
        <select name="category_id" required>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.type}
            </option>
          ))}
        </select>

        <p>
          You are uploading this news as{" "}
          <strong>{currentUserParsed.name}</strong>
        </p>
        <input
          type="text"
          name="user_id"
          className="hidden"
          value={currentUserParsed.id}
        />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Enviar
        </button>
      </form>
    </div>
  );
};
