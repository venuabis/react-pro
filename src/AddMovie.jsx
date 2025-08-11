import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";

export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const resetMovieForm = () => {
    setName("");
    setPoster("");
    setRating("");
    setSummary("");
    setTrailer("");
  };

  const navigate = useNavigate();

  const addMovie = async (event) => {
    event.preventDefault(); // no refresh

    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };

    // POST
    // 1. method - POST
    // 2. Data - Body & JSON
    // 3. Headers - JSON

    const response = await fetch(
      "https://6402db84f61d96ac487212a6.mockapi.io/movies",
      {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);

    navigate("/movies");
    // Existing movies + new Movie
    // setMovies([...movies, newMovie]);
    resetMovieForm();
  };

  return (
    <form onSubmit={addMovie} className="add-movie-form">
      <TextField
        variant="outlined"
        label="Name"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />

      <TextField
        variant="outlined"
        label="Poster"
        onChange={(event) => setPoster(event.target.value)}
        value={poster}
      />

      <TextField
        variant="outlined"
        label="Rating"
        onChange={(event) => setRating(event.target.value)}
        value={rating}
      />

      <TextField
        variant="outlined"
        label="Summary"
        onChange={(event) => setSummary(event.target.value)}
        value={summary}
      />

      <TextField
        variant="outlined"
        label="Trailer"
        onChange={(event) => setTrailer(event.target.value)}
        value={trailer}
      />

      {/* Task 3.2 - Add the color to the list */}
      {/* Existing Colors + New Color */}
      {/* submit -> onSubmit event triggered */}
      <Button
        color="primary"
        type="submit"
        variant="contained"
        startIcon={<AddIcon />}
      >
        Add
      </Button>
    </form>
  );
}
