
export function Editors({ Editors }) {

  

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full">
      {Editors.map((item) => (
        <div
          key={item.id}
          className="news rounded-xl shadow flex flex-col cursor-pointer"
        >
          <img src={item.img} alt="img" className="w-full h-40 object-cover" />
          <div className="p-4 flex flex-row justify-around gap-2 flex-1">
            <p className="text-sm font-medium truncate">{item.name}</p>
            <button
              onClick={() => handleFollow(item.id)}
              className="bg-red-600 text-white py-1 px-3 rounded-xl text-sm w-fit hover:bg-red-700 transition"
            >
              Seguir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Editors;
