import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { useLoader } from "../context/LoaderContext";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const { setIsLoading } = useLoader();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:3000/movies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="container mt-4">
      <h1>Film disponibili</h1>
      <div className="row">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
