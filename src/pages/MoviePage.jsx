import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h1>{movie.title}</h1>
      <p>{movie.abstract}</p>
      <h3>Recensioni</h3>
      <ul>
        <img
          src={`/img/${movie.image}`}
          alt={movie.title}
          className="img-fluid mb-3"
        />

        {movie.reviews.map((review) => (
          <li key={review.id}>
            <strong>{review.name}</strong>: {review.text} ({review.vote}/5)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviePage;
