import { NavLink } from "react-router-dom";

export function News({ noticias }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full">
      {noticias.map((item) => (
        <NavLink to={`/home/newsDetail/${item.id}`} key={item.id}>
          <div
            key={item.id}
            className="news rounded-xl shadow flex flex-col cursor-pointer"
          >
            <img
              src={item.main_image}
              alt="Noticia"
              className="w-full h-40 object-cover"
            />

            <div className="p-4 flex flex-col gap-2 flex-1">
              <p className="text-sm font-medium truncate">{item.title}</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="badge-tipo text-xs px-2 py-1 rounded-full">
                  {item.type}
                </span>
                <span className="badge-categoria text-xs px-2 py-1 rounded-full">
                  {item.category_id}
                </span>
                <p className="text-xs truncate">{item.user_id}</p>
              </div>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default News;
