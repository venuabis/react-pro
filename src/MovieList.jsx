import { useEffect, useState } from "react";
import { Movie } from "./Movie";

export function MovieList() {
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
      <section className="movie-list-container">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
}
