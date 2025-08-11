import { useState } from "react";
import { MovieCounter } from "./MovieCounter";
import { Link, useNavigate } from "react-router";

export function Movie({ movie }) {
  const [show, setShow] = useState(true);

  const ratingStyles = {
    color: movie.rating >= 8.5 ? "green" : "red",
  };

  const summaryStyles = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();

  return (
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <div className="movie-content-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p style={ratingStyles} className="movie-rating">
            ⭐ {movie.rating}
          </p>
        </div>

        <button onClick={() => setShow(!show)}>Toggle Summary</button>
        <button onClick={() => navigate("/movies/" + movie.id)}>
          View Details
        </button>

        {show && <p className="movie-summary">{movie.summary}</p>}

        <MovieCounter />
      </div>
    </div>
  );
}
