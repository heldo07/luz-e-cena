import { useEffect, useState } from "react";
import type { Movie } from "../types";

const useFilterMovies = (movies: Movie[]) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredMovies, setFilteredeMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setFilteredeMovies(movies);
  }, [movies]);

  const handleSearch = () =>{
    const filtered = movies.filter((movies) =>
    movies.titulo.toLowerCase().includes(searchTerm.toLowerCase())

    );
    setFilteredeMovies(filtered);
  }

  return { searchTerm, setSearchTerm, filteredMovies, handleSearch};
};

export default useFilterMovies;
