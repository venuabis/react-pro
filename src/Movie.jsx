// Presentation

import { useState } from "react";
import { MovieCounter } from "./MovieCounter";
// import { MovieAdded } from "./MovieAdded";

export function Movie({ movie }) {
  const[show,setShow]=useState(true);

  const ratingStyles={
    color: movie.rating >= 8.5 ?"green":"red"
  }
  const summaryStyles={
    display : show ? "block" : "none"
  }
  

  return (
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <div className="movie-content-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p style={ratingStyles} className="movie-rating">⭐ {movie.rating}</p>
        </div>
    <button onClick={()=> setShow(!show)}>Toggle Summary</button>
        {/* <p className="movie-summary">{movie.summary}</p> */}

        <p style={summaryStyles} className="movie-summary">{movie.summary}</p> 
        <MovieCounter/> 
      </div>
    </div>
  );
}

