import { useLocation, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { getConfig } from "../config";
import { Container, Row, Col, Button } from 'reactstrap';
import RatingsGrid from '../Components/RatingsGrid';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";


function MovieDetails() {
    const location = useLocation();
    const [movie, setMovie] = useState([]);
    const { title, releaseYear } = useParams(); // Extract URL params
    const { 
        movieApiOrigin = "https://www.omdbapi.com/", 
        apiOrigin = "https://moviep2.azurewebsites.net",
        audience, 
        ombdKey 
    } = getConfig();

    const [state, setState] = useState({
        showResult: false,
        apiMessage: "",
        error: null,
    });

    const { getAccessTokenSilently, isAuthenticated} = useAuth0();

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    // Toggle the state when the button is clicked
    const toggleChecked1 = async () => {
        const sendData = {
            title: `${title}`,
            releaseYear: parseInt(releaseYear),
            posterLink: `${movie.Poster}`
        };
        if(checked1) {
            try {
                // Get the access token from Auth0
                const token = await getAccessTokenSilently({
                    audience: audience,
                });

                // Make your authorized API call
                const response = await fetch(`${apiOrigin}/api/User/userRemoveWatchlistMovie`, {
                    method: 'PATCH', 
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(sendData)
                });
                const data = await response.json();
                setChecked1(data);
            } catch (error) {
                console.error('Error getting token or calling API:', error);
            }
        }
        else {
            try {
                // Get the access token from Auth0
                const token = await getAccessTokenSilently({
                    audience: audience,
                });

                // Make your authorized API call
                const response = await fetch(`${apiOrigin}/api/User/userAddMovieToWatchlist`, {
                    method: 'PATCH', 
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(sendData)
                });
                setChecked1(!checked1);
            } catch (error) {
                console.error('Error getting token or calling API:', error);
            }
        }
    };
    const toggleChecked2 = async () => {
        const sendData = {
            title: `${title}`,
            releaseYear: parseInt(releaseYear),
          };
        if(checked2) {
            try {
                // Get the access token from Auth0
                const token = await getAccessTokenSilently({
                    audience: audience,
                });

                // Make your authorized API call
                const response = await fetch(`${apiOrigin}/api/User/userRemoveWatchedMovie`, {
                    method: 'PATCH', 
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(sendData)
                });
                setChecked2(!checked2);
            } catch (error) {
                console.error('Error getting token or calling API:', error);
            }
        }
        else {
            try {
                // Get the access token from Auth0
                const token = await getAccessTokenSilently({
                    audience: audience,
                });

                // Make your authorized API call
                const response = await fetch(`${apiOrigin}/api/User/userAddWatchedMovie`, {
                    method: 'PATCH', 
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(sendData)
                });
                setChecked2(!checked2);
            } catch (error) {
                console.error('Error getting token or calling API:', error);
            }
        }
    };

    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                // Make your authorized API call
                const response = await fetch(`${movieApiOrigin}?t=${title}&year=${releaseYear}&plot=full&apikey=${ombdKey}`, {
                method: 'GET', 
                headers: {
                    Accept: 'application/json',
                },
                });
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error('Error calling API:', error);
            }
        };
        const checkIfMovieInWatchlist = async () => {
            try {
                // Get the access token from Auth0
                const token = await getAccessTokenSilently({
                    audience: audience,
                });

                // Make your authorized API call
                const response = await fetch(`${apiOrigin}/api/User/checkMovieInWatchlist/${title}/${releaseYear}`, {
                    method: 'GET', 
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json',
                    },
                });
                const data = await response.json();
                setChecked1(data);
            } catch (error) {
                console.error('Error getting token or calling API:', error);
            }
        };
        const checkIfMovieInWatchedMovie = async () => {
            try {
                // Get the access token from Auth0
                const token = await getAccessTokenSilently({
                    audience: audience,
                });

                // Make your authorized API call
                const response = await fetch(`${apiOrigin}/api/User/checkMovieInWatchedMovie/${title}/${releaseYear}`, {
                    method: 'GET', 
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json',
                    }
                });
                const data = await response.json();
                setChecked2(data);
            } catch (error) {
                console.error('Error getting token or calling API:', error);
            }
        };
        getMovieDetails();
        checkIfMovieInWatchlist();
        checkIfMovieInWatchedMovie();
    }, [getAccessTokenSilently]);

  return (
    <Container style={{marginTop: '20px', color: 'lightgrey'}}>
        {isAuthenticated && (
        <Row className="justify-content-end">
            <Col className="d-flex justify-content-end">
                <Button
                    onClick={toggleChecked1}
                >
                    {checked1 ? "Remove From Watchlist" : "Add to Watchlist"} 
                </Button>
            </Col>
            <Col xs="auto">
                <Button
                    onClick={toggleChecked2}
                >
                    {checked2 ? "Remove From Watched Movies" : "Add to Watched Movies"} 
                </Button>
            </Col>
        </Row>)}
        <Row>
            <Col xs="auto">{<img src={movie.Poster} alt="Poster" />}</Col>
            <Col className="flex-grow-1" >
                <Row className="align-items-center">
                    <Col>
                        <div style={{ fontWeight: 'bold', fontSize: '40px'}}>
                            {movie.Title}
                        </div>
                    </Col>
                    <Col>
                        <div style={{ fontSize: '20px'}}>
                            {movie.Released}
                        </div>
                    </Col>
                </Row>  
                <div>
                    <p>
                        {movie.Plot}    
                    </p>
                </div>
                <div>
                    <Row>
                        <Col xs="auto">
                            <p>Rated: {movie.Rated}</p>
                        </Col>
                        <Col xs="auto">
                            <p>Runtime: {movie.Runtime}</p>
                        </Col>
                        <Col>
                            <p>Genre: {movie.Genre}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="auto">
                            <p>Director: {movie.Director}</p>
                        </Col>
                        <Col xs="auto">
                            <p>Writer: {movie.Writer}</p>
                        </Col>
                    </Row>  
                    <Row>
                        <Col>
                            <p>Actors: {movie.Actors}</p>
                        </Col>
                    </Row>              
                </div>
            </Col>
        </Row>
        <Row>
            <RatingsGrid items={movie.Ratings} />
        </Row>
    </Container>
  );
}

export default MovieDetails;