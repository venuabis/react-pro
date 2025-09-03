import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

// import { INITIAL_MOVIES } from "./INITIAL_MOVIES";

// 1. When will MovieList be mounted?
export function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function getMovies(searchTerm = "") {
    setErrorMsg("");
    const url = new URL("https://68959014039a1a2b288f7c33.mockapi.io/movies");

    if (searchTerm) {
      url.searchParams.append("search", searchTerm);
    }

    try {
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();
      console.log("****data***", data);
      if (response.status == 404) {
        throw new Error("Not found"); // manually
      }

      setMovies(data);
    } catch (err) {
      console.log("Oops:", err);
      // setMovies([]);
      setErrorMsg("Movie not found 😔");
    }
  }

  // Component Mounted - once
  useEffect(() => {
    getMovies(); // Case 1: Initial load - ✅
  }, []);

  // Delete -> Refresh
  const deleteMovie = async (id) => {
    console.log("Deleting...", id);
    const response = await fetch(
      `https://68959014039a1a2b288f7c33.mockapi.io/movies/${id}`,
      { method: "DELETE" }
    );

    const data = await response.json();
    console.log(data);
    getMovies(searchTerm); // Case 2: Delete load
  };

  const navigate = useNavigate();
  // C=F(S)

  const searchMovies = (event) => {
    event.preventDefault();
    console.log("Searchinggg...", searchTerm);
    getMovies(searchTerm); // Case 3: Search load - ✅
  };

  return (
    <div>
      <form onSubmit={searchMovies} className="add-movie-form">
        <TextField
          label="Search"
          slotProps={{
            input: {
              startAdornment: <SearchIcon />,
            },
          }}
          onChange={(event) => setSearchTerm(event.target.value)}
          value={searchTerm}
          helperText={errorMsg}
          error={errorMsg}
        />
      </form>

      <section className="movie-list-container">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            deleteBtn={
              <IconButton
                aria-label="delete"
                onClick={() => deleteMovie(movie.id)}
                color="error"
              >
                <DeleteIcon />
              </IconButton>
            }
            editBtn={
              <IconButton
                aria-label="edit"
                onClick={() => navigate(`/movies/${movie.id}/edit`)}
                color="secondary"
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </section>
    </div>
  );
}
