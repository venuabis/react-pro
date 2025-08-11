import { useEffect, useState } from "react";
import { Movie } from "./Movie";

export function MovieAdded() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const response = await fetch(
      "https://68959014039a1a2b288f7c33.mockapi.io/movies"
    );
    const data = await response.json();
    setMovies(data);
  }

  useEffect(() => {
    getMovies();
  }, []);

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const resetMovieForm = () => {
    setName("");
    setPoster("");
    setRating("");
    setSummary("");
  };

  const addMovie = (event) => {
    event.preventDefault(); // no refresh

    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
    };

    setMovies([...movies, newMovie]);
    resetMovieForm();
  };

  return (
    <div>
      <form onSubmit={addMovie} className="add-movie-form">
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          value={poster}
          onChange={(event) => setPoster(event.target.value)}
          type="text"
          placeholder="Poster"
        />
        <input
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          type="text"
          placeholder="Rating"
        />
        <input
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
          type="text"
          placeholder="Summary"
        />

        <button type="submit">➕ Add</button>
      </form>

      <section className="movie-list-container">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
}
