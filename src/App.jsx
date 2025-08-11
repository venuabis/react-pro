import { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router";
import { ColorGame } from "./ColorGame";
import "./index.css";
import { UserList } from "./UserList";
import { MovieList } from "./MovieList";
import { AddMovie } from "./AddMovie";

export default function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/add-movie">MovieAdded</Link>
          </li>
          <li>
            <Link to="/colorgame">Color Game </Link>
          </li>
          <li>
            <Link to="/users">Users </Link>
          </li>
        </ul>
      </nav>

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
