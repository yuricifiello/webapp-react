import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <img
          src={`/img/${movie.image || "default.jpg"}`}
          className="card-img-top"
          alt={movie.title}
          onError={(e) => {
            if (!e.target.src.includes("default.jpg")) {
              e.target.src = "/img/default.jpg";
            }
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">
            {movie.description?.slice(0, 80) ||
              "Nessuna descrizione disponibile"}
            ...
          </p>

          <Link to={`/movies/${movie.id}`} className="btn btn-primary">
            Dettagli
          </Link>
        </div>
      </div>
    </div>
  );
}
