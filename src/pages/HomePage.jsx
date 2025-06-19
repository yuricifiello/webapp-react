import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
      })
      .catch((err) => console.error(err));
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
