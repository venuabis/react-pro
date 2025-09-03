import { use, useEffect, useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router";

import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router";

import SaveIcon from "@mui/icons-material/Save";

export function EditMovie() {
  const { id } = useParams();
  // console.log(movies);
  // const movie = movies[id];

  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  async function getMovie(id) {
    setIsLoading(true); // screen on
    setIsError(false);

    try {
      const response = await fetch(
        "https://68959014039a1a2b288f7c33.mockapi.io/movies" + id
      );
      const data = await response.json();

      console.log(data);
      // data loaded
      setMovie(data);
      setIsLoading(false); // screen off
    } catch (err) {
      console.log("Error Happened", err);
      console.log("Notification - Error"); // Todo: Material
      setIsLoading(false); // screen off
      setIsError(true);
    }
  }

  useEffect(() => {
    getMovie(id); // Good Practice
  }, [id]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <CircularProgress />
      </div>
    );
  }

  if (isError) {
    return <h1>Oops: Something Bad Happened</h1>;
  }

  return <EditMovieForm movie={movie} />;
}

export function EditMovieForm({ movie }) {
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const navigate = useNavigate();

  const updateMovie = async (event) => {
    event.preventDefault(); // no refresh

    const updatedMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };

    // PUT
    // 1. method - PUT & id
    // 2. Data - Body & JSON
    // 3. Headers - JSON

    const response = await fetch(
      `https://68959014039a1a2b288f7c33.mockapi.io/movies/${movie.id}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedMovie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);

    navigate("/movies");
  };

  return (
    <form onSubmit={updateMovie} className="add-movie-form">
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
        color="success"
        type="submit"
        variant="contained"
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
    </form>
  );
}
