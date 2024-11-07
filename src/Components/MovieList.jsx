import React, { useState } from "react";
import MovieDisplay from "./MovieDisplay";

function MovieList({movieList}) {
    return (
        <ul className="movieList">
            <MovieDisplay/>
            <MovieDisplay/>
            <MovieDisplay/>
        </ul>
    )
}

export default MovieList