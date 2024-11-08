/*import React, { useState } from "react";
import './MovieDisplay.css';

function MovieDisplay() {

    const [posterUrl, setPosterUrl] =  useState("https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_SX300.jpg");
    const [title, setTitle] = useState("The Avengers");
    const [releaseDat, setRelease] = useState("04 May 2012",);
    const [ratings, setRatings] = useState(
        [
            {
                "Source": "Internet Movie Database",
                "Value": "8.0/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "91%"
            },
            {
                "Source": "Metacritic",
                "Value": "69/100"
            }
        ]
    )
    const ratingElements = ratings.map((rating) => {
        return (
            <div className="rating">
                <div className="source">{rating.Source}</div>
                <div className="ratingValue">{rating.Value}</div>
            </div>
        )
    })

    return (
        <div className="moviePreview">
            <img src={posterUrl}></img>
            <h1 className="title">{title}</h1>
            <ul>{ratingElements}</ul>
        </div>
    )

}

export default MovieDisplay;*/