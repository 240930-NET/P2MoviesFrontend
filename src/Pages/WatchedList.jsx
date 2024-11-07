import WatchMovieList from "../Components/WatchMovieList"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { getConfig } from "../config";
import Loading from "../Components/Loading";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function WatchedList() {
    
    const { apiOrigin = "https://moviep2.azurewebsites.net", audience } = getConfig();
    const [state, setState] = useState({
    showResult: false,
    apiMessage: "",
    error: null,
    });

    const [movies, setMovies] = useState([]);
    
    const { getAccessTokenSilently,
        getAccessTokenWithPopup
     } = useAuth0();

    useEffect(() => {
        const callApi = async () => {
            try {
                // Get the access token from Auth0
                const token = await getAccessTokenSilently({
                audience: audience,
                });

                // Make your authorized API call
                const response = await fetch(`${apiOrigin}/api/User/userWatchedMovies`, {
                method: 'GET', 
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                },
                });
                const data = await response.json();
                console.log(data);
                setMovies(data);
            } catch (error) {
                console.error('Error getting token or calling API:', error);
            }
        };
        callApi();
    }, [getAccessTokenSilently]);

    return(
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${3}, 1fr)` }}>
            {movies.map((item, index) => (
                <Link 
                    key={index} 
                    to={{
                        pathname: `/movie/${item.title}&${item.releaseYear}`,  // Adjust route as necessary
                        state: { item }
                    }} 
                >
                    {<img src={item.posterLink} alt="Poster" />}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {item.title}
                    </div>  
                </Link>
            ))}
        </div>
    );
}

export default withAuthenticationRequired(WatchedList, {
    onRedirecting: () => <Loading />,
  });

  //<Link to={{ pathname: `/movie`, state: { [item.title, item.year] }}></Link>    