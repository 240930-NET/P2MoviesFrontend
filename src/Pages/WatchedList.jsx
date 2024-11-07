import WatchMovieList from "../Components/WatchMovieList"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { getConfig } from "../config";
import Loading from "../Components/Loading";
import React, { useState, useEffect } from "react";

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
                setData(data);
            } catch (error) {
                console.error('Error getting token or calling API:', error);
            }
        };
        callApi();
    }, [getAccessTokenSilently]);

    return(
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    {<img src={item.PosterLink} alt="Poster" />}
                    {item.Title} 
                </div>
            ))}
        </div>
    );
}

export default withAuthenticationRequired(WatchedList, {
    onRedirecting: () => <Loading />,
  });