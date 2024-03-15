import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieServices from "../services/MoviesServices";

export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovieDetails = async () => {
    const { data } = await MovieServices.getMovieById(id);
    console.log(data);
    setMovie(data);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);
  return (
    <>
      <h1>{movie.original_title}</h1>
      <article>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
      </article>
    </>
  );
}
