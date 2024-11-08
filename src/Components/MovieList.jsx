import React from "react";
import MovieDisplay from "./MovieDisplay";
import './MovieList.css'; 

function MovieList({ movieList }) {
  return (
    <ul className="movieList">
      {movieList.length > 0 ? (
        movieList.map((movie) => (
          <li key={movie.id}>
            <MovieDisplay 
              title={movie.title} 
              posterPath={movie.poster_path} 
              rating={movie.vote_average} 
              releaseYear={movie.release_date ? movie.release_date.split('-')[0] : ''}
              id={movie.id}
            />
          </li>
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </ul>
  );
}

export default MovieList;