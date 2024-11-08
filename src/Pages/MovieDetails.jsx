import { useLocation, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { getConfig } from "../config";

function MovieDetails() {
    const location = useLocation();
    const item = location.state?.item; // Access the passed state
    const [movie, setMovie] = useState([]);
    const { title, releaseYear } = useParams(); // Extract URL params
    const { apiOrigin = "https://www.omdbapi.com/", ombdKey } = getConfig();

  useEffect(() => {
    const callApi = async () => {
        try {
            

            

            // Make your authorized API call
            const response = await fetch(`${apiOrigin}?t=${title}&year=${releaseYear}&plot=full&apikey=${ombdKey}`, {
            method: 'GET', 
            headers: {
                Accept: 'application/json',
            },
            });
            const data = await response.json();
            console.log(data);
            setMovie(data);
        } catch (error) {
            console.error('Error calling API:', error);
        }
    };
    callApi();
    }, []);

  return (
    <div>
      <pre>{JSON.stringify(movie, null, 2)}</pre>
    </div>
  );
}

export default MovieDetails;