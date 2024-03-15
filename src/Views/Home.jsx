import { useState, useEffect } from "react";
import { MoviesContainer } from "../styles/MoviesContainer";
import { MoviesList } from "../components/MoviesList";
import MovieServices from "../services/MoviesServices";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const getPopularMovies = async () => {
    const {data} = await MovieServices.getPopularMovies();
    setMovies(data.results);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <MoviesContainer>
      <MoviesList movies={movies} />
    </MoviesContainer>
  );
}
