

export function Loading({tipo}) {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-4">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-green-500"></div>
      <p className="text-lg text-gray-600 font-semibold">Cargando {tipo}...</p>
    </div>
  );
}

export default Loading;
