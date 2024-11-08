import SearchBar from '../Components/SearchBar';
//import MovieList from "../Components/MovieList"
import {  useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { getConfig } from "../config";
import { Link } from "react-router-dom";
import {  Row, Col } from 'reactstrap';

function SearchResults() {
    const { title, page } = useParams(); // Extract URL params

    const [movies, setMovies] = useState([]);

    const { 
        movieApiOrigin = "https://www.omdbapi.com/", 
        ombdKey 
    } = getConfig();

    const resetMoviesUp = async () => {
        const getMovies = async () => {
            try {
                // Make your authorized API call
                const response = await fetch(`${movieApiOrigin}?s='${title}'&page=${+page+1}&apikey=${ombdKey}`, {
                method: 'GET', 
                headers: {
                    Accept: 'application/json',
                },
                });
                const data = await response.json();
                console.log(data);
                setMovies(data.Search);
            } catch (error) {
                console.error('Error calling API:', error);
            }
        };
        getMovies();
    }

    const resetMoviesDown = async () => {
        const getMovies = async () => {
            try {
                // Make your authorized API call
                const response = await fetch(`${movieApiOrigin}?s='${title}'&page=${page-1}&apikey=${ombdKey}`, {
                method: 'GET', 
                headers: {
                    Accept: 'application/json',
                },
                });
                const data = await response.json();
                console.log(data);
                setMovies(data.Search);
            } catch (error) {
                console.error('Error calling API:', error);
            }
        };
        getMovies();
    }

    useEffect(() => {
        const getMovies = async () => {
            try {
                // Make your authorized API call
                const response = await fetch(`${movieApiOrigin}?s='${title}'&page=${page}&apikey=${ombdKey}`, {
                method: 'GET', 
                headers: {
                    Accept: 'application/json',
                },
                });
                const data = await response.json();
                console.log(data);
                setMovies(data.Search);
            } catch (error) {
                console.error('Error calling API:', error);
            }
        };
        getMovies();
    }, []);



    return(
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${3}, 1fr)`, marginTop: '20px'}}>
                {movies.map((movie, index) => (
                    <Link 
                        key={index} 
                        to={{
                            pathname: `/movie/${movie.Title}/${movie.Year}`,  // Adjust route as necessary
                        }} 
                    >
                        {<img src={movie.Poster} alt="Poster" />}
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {movie.Title}
                        </div>  
                    </Link>
                ))}
            </div>
            
            <Row>
                <Col className="d-flex justify-content-end">
                    {page > 1 && (
                        <Link 
                            to = {{
                                pathname: `/search-result/${title}/${page-1}`,  // Adjust route as necessary
                            }} 
                        >
                            <button onClick={resetMoviesDown}>{page - 1}</button>
                        </Link>
                    )}
                </Col>
                <Col>
                    {movies.length == 10 && (
                        <Link 
                        to = {{
                            pathname: `/search-result/${title}/${+page + 1}`,  // Adjust route as necessary
                        }} 
                    >
                        <button onClick={resetMoviesUp}>{+page + 1}</button>
                    </Link>
                    )}
                </Col>
            </Row>
        </div>
        
    );
}

export default SearchResults