import { useState } from "react";
import axios from "axios";

export default function ReviewForm({ movieId, onReviewAdded }) {
  const [name, setName] = useState("");
  const [vote, setVote] = useState(5);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3000/movies/${movieId}/reviews`, {
        name,
        vote,
        text,
      })
      .then(() => {
        setName("");
        setVote(5);
        setText("");
        onReviewAdded();
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 mb-5">
      <h5>Lascia una recensione</h5>

      <div className="mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Il tuo nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-2">
        <select
          className="form-select"
          value={vote}
          onChange={(e) => setVote(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((v) => (
            <option key={v} value={v}>
              {v} ⭐
            </option>
          ))}
        </select>
      </div>

      <div className="mb-2">
        <textarea
          className="form-control"
          rows="3"
          placeholder="Scrivi la tua recensione"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
      </div>

      <button type="submit" className="btn btn-success">
        Invia
      </button>
    </form>
  );
}
