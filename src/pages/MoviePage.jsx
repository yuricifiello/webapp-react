import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewForm from "../components/ReviewForm";

export default function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  function fetchMovie() {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchMovie();
  }, [id]);

  if (!movie) return <p>Caricamento...</p>;

  return (
    <div className="container mt-4">
      <h1>{movie.title}</h1>
      <img
        src={`/img/${movie.image}`}
        className="img-fluid mb-3"
        alt={movie.title}
      />
      <p>{movie.abstract}</p>

      <h4 className="mt-4">Recensioni</h4>
      {movie.reviews.length > 0 ? (
        movie.reviews.map((rev) => (
          <div key={rev.id} className="border-bottom mb-3 pb-2">
            <strong>{rev.name}</strong> – {rev.vote}⭐<p>{rev.text}</p>
          </div>
        ))
      ) : (
        <p>Nessuna recensione ancora.</p>
      )}

      <ReviewForm movieId={id} onReviewAdded={fetchMovie} />
    </div>
  );
}
