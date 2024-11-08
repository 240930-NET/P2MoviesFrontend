import React, { useState } from "react";
import './MovieDisplay.css';
import { Link } from 'react-router-dom'; // Link for move to detailed page
import defaultImage from '../assets/movie_not_found.jpeg'; //  not found poster

function MovieDisplay({ title, posterPath, rating, releaseYear, id }) {

    const [posterUrl, setPosterUrl] = useState(posterPath);
    const [movieTitle, setMovieTitle] = useState(title);
    const [movieRating, setMovieRating] = useState(rating);
    const [movieReleaseYear, setReleaseYear] = useState(releaseYear);  // YYYY
    const [movieId, setId] = useState(id);

    const posterImage = posterUrl 
        ? `https://image.tmdb.org/t/p/w500${posterUrl}` 
        : defaultImage; // poster not found

    return (
        <div className="moviePreview">
            <Link to={`/movie/${movieTitle}/${movieReleaseYear}`} state={{ movieId }}>
                <img src={posterImage} alt={movieTitle} />
            </Link>
            <h1 className="title">{movieTitle}</h1>
            <p className="rating">Rating: {movieRating}</p>
        </div>
    );
}

export default MovieDisplay;