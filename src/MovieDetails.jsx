import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";

// useParams - Hook
export function MovieDetails() {
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
        "https://68959014039a1a2b288f7c33.mockapi.io/movies/" + id
      );
      const data = await response.json();
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
      {/* <img src={movie.poster} alt={movie.name} className="movie-poster" /> */}
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
