

export function Error({ error }) {
  return (
    <div className="flex flex-col items-center justify-center w-full text-center px-4">
      <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-xl shadow-md flex flex-col items-center space-y-3">
        <svg
          className="w-12 h-12 text-red-500 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="text-xl font-semibold">¡Ups! Ocurrió un error</h2>
        <p className="text-sm">
          {error ||
            "No se pudieron cargar los datos. Inténtalo de nuevo más tarde."}
        </p>
      </div>
    </div>
  );
}

export default Error;
