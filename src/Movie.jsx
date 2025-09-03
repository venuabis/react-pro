// Presentation

import { memo, useState } from "react";
import { MovieCounter } from "./MovieCounter";
import { Link, useNavigate } from "react-router";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export const Movie = memo(function ({
  movie,
  deleteBtn = <button>Delete</button>,
  editBtn,
}) {
  console.log("Re-rending.... Movie");
  const [show, setShow] = useState(true);

  // rating >= 8.5 (green) else (red)

  // Conditional Styling
  const summaryStyles = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();

  // +1 -> forward
  // -1 -> backward

  return (
    <Card className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <div className="movie-content-container">
        <h2 className="movie-name">
          {movie.name}
          <IconButton
            aria-label="Toggle Summary"
            onClick={() => setShow(!show)}
            color="primary"
          >
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          <IconButton
            aria-label="Go to movie details"
            onClick={() => navigate("/movies/" + movie.id)}
            color="primary"
          >
            <InfoIcon />
          </IconButton>
        </h2>

        <Rating
          name="movie-rating"
          defaultValue={movie.rating / 2}
          precision={0.1}
          readOnly
        />

        {show && <p className="movie-summary">{movie.summary}</p>}
        <div className="movie-action-container">
          <MovieCounter />
          <div>
            {deleteBtn} {editBtn}
          </div>
        </div>
      </div>
    </Card>
  );
});
