import React, { useState } from "react";
import WatchedMovieTile from "./WatchedMovieTile";

function WatchMovieList({movieList}) {
    return (
        <ul className="movieList">
            <WatchedMovieTile/>
            <WatchedMovieTile/>
            <WatchedMovieTile/>
        </ul>
    )
}

export default WatchMovieList