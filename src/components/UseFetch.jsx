import { useEffect, useState } from "react";

// Este es el hook useFetch que realiza la llamada a la API
const UseFetch = (url, token) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();
        if (isMounted) {
          setData((prevData) => {
            if (JSON.stringify(prevData) !== JSON.stringify(result)) {
              return result; // Solo actualiza el estado si los datos han cambiado
            }
            return prevData; // Evita actualizar si los datos son los mismos
          });
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    if (token) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [url, token]);

  return { data, loading, error };
};

export default UseFetch; // Aquí exportamos el hook
