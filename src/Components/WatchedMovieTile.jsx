import React, { useState } from "react";
import './MovieDisplay.css';
import { Link } from "react-router-dom";

function WatchedMovieTile() {

    const [posterUrl, setPosterUrl] =  useState("https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_SX300.jpg");
    const [title, setTitle] = useState("The Avengers");
    const [releaseDate, setRelease] = useState("04 May 2012",);
    
    return (
        <div className="moviePreview">
            <h1 className="title">{title}</h1>
            <img src={posterUrl}></img>
            <div className="releaseDate">{releaseDate}</div>
        </div>
    )

}

export default WatchedMovieTile;