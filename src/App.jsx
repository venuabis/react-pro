import { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router";
import { ColorGame } from "./ColorGame";
import "./index.css";
import { UserList } from "./UserList";
import { MovieList } from "./MovieList";
import { AddMovie } from "./AddMovie";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { EditMovie } from "./pages/EditMovie";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      {/* Common */}

      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/movies")}>
            Movies
          </Button>
          <Button color="inherit" onClick={() => navigate("/movies/new")}>
            Add Movie
          </Button>
          <Button color="inherit" onClick={() => navigate("/color-game")}>
            Color Game
          </Button>
          <Button color="inherit" onClick={() => navigate("/users")}>
            Users
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="films" element={<Navigate to="/movies" replace />} />
        {/* <Route path="movies" element={<Movie />} /> */}
        <Route path="movies" element={<MovieList />} />
        <Route path="add-movie" element={<AddMovie />} />
        {/* <Route path="movies/:id" element={<MovieDetails movies={movies} />} /> */}
        <Route path="colorgame" element={<ColorGame />} />
        <Route path="users" element={<UserList />} />
        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
function Home() {
  return <h1>Welcome to Movie App 🎊🎊 </h1>;
}
function NotFound() {
  return <h1>404 - Not Found </h1>;

  // function MovieDetails() {
  //   const { id } = useParams();

  const [movie, setMovie] = useState({});

  async function getMovie() {
    const response = await fetch(
      " https://68959014039a1a2b288f7c33.mockapi.io/movies" + id
    );
    const data = await response.json();
    setMovie(data);
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="movie-detail-container">
      <iframe
        width="100%"
        height="750"
        src={movie.trailer}
        title="AVENGERS: DOOMSDAY (2026) – FIRST TRAILER | Robert Downey Jr as Doctor Doom | Marvel Comics"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <div className="movie-detail-content-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p className="movie-rating">⭐ {movie.rating}</p>
        </div>

        <p className="movie-summary">{movie.summary}</p>
      </div>
    </div>
  );
}
