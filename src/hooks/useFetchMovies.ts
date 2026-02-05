import { useEffect, useState } from "react";
import type { Movie } from "../types";
import { getMovies } from "../api";

const useFetchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const fatchMovies = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const movies = await getMovies();
      setMovies(movies);
    } catch (err) {
        setError("Erro ao buscar filmes. Tente novamente")
      console.error(err);
    }finally{
        setIsLoading(false)
    }
  };

  useEffect(() => {
    fatchMovies();
  }, []);
  return {movies, isLoading, error};
};

export default useFetchMovies;
