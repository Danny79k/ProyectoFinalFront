

export function Redactores({ redactores }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full">
      {redactores.map((item) => (
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
            <p className="text-sm font-medium truncate">{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Redactores;